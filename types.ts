export interface StatCard {
  label: string;
  value: string;
  change: string;
  positive: boolean;
  icon: string;
}

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
  status: 'upcoming' | 'live' | 'ended';
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
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  joined: string;
  tickets: number;
  spent: number;
  status: 'active' | 'inactive';
}

export interface Transaction {
  id: string;
  user: string;
  event: string;
  amount: number;
  date: string;
  status: 'completed' | 'pending' | 'refunded';
  tickets: number;
}
