import { ProviderService, ProviderStats, RecentOrder, EarningsData, Conversation } from '../types';

export const mockServices: ProviderService[] = [
  {
    id: '1',
    name: 'Engine Maintenance',
    description: 'Complete engine check-up and maintenance service',
    price: 299.99,
    duration: '2-3 hours',
    category: 'maintenance',
    status: 'active',
    orders: 12,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '2',
    name: 'Hull Cleaning',
    description: 'Professional hull cleaning and polishing',
    price: 199.99,
    duration: '3-4 hours',
    category: 'cleaning',
    status: 'active',
    orders: 8,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  }
];

export const mockStats: ProviderStats[] = [
  { label: 'Active Services', value: 5, change: '+2', isPositive: true },
  { label: 'Completed Jobs', value: 28, change: '+3', isPositive: true },
  { label: 'Total Earnings', value: '$4,280', change: '+$650', isPositive: true },
  { label: 'Response Rate', value: '95%', change: '-2%', isPositive: false },
];

export const mockRecentOrders: RecentOrder[] = [
  {
    id: 'ORD-2023-1234',
    customer: 'James Wilson',
    service: 'Engine Maintenance',
    date: '2025-04-01',
    status: 'In Progress',
  },
  {
    id: 'ORD-2023-1235',
    customer: 'Sarah Brown',
    service: 'Hull Cleaning',
    date: '2025-03-30',
    status: 'Completed',
  }
];

export const mockEarningsData: EarningsData = {
  totalEarnings: 4280.50,
  pendingPayments: 799.99,
  inEscrow: 549.98,
  availableForWithdrawal: 2930.53,
  monthlyEarnings: [
    { month: 'Jan', amount: 450 },
    { month: 'Feb', amount: 680 },
    { month: 'Mar', amount: 1240 },
    { month: 'Apr', amount: 1910.50 },
  ],
  transactions: [
    {
      id: 'txn-1234',
      date: '2025-04-01',
      customer: 'James Wilson',
      service: 'Engine Maintenance',
      amount: 299.99,
      status: 'in-escrow',
      orderId: 'ORD-2023-1234'
    },
    {
      id: 'txn-1235',
      date: '2025-03-30',
      customer: 'Sarah Brown',
      service: 'Hull Cleaning',
      amount: 199.99,
      status: 'completed',
      orderId: 'ORD-2023-1235'
    }
  ]
};

export const mockConversations: Conversation[] = [
  {
    id: 'conv1',
    customer: {
      id: 'cust1',
      name: 'James Wilson',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    lastMessage: 'Hi, I was wondering if you could provide more details about the engine maintenance service.',
    lastMessageTime: '2 hours ago',
    unreadCount: 1,
    messages: [
      {
        id: 'msg1',
        sender: 'James Wilson',
        content: 'Hi, I was wondering if you could provide more details about the engine maintenance service.',
        timestamp: '2025-04-03T15:30:00Z',
        read: false,
        isProvider: false
      }
    ],
    serviceId: '1',
    serviceName: 'Engine Maintenance'
  }
];
