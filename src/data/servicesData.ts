import { MarineService } from '../types';

// Sample data with approximate Singapore coordinates
export const servicesData: MarineService[] = [
  {
    id: '1',
    name: 'Engine Maintenance',
    description: 'Complete engine check-up and maintenance service',
    price: 299.99,
    duration: '2-3 hours',
    image: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
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
    },
    latitude: 1.2494, 
    longitude: 103.8376
  },
  {
    id: '2',
    name: 'Hull Cleaning',
    description: 'Professional hull cleaning and polishing',
    price: 199.99,
    duration: '3-4 hours',
    image: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
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
    },
    latitude: 1.2786, 
    longitude: 103.7586
  },
  {
    id: '3',
    name: 'Electrical System Check',
    description: 'Comprehensive electrical system inspection',
    price: 249.99,
    duration: '2-3 hours',
    image: 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
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
    },
    latitude: 1.2667, 
    longitude: 103.8214
  },
  {
    id: '4',
    name: 'Sail Repair',
    description: 'Professional sail repair and maintenance',
    price: 399.99,
    duration: '4-6 hours',
    image: 'https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
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
    },
    latitude: 1.3880, 
    longitude: 103.9888
  },
  {
    id: '5',
    name: 'Boat Detailing',
    description: 'Complete boat interior and exterior detailing',
    price: 499.99,
    duration: '5-7 hours',
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
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
    },
    latitude: 1.3431, 
    longitude: 103.6860
  },
  {
    id: '6',
    name: 'Navigation System Installation',
    description: 'Professional installation of marine navigation systems',
    price: 799.99,
    duration: '6-8 hours',
    image: 'https://images.unsplash.com/photo-1552353617-3bfd679b3bdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
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
    },
    latitude: 1.3061, 
    longitude: 103.9303
  },
  {
    id: '7',
    name: 'Jet Ski Rental',
    description: 'High-speed fun on the water near East Coast Park.',
    price: 180,
    duration: '2-3 hours',
    image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Rental',
    averageRating: 4.4,
    reviews: [],
    availability: {
      nextAvailable: 'Today',
      slots: ['10:00 AM', '3:00 PM']
    },
    provider: {
      id: 'p7',
      name: 'Aqua Adventures',
      rating: 4.4,
      totalServices: 50,
      joinedDate: '2022-06-01',
      verified: true
    },
    latitude: 1.3061, 
    longitude: 103.9303
  }
  ,
  {
    id: '8',
    name: 'Life Jacket Rental',
    description: 'Rent high-quality life jackets for your marine adventures.',
    price: 20,
    duration: 'Per day',
    image: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    category: 'Rental',
    averageRating: 4.5,
    reviews: [],
    availability: {
      nextAvailable: 'Today',
      slots: ['9:00 AM', '1:00 PM']
    },
    provider: {
      id: 'p8',
      name: 'Safety First Rentals',
      rating: 4.6,
      totalServices: 40,
      joinedDate: '2023-04-01',
      verified: true
    },
    latitude: 1.3000,
    longitude: 103.8000
  }
];
