import React, { useState, useMemo } from 'react';
import { MarineService } from '../types';
import { ServiceCard } from '../components/ServiceCard';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import L from 'leaflet'; // Import L for custom icons

interface ServicesPageProps {
  services: MarineService[];
}

// Custom blue SVG marker icon
const bluePinSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="#2563EB">
  <path d="M12 0C8.13 0 5 3.13 5 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 4.5 12 4.5s2.5 1.12 2.5 2.5S13.38 9.5 12 9.5z"/>
</svg>
`;

const customMarkerIcon = L.icon({
    iconUrl: `data:image/svg+xml;base64,${btoa(bluePinSvg)}`,
    iconSize: [28, 28], // size of the icon
    iconAnchor: [14, 28], // point of the icon which will correspond to marker's location (bottom center)
    popupAnchor: [0, -28] // point from which the popup should open relative to the iconAnchor
});

const ServicesPage: React.FC<ServicesPageProps> = ({ services }) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'maintenance', 'cleaning', 'repair', 'installation'];

  const filteredServices = selectedCategory === 'All'
    ? services
    : services.filter(service => service.category === selectedCategory);

  // Filter services that have coordinates for the map
  const servicesWithCoords = useMemo(() => {
      return filteredServices.filter(service => service.latitude != null && service.longitude != null);
  }, [filteredServices]);

  // Default map center (Singapore)
  const mapCenter: [number, number] = [1.3521, 103.8198]; 

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-64 mb-12"> 
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-900 dark:to-indigo-900">
          {/* Optional: Add overlay elements here */}
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl font-bold text-white mb-2">Explore Our Marine Services</h1>
          <p className="text-xl text-blue-100">Top-quality services for your vessel</p>
        </div>
      </div>

      {/* How It Works Section - Restored background and dark text */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Browse Services', description: 'Find the perfect service for your needs.', icon: '🔍' },
              { title: 'Book Online', description: 'Schedule your service easily and quickly.', icon: '📅' },
              { title: 'Get Quality Work', description: 'Our certified providers deliver top results.', icon: '⭐' },
            ].map((step, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm"> {/* Restored bg, dark:bg, shadow */}
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section - Restored background, shadow, and dark styles */}
      <div className="sticky top-0 z-10 bg-white dark:bg-gray-800 py-4 px-4 rounded-lg shadow-sm mb-8"> 
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 justify-between items-center">
          <div className="flex gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600' // Restored dark styles
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Map View - Conditionally render if services have coords */}
      {servicesWithCoords.length > 0 && (
        <div className="mb-8 h-96 w-full rounded-lg overflow-hidden shadow-lg relative"> 
           {/* Re-added Blue Tint Overlay */}
           <div
            className="absolute inset-0 bg-blue-500 opacity-10 z-10 pointer-events-none"
          ></div>
          <MapContainer 
            center={mapCenter} 
            zoom={11} 
            scrollWheelZoom={false} 
            style={{ height: "100%", width: "100%" }} 
            className="relative z-0" /* Ensure map is below overlay */
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" // Changed to Positron with labels
            />
            {servicesWithCoords.map(service => (
              <Marker 
                key={service.id} 
                position={[service.latitude!, service.longitude!]}
                icon={customMarkerIcon} // Use the custom SVG icon
              >
                <Popup>
                  <div className="text-sm">
                    <h4 className="font-semibold">{service.name}</h4>
                    <p>{service.category}</p>
                    <p>Price: ${service.price.toFixed(2)}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      )}

      {/* Services Grid Section - Restored background and dark text */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Our Services</h2>
          <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12">Browse our range of professional marine services</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              // ServiceCard already handles its own dark mode styling
              <ServiceCard key={service.id} service={service} /> 
            ))}
          </div>
        </div>
      </section>

      {/* Provider CTA - Restored dark gradient */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-900 dark:to-blue-900 mt-16">
        <div className="absolute inset-0 bg-grid-white/15 [mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
        <div className="relative px-6 py-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Are you a Marine Service Provider?
          </h3>
          <p className="text-lg text-purple-100 mb-8">
            Join our platform and reach more customers today!
          </p>
          <button
            onClick={() => navigate('/provider-signup')}
            className="px-8 py-3 bg-white text-purple-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-colors"
          >
            Learn More & Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
