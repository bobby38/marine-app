import React, { useState } from 'react';
import { MarineService } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';

// Sample data for demonstration
const sampleServices: MarineService[] = [
  {
    id: '1',
    title: 'Hull Cleaning Service',
    description: 'Professional underwater hull cleaning to remove marine growth and improve vessel performance.',
    price: 299,
    reviews: [
      {
        id: '101',
        rating: 4.5,
        comment: 'Great service, my boat performs much better now!',
        authorName: 'John Smith',
        date: '2024-03-15'
      },
      {
        id: '102',
        rating: 5,
        comment: 'Excellent work and very professional team.',
        authorName: 'Sarah Johnson',
        date: '2024-03-10'
      }
    ],
    averageRating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    availability: {
      nextAvailable: 'Tomorrow',
      slots: ['9:00 AM', '2:00 PM', '4:30 PM']
    }
  },
  {
    id: '2',
    title: 'Propeller Inspection & Repair',
    description: 'Comprehensive propeller inspection and repair service to ensure optimal performance.',
    price: 399,
    reviews: [
      {
        id: '201',
        rating: 4,
        comment: 'Fixed my propeller issues quickly.',
        authorName: 'Mike Davis',
        date: '2024-03-05'
      }
    ],
    averageRating: 4,
    imageUrl: 'https://images.unsplash.com/photo-1552353617-3bfd679b3bdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    availability: {
      nextAvailable: 'Friday',
      slots: ['10:00 AM', '3:00 PM']
    }
  },
  {
    id: '3',
    title: 'Engine Maintenance',
    description: 'Complete engine maintenance service including oil changes, filter replacements, and system checks.',
    price: 549,
    reviews: [
      {
        id: '301',
        rating: 5,
        comment: 'Excellent service. Engine running smoothly now.',
        authorName: 'Robert Chen',
        date: '2024-03-12'
      },
      {
        id: '302',
        rating: 4.5,
        comment: 'Very thorough and professional.',
        authorName: 'Lisa Wong',
        date: '2024-03-01'
      }
    ],
    averageRating: 4.7,
    imageUrl: 'https://images.unsplash.com/photo-1518406432532-9cbef5697723?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    availability: {
      nextAvailable: 'Monday',
      slots: ['8:00 AM', '1:00 PM', '4:00 PM']
    }
  },
  {
    id: '4',
    title: 'Electrical Systems Repair',
    description: 'Diagnosis and repair of marine electrical systems, including navigation equipment and lighting.',
    price: 479,
    reviews: [
      {
        id: '401',
        rating: 4,
        comment: 'Fixed our navigation system issues quickly.',
        authorName: 'James Wilson',
        date: '2024-02-28'
      }
    ],
    averageRating: 4,
    imageUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    availability: {
      nextAvailable: 'Wednesday',
      slots: ['10:30 AM', '2:30 PM']
    }
  },
  {
    id: '5',
    title: 'Antifouling Treatment',
    description: 'Application of premium antifouling paint to protect your vessel from marine growth.',
    price: 699,
    reviews: [
      {
        id: '501',
        rating: 5,
        comment: 'Excellent work, very neat application.',
        authorName: 'Emma Thompson',
        date: '2024-02-20'
      },
      {
        id: '502',
        rating: 5,
        comment: 'Professional service and great results.',
        authorName: 'David Lee',
        date: '2024-02-15'
      },
      {
        id: '503',
        rating: 4.5,
        comment: 'Very satisfied with the quality.',
        authorName: 'Sophia Garcia',
        date: '2024-02-10'
      }
    ],
    averageRating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    availability: {
      nextAvailable: 'Next Week',
      slots: ['9:00 AM', '1:00 PM']
    }
  },
  {
    id: '6',
    title: 'Safety Equipment Inspection',
    description: 'Comprehensive inspection and certification of all marine safety equipment to ensure compliance with regulations.',
    price: 249,
    reviews: [
      {
        id: '601',
        rating: 5,
        comment: 'Very thorough inspection, highly recommended.',
        authorName: 'Thomas Brown',
        date: '2024-02-05'
      },
      {
        id: '602',
        rating: 4,
        comment: 'Professional service, good attention to detail.',
        authorName: 'Olivia Martinez',
        date: '2024-01-28'
      }
    ],
    averageRating: 4.5,
    imageUrl: 'https://images.unsplash.com/photo-1603539444875-76e7684265f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    availability: {
      nextAvailable: 'Tomorrow',
      slots: ['8:30 AM', '11:00 AM', '2:30 PM', '4:00 PM']
    }
  }
];

function App() {
  const [services] = useState<MarineService[]>(sampleServices);
  
  const handleBookNow = (serviceId: string) => {
    console.log(`Booking service with ID: ${serviceId}`);
    // In a real app, this would navigate to a booking page or open a modal
    alert(`Booking service with ID: ${serviceId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ServicesSection services={services} onBookNow={handleBookNow} />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App