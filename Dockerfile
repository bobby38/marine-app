# Build stage
FROM node:18-alpine as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy all files
COPY . .

# Build the app with explicit base path
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built files from build stage to nginx serve directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Create a script to handle SPA routing and base href
RUN echo '#!/bin/sh\n\
# Replace base href if needed\n\
sed -i "s|<base href=\"/\">|<base href=\"$BASE_HREF\">|g" /usr/share/nginx/html/index.html 2>/dev/null || true\n\
\n\
# Create a custom 404 page that redirects to index.html for SPA routing\n\
cat > /usr/share/nginx/html/404.html << EOF\n\
<!DOCTYPE html>\n\
<html>\n\
<head>\n\
  <meta charset="utf-8">\n\
  <title>Redirecting...</title>\n\
  <script>\n\
    window.location.href = "/";\n\
  </script>\n\
</head>\n\
<body>\n\
  <p>Redirecting to home page...</p>\n\
</body>\n\
</html>\n\
EOF\n\
\n\
# Start nginx\n\
nginx -g "daemon off;"' > /docker-entrypoint.sh && \
chmod +x /docker-entrypoint.sh

# Add Coolify-specific configuration
# Expose port 80 for Coolify
EXPOSE 80

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 CMD wget --quiet --tries=1 --spider http://localhost:80/ || exit 1

# Command to run nginx in foreground
CMD ["/docker-entrypoint.sh"]
