import { MarineService } from '../types';

export const servicesData: MarineService[] = [
  {
    id: '1',
    name: 'Engine Maintenance',
    description: 'Complete engine check-up and maintenance service',
    price: 299.99,
    duration: '2-3 hours',
    image: 'https://images.unsplash.com/photo-1575384043001-f37f146b614e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
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
    }
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
    }
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
    }
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
    }
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
    }
  }
];
