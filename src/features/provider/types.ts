export interface ProviderService {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  category: string;
  status: 'active' | 'inactive' | 'pending';
  orders: number;
  rating: number;
  image: string;
}

export interface ProviderStats {
  label: string;
  value: string | number;
  change: string;
  isPositive: boolean;
}

export interface RecentOrder {
  id: string;
  customer: string;
  service: string;
  date: string;
  status: 'Completed' | 'In Progress' | 'Cancelled';
}

export interface EarningsData {
  totalEarnings: number;
  pendingPayments: number;
  inEscrow: number;
  availableForWithdrawal: number;
  monthlyEarnings: Array<{
    month: string;
    amount: number;
  }>;
  transactions: Transaction[];
}

export interface Transaction {
  id: string;
  date: string;
  customer: string;
  service: string;
  amount: number;
  status: 'completed' | 'pending' | 'in-escrow';
  orderId: string;
}

export interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: string;
  read: boolean;
  isProvider: boolean;
}

export interface Conversation {
  id: string;
  customer: {
    id: string;
    name: string;
    avatar?: string;
  };
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  messages: Message[];
  serviceId?: string;
  serviceName?: string;
}

export interface ProviderProfileData {
  name: string;
  email: string;
  phone: string;
  bio: string;
  businessName: string;
  website: string;
  location: string;
  specialties: string[];
  certifications: string[];
  yearsInBusiness: number;
}
