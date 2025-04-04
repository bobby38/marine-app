export interface Review {
  id: string;
  rating: number;
  comment: string;
  authorName: string;
  date: string;
  avatar?: string; // Optional avatar URL
  user?: string; // Alternative to authorName for compatibility
}

export interface Provider {
  id: string;
  name: string;
  rating: number;
  totalServices: number;
  joinedDate: string;
  verified: boolean;
}

export interface MarineService {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  image: string;
  category: string;
  reviews?: Review[];
  averageRating?: number;
  availability?: {
    nextAvailable: string;
    slots: string[];
  };
  provider?: Provider;
  latitude?: number;  // Added latitude (optional)
  longitude?: number; // Added longitude (optional)
}

export interface VesselDetails {
  type: 'yacht' | 'speedboat' | 'sailboat' | 'commercial';
  length: number;
  draft: number;
  specialRequirements?: string;
}

export interface BookingDetails {
  serviceId: string;
  date: string;
  timeSlot: string;
  vesselDetails: VesselDetails;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
  };
}

export interface BookNowButtonProps {
  onClick: () => void;
  isAvailable?: boolean;
  className?: string;
}