export interface Review {
  id: string;
  rating: number;
  comment: string;
  authorName: string;
  date: string;
}

export interface MarineService {
  id: string;
  title: string;
  description: string;
  price: number;
  reviews: Review[];
  averageRating: number;
  imageUrl: string;
  availability: {
    nextAvailable: string;
    slots: string[];
  };
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