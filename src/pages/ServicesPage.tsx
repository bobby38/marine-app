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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900"> {/* Added base background */}
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-teal-500 text-white overflow-hidden">
        {/* Optional: Add overlay elements here */}
        <div className="absolute inset-0">
        </div>
        {/* Adjusted Padding & Text Size */}
        <div className="relative container mx-auto px-2 py-8 sm:px-4 sm:py-12 flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Explore Marine Services</h1>
          <p className="text-base sm:text-lg text-blue-100">Find top-quality services for your vessel</p>
        </div>
      </div>

      {/* Main Content Area - Adjusted Padding & Max Width */}
      <div className="container mx-auto max-w-7xl px-4 py-4 sm:px-6 md:px-8 lg:py-8"> {/* Added max-w, adjusted px */}

        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-4 sm:mb-6">Explore Marine Services</h1>

        {/* Filter Buttons - Adjusted padding, text size, gap, margin */}
        <div className="mb-4 sm:mb-6 flex flex-wrap justify-center gap-1 sm:gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600' // Restored dark styles
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Map View - Conditionally render if services have coords */}
        {servicesWithCoords.length > 0 && (
          <div className="mb-4 sm:mb-6 h-64 sm:h-80 md:h-96 w-full rounded-lg overflow-hidden shadow-lg relative"> 
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

        {/* Services Grid Section - Adjusted Gap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {filteredServices.length > 0 ? (
            filteredServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 dark:text-gray-400 py-8">No services found matching your criteria.</p> // Added padding when empty
          )}
        </div>
      </div>

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
