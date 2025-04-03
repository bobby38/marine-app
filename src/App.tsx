import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import AuthPage from './pages/AuthPage';
import ProfilePage from './pages/ProfilePage';
import { MarineService } from './types';

const App: React.FC = () => {
  const [services] = useState<MarineService[]>([
    {
      id: '1',
      name: 'Engine Maintenance',
      description: 'Complete engine check-up and maintenance service',
      price: 299.99,
      duration: '2-3 hours',
      image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'maintenance',
      averageRating: 4.8,
      reviews: [],
      availability: {
        nextAvailable: 'Tomorrow',
        slots: ['9:00 AM', '2:00 PM']
      },
      provider: {
        id: 'p1',
        name: 'Marine Masters LLC',
        rating: 4.9,
        totalServices: 128,
        joinedDate: '2023-01-15',
        verified: true
      }
    },
    {
      id: '2',
      name: 'Hull Cleaning',
      description: 'Professional hull cleaning and polishing',
      price: 199.99,
      duration: '3-4 hours',
      image: 'https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'cleaning',
      averageRating: 4.7,
      reviews: [],
      availability: {
        nextAvailable: 'Today',
        slots: ['11:00 AM', '3:00 PM']
      },
      provider: {
        id: 'p2',
        name: 'Aqua Clean Services',
        rating: 4.8,
        totalServices: 95,
        joinedDate: '2022-11-20',
        verified: true
      }
    },
    {
      id: '3',
      name: 'Electrical System Check',
      description: 'Comprehensive electrical system inspection',
      price: 249.99,
      duration: '2-3 hours',
      image: 'https://images.pexels.com/photos/4218539/pexels-photo-4218539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'maintenance',
      averageRating: 4.9,
      reviews: [],
      availability: {
        nextAvailable: 'Tomorrow',
        slots: ['10:00 AM', '1:00 PM']
      },
      provider: {
        id: 'p3',
        name: 'Marine Electric Pros',
        rating: 4.7,
        totalServices: 72,
        joinedDate: '2023-03-10',
        verified: true
      }
    },
    {
      id: '4',
      name: 'Sail Repair',
      description: 'Professional sail repair and maintenance',
      price: 399.99,
      duration: '4-6 hours',
      image: 'https://images.pexels.com/photos/273886/pexels-photo-273886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'repair',
      averageRating: 4.6,
      reviews: [],
      availability: {
        nextAvailable: 'Tomorrow',
        slots: ['9:00 AM', '2:00 PM']
      },
      provider: {
        id: 'p4',
        name: 'Sail Masters',
        rating: 4.5,
        totalServices: 58,
        joinedDate: '2022-09-15',
        verified: true
      }
    },
    {
      id: '5',
      name: 'Boat Detailing',
      description: 'Complete boat interior and exterior detailing',
      price: 499.99,
      duration: '5-7 hours',
      image: 'https://images.pexels.com/photos/1295036/pexels-photo-1295036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'cleaning',
      averageRating: 4.9,
      reviews: [],
      availability: {
        nextAvailable: 'Today',
        slots: ['10:00 AM', '3:00 PM']
      },
      provider: {
        id: 'p5',
        name: 'Marine Detailing Pros',
        rating: 4.8,
        totalServices: 102,
        joinedDate: '2023-02-01',
        verified: true
      }
    },
    {
      id: '6',
      name: 'Navigation System Installation',
      description: 'Professional installation of marine navigation systems',
      price: 799.99,
      duration: '6-8 hours',
      image: 'https://images.pexels.com/photos/1430676/pexels-photo-1430676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'installation',
      averageRating: 4.7,
      reviews: [],
      availability: {
        nextAvailable: 'Tomorrow',
        slots: ['9:00 AM', '1:00 PM']
      },
      provider: {
        id: 'p6',
        name: 'Marine Tech Solutions',
        rating: 4.6,
        totalServices: 84,
        joinedDate: '2023-01-05',
        verified: true
      }
    }
  ]);

  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage services={services} />} />
              <Route path="/services/:id" element={<ServiceDetailPage services={services} />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </Layout>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;