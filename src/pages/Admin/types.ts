export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  price: number;
  tickets: number;
  sold: number;
  category: string;
  image: string;
  status: 'upcoming' | 'live' | 'ended' | 'draft';
  revenue: string;
  nfts: number;
}

export interface Ticket {
  id: string;
  eventTitle: string;
  date: string;
  location: string;
  price: number;
  status: 'confirmed' | 'pending' | 'cancelled';
  image: string;
  seat?: string;
  type: 'Standard' | 'VIP' | 'NFT';
}

export interface User {
  id: string;
  name: string;
  email: string;
  initials: string;
  color: string;
  joined: string;
  tickets: number;
  spent: number;
  status: 'active' | 'inactive';
}

export interface Transaction {
  id: string;
  user: string;
  userInitials: string;
  userColor: string;
  event: string;
  amount: number;
  date: string;
  status: 'completed' | 'pending' | 'refunded';
  tickets: number;
  note: string;
}

export interface ActivityItem {
  id: string;
  user: string;
  initials: string;
  color: string;
  action: string;
  event: string;
  time: string;
  tag: string;
  tagColor: string;
}
