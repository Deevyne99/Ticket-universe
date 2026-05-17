import { Event, Ticket, User, Transaction, ActivityItem } from './types';

export const mockEvents: Event[] = [
  { id: '1', title: 'Afrobeats Night Live', date: '15 Mar 2025', location: 'Lagos, Nigeria', price: 45, tickets: 1500, sold: 1240, category: 'Music', image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=300&fit=crop', status: 'live', revenue: '₦1.86M', nfts: 480 },
  { id: '2', title: 'Tech Summit Lagos', date: '22 Mar 2025', location: 'Lagos, Nigeria', price: 120, tickets: 1000, sold: 890, category: 'Tech', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop', status: 'live', revenue: '₦1.24M', nfts: 200 },
  { id: '3', title: 'Comedy Night Abuja', date: '5 Apr 2025', location: 'Abuja, Nigeria', price: 30, tickets: 600, sold: 340, category: 'Comedy', image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=300&fit=crop', status: 'upcoming', revenue: '₦408K', nfts: 100 },
  { id: '4', title: 'New Year Bash 2026', date: '31 Dec 2025', location: 'Lagos, Nigeria', price: 25, tickets: 2000, sold: 120, category: 'Music', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop', status: 'draft', revenue: '₦240K', nfts: 0 },
  { id: '5', title: 'Food & Culture Fest', date: '13 Apr 2025', location: 'Port Harcourt', price: 25, tickets: 300, sold: 300, category: 'Food', image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=300&fit=crop', status: 'ended', revenue: '₦180K', nfts: 60 },
  { id: '6', title: 'Sports Gala 2025', date: '8 May 2025', location: 'Accra, Ghana', price: 60, tickets: 400, sold: 210, category: 'Sports', image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop', status: 'upcoming', revenue: '₦756K', nfts: 80 },
];

export const mockTickets: Ticket[] = [
  { id: 'TKT-001', eventTitle: 'Afrobeats Night Live', date: 'Sat, 15 Mar 2025', location: 'Lagos, Nigeria', price: 45, status: 'confirmed', image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=300&fit=crop', seat: 'A12', type: 'VIP' },
  { id: 'TKT-002', eventTitle: 'Tech Summit Lagos', date: 'Sat, 22 Mar 2025', location: 'Lagos, Nigeria', price: 120, status: 'confirmed', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop', seat: 'B07', type: 'NFT' },
  { id: 'TKT-003', eventTitle: 'Comedy Night Abuja', date: 'Sat, 5 Apr 2025', location: 'Abuja, Nigeria', price: 25, status: 'pending', image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=300&fit=crop', type: 'Standard' },
  { id: 'TKT-004', eventTitle: 'Food & Culture Fest', date: 'Sun, 13 Apr 2025', location: 'Port Harcourt', price: 15, status: 'cancelled', image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=300&fit=crop', seat: 'C03', type: 'Standard' },
];

export const mockUsers: User[] = [
  { id: 'USR-001', name: 'Amara Obi', email: 'amara@email.com', initials: 'AO', color: '#6366f1', joined: '12 Jan 2025', tickets: 8, spent: 420, status: 'active' },
  { id: 'USR-002', name: 'Chidi Bello', email: 'chidi@email.com', initials: 'CB', color: '#f59e0b', joined: '3 Feb 2025', tickets: 3, spent: 135, status: 'active' },
  { id: 'USR-003', name: 'Funmi Okafor', email: 'funmi@email.com', initials: 'FO', color: '#ec4899', joined: '19 Feb 2025', tickets: 12, spent: 780, status: 'active' },
  { id: 'USR-004', name: 'Kemi Johnson', email: 'kemi@email.com', initials: 'KJ', color: '#ef4444', joined: '1 Mar 2025', tickets: 1, spent: 45, status: 'inactive' },
  { id: 'USR-005', name: 'Ngozi Adeyemi', email: 'ngozi@email.com', initials: 'NA', color: '#10b981', joined: '8 Mar 2025', tickets: 5, spent: 275, status: 'active' },
  { id: 'USR-006', name: 'Emeka Smart', email: 'emeka@email.com', initials: 'EM', color: '#8b5cf6', joined: '10 Mar 2025', tickets: 2, spent: 90, status: 'inactive' },
];

export const mockTransactions: Transaction[] = [
  { id: 'TXN-8821', user: 'Amara Obi', userInitials: 'AO', userColor: '#6366f1', event: 'Afrobeats Night Live', amount: 90, date: '14 Mar 2025', status: 'completed', tickets: 2, note: 'NFT minted' },
  { id: 'TXN-8820', user: 'Chidi Bello', userInitials: 'CB', userColor: '#f59e0b', event: 'Tech Summit Lagos', amount: 120, date: '13 Mar 2025', status: 'completed', tickets: 1, note: 'QR verified' },
  { id: 'TXN-8819', user: 'Funmi Okafor', userInitials: 'FO', userColor: '#ec4899', event: 'Comedy Night Abuja', amount: 75, date: '13 Mar 2025', status: 'pending', tickets: 3, note: 'Pending review' },
  { id: 'TXN-8818', user: 'Kemi Johnson', userInitials: 'KJ', userColor: '#ef4444', event: 'Afrobeats Night Live', amount: 30, date: '12 Mar 2025', status: 'completed', tickets: 1, note: '' },
  { id: 'TXN-8817', user: 'Ngozi Adeyemi', userInitials: 'NA', userColor: '#10b981', event: 'Sports Gala 2025', amount: 120, date: '11 Mar 2025', status: 'refunded', tickets: 2, note: 'Refund requested' },
  { id: 'TXN-8816', user: 'Emeka Smart', userInitials: 'EM', userColor: '#8b5cf6', event: 'Food & Culture Fest', amount: 15, date: '10 Mar 2025', status: 'completed', tickets: 1, note: '' },
];

export const mockActivity: ActivityItem[] = [
  { id: '1', user: 'Amara N.', initials: 'AN', color: '#6366f1', action: 'purchased 2× VIP tickets for', event: 'Afrobeats Lagos', time: '2 minutes ago', tag: 'NFT minted', tagColor: '#4ade80' },
  { id: '2', user: 'Chidi B.', initials: 'CB', color: '#f59e0b', action: 'checked in at', event: 'Tech Summit 2025', time: '5 minutes ago', tag: 'QR verified', tagColor: '#60a5fa' },
  { id: '3', user: 'Funmi O.', initials: 'FO', color: '#ec4899', action: 'resold NFT ticket on secondary market', event: '', time: '12 minutes ago', tag: '+₦5,200 royalty', tagColor: '#4ade80' },
  { id: '4', user: 'Kemi J.', initials: 'KJ', color: '#ef4444', action: 'requested refund for', event: 'Comedy Night', time: '28 minutes ago', tag: 'Pending review', tagColor: '#f59e0b' },
  { id: '5', user: 'Emeka M.', initials: 'EM', color: '#8b5cf6', action: 'purchased 1× General ticket', event: '', time: '44 minutes ago', tag: '', tagColor: '' },
  { id: '6', user: 'Smart N.', initials: 'NS', color: '#10b981', action: 'Smart contract deployed for', event: 'New Year Bash', time: '1 hour ago', tag: '0x4f3a...e92b', tagColor: '#a78bfa' },
];

export const salesData = [
  { day: 'Mon', standard: 45, vip: 20, nft: 10 },
  { day: 'Tue', standard: 60, vip: 35, nft: 18 },
  { day: 'Wed', standard: 30, vip: 15, nft: 8 },
  { day: 'Thu', standard: 80, vip: 45, nft: 25 },
  { day: 'Fri', standard: 95, vip: 55, nft: 30 },
  { day: 'Sat', standard: 120, vip: 70, nft: 42 },
  { day: 'Sun', standard: 75, vip: 40, nft: 22 },
];
