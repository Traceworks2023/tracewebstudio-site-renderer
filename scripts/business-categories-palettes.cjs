const BUSINESS_CATEGORY_PALETTES = {
  // ============================================
  // 1. RETAIL & ECOMMERCE
  // ============================================
  fashion: [
    { name: 'Fashion Pink', primary: '#DB2777', secondary: '#9D174D', accent: '#F9A8D4', background: '#FDF2F8', surface: '#FFFFFF', text: '#500724', textMuted: '#9D174D' },
    { name: 'Editorial Rose', primary: '#BE185D', secondary: '#9F1239', accent: '#FBCFE8', background: '#FDF2F8', surface: '#FFFFFF', text: '#500724', textMuted: '#BE185D' },
    { name: 'Luxe Black', primary: '#171717', secondary: '#525252', accent: '#A3A3A3', background: '#FAFAFA', surface: '#FFFFFF', text: '#0A0A0A', textMuted: '#525252' },
    { name: 'Couture Gold', primary: '#D4AF37', secondary: '#B8860B', accent: '#F5D76E', background: '#0B0B0B', surface: '#171717', text: '#FAFAF9', textMuted: '#E8C44A' },
  ],
  footwear: [
    { name: 'Sport Red', primary: '#DC2626', secondary: '#991B1B', accent: '#FCA5A5', background: '#FEF2F2', surface: '#FFFFFF', text: '#450A0A', textMuted: '#DC2626' },
    { name: 'Street Dark', primary: '#0F172A', secondary: '#1E293B', accent: '#64748B', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
    { name: 'Urban Orange', primary: '#F97316', secondary: '#EA580C', accent: '#FDBA74', background: '#FFF7ED', surface: '#FFFFFF', text: '#431407', textMuted: '#F97316' },
  ],
  jewelry: [
    { name: 'Gold Luxe', primary: '#D4AF37', secondary: '#B8860B', accent: '#F5D76E', background: '#0B0B0B', surface: '#171717', text: '#FAFAF9', textMuted: '#E8C44A' },
    { name: 'Diamond White', primary: '#F9FAFB', secondary: '#E5E7EB', accent: '#F3F4F6', background: '#FFFFFF', surface: '#FFFFFF', text: '#111827', textMuted: '#6B7280' },
    { name: 'Rose Gold', primary: '#B76E79', secondary: '#E8B4B8', accent: '#F0D4D8', background: '#FDF8F8', surface: '#FFFFFF', text: '#7A4A50', textMuted: '#C49AA0' },
  ],
  watches: [
    { name: 'Chrono Black', primary: '#171717', secondary: '#262626', accent: '#737373', background: '#FAFAFA', surface: '#FFFFFF', text: '#0A0A0A', textMuted: '#525252' },
    { name: 'Silver Chrono', primary: '#4B5563', secondary: '#6B7280', accent: '#9CA3AF', background: '#F9FAFB', surface: '#FFFFFF', text: '#1F2937', textMuted: '#4B5563' },
    { name: 'Blue Chrono', primary: '#1E40AF', secondary: '#3B82F6', accent: '#93C5FD', background: '#EFF6FF', surface: '#FFFFFF', text: '#1E3A8A', textMuted: '#2563EB' },
  ],
  cosmetics: [
    { name: 'Glam Pink', primary: '#EC4899', secondary: '#DB2777', accent: '#F9A8D4', background: '#FDF2F8', surface: '#FFFFFF', text: '#831843', textMuted: '#EC4899' },
    { name: 'Nude Beauty', primary: '#D977A7', secondary: '#BE5D89', accent: '#F5C2D8', background: '#FFF8FB', surface: '#FFFFFF', text: '#4A2233', textMuted: '#D977A7' },
    { name: 'Luxe Purple', primary: '#7C3AED', secondary: '#5B21B6', accent: '#C4B5FD', background: '#F5F3FF', surface: '#FFFFFF', text: '#2E1065', textMuted: '#7C3AED' },
  ],
  skincare: [
    { name: 'Clean Glow', primary: '#F472B6', secondary: '#EC4899', accent: '#FBCFE8', background: '#FDF2F8', surface: '#FFFFFF', text: '#831843', textMuted: '#F472B6' },
    { name: 'Natural Jade', primary: '#2D5A4A', secondary: '#7BA38C', accent: '#A8C4B4', background: '#F0F4F1', surface: '#FFFFFF', text: '#1E3A2F', textMuted: '#5A7A6A' },
    { name: 'Pure White', primary: '#374151', secondary: '#6B7280', accent: '#9CA3AF', background: '#FAFAFA', surface: '#FFFFFF', text: '#1F2937', textMuted: '#4B5563' },
  ],
  haircare: [
    { name: 'Glam Gold', primary: '#D4AF37', secondary: '#B8860B', accent: '#F5D76E', background: '#F8F5EF', surface: '#FFFFFF', text: '#422006', textMuted: '#D4AF37' },
    { name: 'Bold Red', primary: '#DC2626', secondary: '#991B1B', accent: '#FCA5A5', background: '#FEF2F2', surface: '#FFFFFF', text: '#450A0A', textMuted: '#DC2626' },
    { name: 'Dark Luxe', primary: '#171717', secondary: '#262626', accent: '#A3A3A3', background: '#FAFAFA', surface: '#FFFFFF', text: '#0A0A0A', textMuted: '#525252' },
  ],
  perfumes: [
    { name: 'Oud Luxury', primary: '#78350F', secondary: '#92400E', accent: '#D6B38A', background: '#FAF7F2', surface: '#FFFFFF', text: '#451A03', textMuted: '#78350F' },
    { name: 'Floral Elegance', primary: '#C084FC', secondary: '#A855F7', accent: '#E9D5FF', background: '#FAF5FF', surface: '#FFFFFF', text: '#581C87', textMuted: '#C084FC' },
    { name: 'Musk Gold', primary: '#D4AF37', secondary: '#B8860B', accent: '#F5D76E', background: '#0B0B0B', surface: '#171717', text: '#FAFAF9', textMuted: '#E8C44A' },
  ],
  electronics: [
    { name: 'Tech Blue', primary: '#2563EB', secondary: '#1E40AF', accent: '#60A5FA', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
    { name: 'Neon Dark', primary: '#22C55E', secondary: '#16A34A', accent: '#A3E635', background: '#0A0A0A', surface: '#171717', text: '#F5F5F5', textMuted: '#86EFAC' },
    { name: 'Cyber Dark', primary: '#38BDF8', secondary: '#0EA5E9', accent: '#818CF8', background: '#020617', surface: '#0F172A', text: '#E2E8F0', textMuted: '#38BDF8' },
  ],
  mobile: [
    { name: 'Vibrant Blue', primary: '#0EA5E9', secondary: '#0369A1', accent: '#7DD3FC', background: '#F0F9FF', surface: '#FFFFFF', text: '#082F49', textMuted: '#0EA5E9' },
    { name: 'Tech Dark', primary: '#0F172A', secondary: '#1E293B', accent: '#38BDF8', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#38BDF8' },
    { name: 'Fresh Green', primary: '#10B981', secondary: '#047857', accent: '#6EE7B7', background: '#ECFDF5', surface: '#FFFFFF', text: '#064E3B', textMuted: '#10B981' },
  ],
  computers: [
    { name: 'Pro Gray', primary: '#374151', secondary: '#1F2937', accent: '#9CA3AF', background: '#F9FAFB', surface: '#FFFFFF', text: '#111827', textMuted: '#6B7280' },
    { name: 'Innovation Blue', primary: '#1D4ED8', secondary: '#1E3A8A', accent: '#93C5FD', background: '#EFF6FF', surface: '#FFFFFF', text: '#172554', textMuted: '#1D4ED8' },
  ],
  appliances: [
    { name: 'Clean Steel', primary: '#6B7280', secondary: '#374151', accent: '#9CA3AF', background: '#F9FAFB', surface: '#FFFFFF', text: '#1F2937', textMuted: '#4B5563' },
    { name: 'Modern White', primary: '#111827', secondary: '#374151', accent: '#9CA3AF', background: '#F9FAFB', surface: '#FFFFFF', text: '#111827', textMuted: '#6B7280' },
    { name: 'Smart Blue', primary: '#2563EB', secondary: '#1E40AF', accent: '#60A5FA', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
  ],
  furniture: [
    { name: 'Warm Wood', primary: '#92400E', secondary: '#78350F', accent: '#D6B38A', background: '#FAF7F2', surface: '#FFFFFF', text: '#3B2F2F', textMuted: '#92400E' },
    { name: 'Modern Gray', primary: '#52525B', secondary: '#71717A', accent: '#D4D4D8', background: '#FAFAFA', surface: '#FFFFFF', text: '#18181B', textMuted: '#71717A' },
    { name: 'Scandi Light', primary: '#FAFAFA', secondary: '#E5E7EB', accent: '#F3F4F6', background: '#FFFFFF', surface: '#FFFFFF', text: '#111827', textMuted: '#6B7280' },
  ],
  homedecor: [
    { name: 'Cozy Earth', primary: '#78350F', secondary: '#92400E', accent: '#D6B38A', background: '#FAF7F2', surface: '#FFFFFF', text: '#451A03', textMuted: '#78350F' },
    { name: 'Modern Rustic', primary: '#78716C', secondary: '#57534E', accent: '#D6D3D1', background: '#FAF7F5', surface: '#FFFFFF', text: '#292524', textMuted: '#78716C' },
    { name: 'Minimal Light', primary: '#111827', secondary: '#374151', accent: '#9CA3AF', background: '#F9FAFB', surface: '#FFFFFF', text: '#111827', textMuted: '#6B7280' },
  ],
  kitchen: [
    { name: 'Warm Copper', primary: '#B45309', secondary: '#92400E', accent: '#FCD9B6', background: '#FFF8F1', surface: '#FFFFFF', text: '#431407', textMuted: '#B45309' },
    { name: 'Clean White', primary: '#374151', secondary: '#6B7280', accent: '#9CA3AF', background: '#FAFAFA', surface: '#FFFFFF', text: '#1F2937', textMuted: '#4B5563' },
    { name: 'Modern Slate', primary: '#334155', secondary: '#1E293B', accent: '#94A3B8', background: '#F1F5F9', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
  ],
  toys: [
    { name: 'Playful Yellow', primary: '#EAB308', secondary: '#CA8A04', accent: '#FEF08A', background: '#FEFCE8', surface: '#FFFFFF', text: '#422006', textMuted: '#EAB308' },
    { name: 'Fun Red', primary: '#DC2626', secondary: '#991B1B', accent: '#FCA5A5', background: '#FEF2F2', surface: '#FFFFFF', text: '#450A0A', textMuted: '#DC2626' },
    { name: 'Bright Blue', primary: '#2563EB', secondary: '#1E40AF', accent: '#60A5FA', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
  ],
  baby: [
    { name: 'Soft Pink', primary: '#F472B6', secondary: '#EC4899', accent: '#FBCFE8', background: '#FDF2F8', surface: '#FFFFFF', text: '#831843', textMuted: '#F472B6' },
    { name: 'Baby Blue', primary: '#60A5FA', secondary: '#3B82F6', accent: '#BFDBFE', background: '#EFF6FF', surface: '#FFFFFF', text: '#1E3A8A', textMuted: '#60A5FA' },
    { name: 'Mint Baby', primary: '#6EE7B7', secondary: '#10B981', accent: '#A7F3D0', background: '#ECFDF5', surface: '#FFFFFF', text: '#064E3B', textMuted: '#10B981' },
  ],
  sports: [
    { name: 'Athletic Red', primary: '#DC2626', secondary: '#991B1B', accent: '#FCA5A5', background: '#FEF2F2', surface: '#FFFFFF', text: '#450A0A', textMuted: '#DC2626' },
    { name: 'Team Blue', primary: '#1E40AF', secondary: '#3B82F6', accent: '#93C5FD', background: '#EFF6FF', surface: '#FFFFFF', text: '#1E3A8A', textMuted: '#2563EB' },
    { name: 'Field Green', primary: '#22C55E', secondary: '#16A34A', accent: '#86EFAC', background: '#F0FDF4', surface: '#FFFFFF', text: '#14532D', textMuted: '#16A34A' },
  ],
  books: [
    { name: 'Classic Brown', primary: '#78350F', secondary: '#5C4033', accent: '#D6B38A', background: '#FAF7F2', surface: '#FFFFFF', text: '#451A03', textMuted: '#78350F' },
    { name: 'Library Navy', primary: '#1E3A8A', secondary: '#1E40AF', accent: '#93C5FD', background: '#EFF6FF', surface: '#FFFFFF', text: '#172554', textMuted: '#2563EB' },
    { name: 'Paper Cream', primary: '#FAFAFA', secondary: '#E5E7EB', accent: '#F3F4F6', background: '#FFFDF7', surface: '#FFFFFF', text: '#111827', textMuted: '#6B7280' },
  ],
  gifts: [
    { name: 'Gift Gold', primary: '#D4AF37', secondary: '#B8860B', accent: '#F5D76E', background: '#0B0B0B', surface: '#171717', text: '#FAFAF9', textMuted: '#E8C44A' },
    { name: 'Celebration Purple', primary: '#7C3AED', secondary: '#5B21B6', accent: '#C4B5FD', background: '#F5F3FF', surface: '#FFFFFF', text: '#2E1065', textMuted: '#7C3AED' },
    { name: 'Joy Red', primary: '#DC2626', secondary: '#991B1B', accent: '#FCA5A5', background: '#FEF2F2', surface: '#FFFFFF', text: '#450A0A', textMuted: '#DC2626' },
  ],
  pets: [
    { name: 'Paw Orange', primary: '#F97316', secondary: '#EA580C', accent: '#FDBA74', background: '#FFF7ED', surface: '#FFFFFF', text: '#431407', textMuted: '#F97316' },
    { name: 'Nature Green', primary: '#22C55E', secondary: '#16A34A', accent: '#86EFAC', background: '#F0FDF4', surface: '#FFFFFF', text: '#14532D', textMuted: '#16A34A' },
    { name: 'Warm Brown', primary: '#92400E', secondary: '#78350F', accent: '#D6B38A', background: '#FAF7F2', surface: '#FFFFFF', text: '#3B2F2F', textMuted: '#92400E' },
  ],
  grocery: [
    { name: 'Fresh Green', primary: '#22C55E', secondary: '#16A34A', accent: '#86EFAC', background: '#F0FDF4', surface: '#FFFFFF', text: '#14532D', textMuted: '#16A34A' },
    { name: 'Organic Earth', primary: '#78350F', secondary: '#92400E', accent: '#D6B38A', background: '#FAF7F2', surface: '#FFFFFF', text: '#451A03', textMuted: '#78350F' },
    { name: 'Clean White', primary: '#374151', secondary: '#6B7280', accent: '#9CA3AF', background: '#FAFAFA', surface: '#FFFFFF', text: '#1F2937', textMuted: '#4B5563' },
  ],
  organic: [
    { name: 'Organic Green', primary: '#166534', secondary: '#14532D', accent: '#86EFAC', background: '#F0FDF4', surface: '#FFFFFF', text: '#052E16', textMuted: '#16A34A' },
    { name: 'Earth Brown', primary: '#78350F', secondary: '#92400E', accent: '#D6B38A', background: '#FAF7F2', surface: '#FFFFFF', text: '#451A03', textMuted: '#78350F' },
    { name: 'Natural Beige', primary: '#C19A6B', secondary: '#A67B5B', accent: '#E6CBA8', background: '#FAF3EB', surface: '#FFFFFF', text: '#4B382A', textMuted: '#C19A6B' },
  ],
  pharmacy: [
    { name: 'Medical Blue', primary: '#0077B6', secondary: '#00B4D8', accent: '#66DDFF', background: '#F0F8FF', surface: '#FFFFFF', text: '#004466', textMuted: '#0099CC' },
    { name: 'Clean Teal', primary: '#1B7B82', secondary: '#48CAE4', accent: '#70D8E8', background: '#F0FAFC', surface: '#FFFFFF', text: '#0D4A4F', textMuted: '#1B9AA6' },
    { name: 'Clinical White', primary: '#374151', secondary: '#6B7280', accent: '#9CA3AF', background: '#F9FAFB', surface: '#FFFFFF', text: '#1F2937', textMuted: '#4B5563' },
  ],
  autoparts: [
    { name: 'Auto Dark', primary: '#171717', secondary: '#262626', accent: '#737373', background: '#FAFAFA', surface: '#FFFFFF', text: '#0A0A0A', textMuted: '#525252' },
    { name: 'Steel Gray', primary: '#4A4A4A', secondary: '#8B8B8B', accent: '#C4C4C4', background: '#F5F5F5', surface: '#FFFFFF', text: '#2D2D2D', textMuted: '#6B6B6B' },
    { name: 'Safety Orange', primary: '#E85D04', secondary: '#FF8C42', accent: '#FFAA66', background: '#FFF8F0', surface: '#FFFFFF', text: '#7A3000', textMuted: '#E85D04' },
  ],

  // ============================================
  // 2. FOOD & BEVERAGE
  // ============================================
  restaurant: [
    { name: 'Earthy Brown', primary: '#92400E', secondary: '#78350F', accent: '#D6B38A', background: '#FAF7F2', surface: '#FFFFFF', text: '#3B2F2F', textMuted: '#92400E' },
    { name: 'Coffee Cream', primary: '#6F4E37', secondary: '#4B3621', accent: '#D9C2A7', background: '#F8F3EE', surface: '#FFFDF9', text: '#2A2118', textMuted: '#6F4E37' },
    { name: 'Terracotta Clay', primary: '#C75B39', secondary: '#9E3D2A', accent: '#E7A98F', background: '#FDF5F1', surface: '#FFFFFF', text: '#4A1F17', textMuted: '#C75B39' },
    { name: 'Desert Sand', primary: '#C19A6B', secondary: '#A67B5B', accent: '#E6CBA8', background: '#FAF3EB', surface: '#FFFFFF', text: '#4B382A', textMuted: '#C19A6B' },
  ],
  cafe: [
    { name: 'Coffee Cream', primary: '#6F4E37', secondary: '#4B3621', accent: '#D9C2A7', background: '#F8F3EE', surface: '#FFFDF9', text: '#2A2118', textMuted: '#6F4E37' },
    { name: 'Warm Latte', primary: '#92400E', secondary: '#78350F', accent: '#D6B38A', background: '#FAF7F2', surface: '#FFFFFF', text: '#3B2F2F', textMuted: '#92400E' },
    { name: 'Modern Cafe', primary: '#334155', secondary: '#1E293B', accent: '#94A3B8', background: '#F1F5F9', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
  ],
  bakery: [
    { name: 'Sweet Cream', primary: '#D9C2A7', secondary: '#C19A6B', accent: '#EAD9B6', background: '#FAF3EB', surface: '#FFFFFF', text: '#4B382A', textMuted: '#C19A6B' },
    { name: 'Warm Bread', primary: '#92400E', secondary: '#78350F', accent: '#D6B38A', background: '#FAF7F2', surface: '#FFFFFF', text: '#3B2F2F', textMuted: '#92400E' },
    { name: 'Golden Crust', primary: '#B45309', secondary: '#92400E', accent: '#FCD9B6', background: '#FFF8F1', surface: '#FFFFFF', text: '#431407', textMuted: '#B45309' },
  ],
  sweetshop: [
    { name: 'Candy Pink', primary: '#EC4899', secondary: '#DB2777', accent: '#F9A8D4', background: '#FDF2F8', surface: '#FFFFFF', text: '#831843', textMuted: '#EC4899' },
    { name: 'Sugar White', primary: '#FAFAFA', secondary: '#E5E7EB', accent: '#F3F4F6', background: '#FFFFFF', surface: '#FFFFFF', text: '#111827', textMuted: '#6B7280' },
    { name: 'Confetti Gold', primary: '#D4AF37', secondary: '#B8860B', accent: '#F5D76E', background: '#0B0B0B', surface: '#171717', text: '#FAFAF9', textMuted: '#E8C44A' },
  ],
  icecream: [
    { name: 'Pastel Pink', primary: '#F472B6', secondary: '#EC4899', accent: '#FBCFE8', background: '#FDF2F8', surface: '#FFFFFF', text: '#831843', textMuted: '#F472B6' },
    { name: 'Mint Chip', primary: '#166534', secondary: '#14532D', accent: '#86EFAC', background: '#F0FDF4', surface: '#FFFFFF', text: '#052E16', textMuted: '#16A34A' },
    { name: 'Vanilla Cream', primary: '#F5F0E6', secondary: '#E5DDD0', accent: '#FDF8F5', background: '#FFFBF5', surface: '#FFFFFF', text: '#3D3528', textMuted: '#8B7355' },
  ],
  juicebar: [
    { name: 'Fresh Orange', primary: '#F97316', secondary: '#EA580C', accent: '#FDBA74', background: '#FFF7ED', surface: '#FFFFFF', text: '#431407', textMuted: '#F97316' },
    { name: 'Green Detox', primary: '#22C55E', secondary: '#16A34A', accent: '#86EFAC', background: '#F0FDF4', surface: '#FFFFFF', text: '#14532D', textMuted: '#16A34A' },
    { name: 'Berry Blast', primary: '#9333EA', secondary: '#7C3AED', accent: '#C4B5FD', background: '#F5F3FF', surface: '#FFFFFF', text: '#3B0764', textMuted: '#9333EA' },
  ],
  fastfood: [
    { name: 'Ketchup Red', primary: '#DC2626', secondary: '#991B1B', accent: '#FCA5A5', background: '#FEF2F2', surface: '#FFFFFF', text: '#450A0A', textMuted: '#DC2626' },
    { name: 'Mustard Yellow', primary: '#EAB308', secondary: '#CA8A04', accent: '#FEF08A', background: '#FEFCE8', surface: '#FFFFFF', text: '#422006', textMuted: '#EAB308' },
    { name: 'Fast Dark', primary: '#171717', secondary: '#262626', accent: '#737373', background: '#FAFAFA', surface: '#FFFFFF', text: '#0A0A0A', textMuted: '#525252' },
  ],
  finedining: [
    { name: 'Wine Estate', primary: '#4C1D1D', secondary: '#9B2D2D', accent: '#C46060', background: '#FDF5F5', surface: '#FFFFFF', text: '#2A0F0F', textMuted: '#9B2D2D' },
    { name: 'Champagne Gold', primary: '#C6A969', secondary: '#A88B4A', accent: '#EAD9B6', background: '#FCFAF5', surface: '#FFFFFF', text: '#3E3425', textMuted: '#C6A969' },
    { name: 'Elegant Navy', primary: '#0F172A', secondary: '#1E293B', accent: '#D4AF37', background: '#F8F5EF', surface: '#FFFFFF', text: '#111827', textMuted: '#6B7280' },
  ],
  cloudkitchen: [
    { name: 'Modern Orange', primary: '#F97316', secondary: '#EA580C', accent: '#FDBA74', background: '#FFF7ED', surface: '#FFFFFF', text: '#431407', textMuted: '#F97316' },
    { name: 'Delivery Blue', primary: '#2563EB', secondary: '#1E40AF', accent: '#60A5FA', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
    { name: 'Clean Dark', primary: '#0F172A', secondary: '#1E293B', accent: '#64748B', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
  ],
  catering: [
    { name: 'Elegant Gold', primary: '#D4AF37', secondary: '#B8860B', accent: '#F5D76E', background: '#0B0B0B', surface: '#171717', text: '#FAFAF9', textMuted: '#E8C44A' },
    { name: 'Warm Earth', primary: '#92400E', secondary: '#78350F', accent: '#D6B38A', background: '#FAF7F2', surface: '#FFFFFF', text: '#3B2F2F', textMuted: '#92400E' },
    { name: 'Professional Navy', primary: '#0F172A', secondary: '#1E293B', accent: '#60A5FA', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
  ],
  bar: [
    { name: 'Whiskey Gold', primary: '#B45309', secondary: '#92400E', accent: '#FCD9B6', background: '#FFF8F1', surface: '#FFFFFF', text: '#431407', textMuted: '#B45309' },
    { name: 'Dark Lounge', primary: '#171717', secondary: '#262626', accent: '#737373', background: '#0B0B0B', surface: '#171717', text: '#FAFAFA', textMuted: '#737373' },
    { name: 'Moody Purple', primary: '#6B2D8B', secondary: '#D946EF', accent: '#F0ABFF', background: '#FDF4FF', surface: '#FFFFFF', text: '#4A1A6A', textMuted: '#8B4AAB' },
  ],
  teashop: [
    { name: 'Matcha Green', primary: '#65A30D', secondary: '#4D7C0F', accent: '#BEF264', background: '#F7FEE7', surface: '#FFFFFF', text: '#1A2E05', textMuted: '#65A30D' },
    { name: 'Chai Brown', primary: '#92400E', secondary: '#78350F', accent: '#D6B38A', background: '#FAF7F2', surface: '#FFFFFF', text: '#3B2F2F', textMuted: '#92400E' },
    { name: 'Zen White', primary: '#FAFAFA', secondary: '#E5E7EB', accent: '#F3F4F6', background: '#FFFFFF', surface: '#FFFFFF', text: '#111827', textMuted: '#6B7280' },
  ],
  healthfood: [
    { name: 'Superfood Green', primary: '#166534', secondary: '#14532D', accent: '#86EFAC', background: '#F0FDF4', surface: '#FFFFFF', text: '#052E16', textMuted: '#16A34A' },
    { name: 'Organic Beige', primary: '#C19A6B', secondary: '#A67B5B', accent: '#E6CBA8', background: '#FAF3EB', surface: '#FFFFFF', text: '#4B382A', textMuted: '#C19A6B' },
    { name: 'Fresh White', primary: '#FAFAFA', secondary: '#E5E7EB', accent: '#F3F4F6', background: '#FFFFFF', surface: '#FFFFFF', text: '#111827', textMuted: '#6B7280' },
  ],

  // ============================================
  // 3. HEALTH, MEDICAL & WELLNESS
  // ============================================
  clinic: [
    { name: 'Medical Blue', primary: '#0077B6', secondary: '#00B4D8', accent: '#66DDFF', background: '#F0F8FF', surface: '#FFFFFF', text: '#004466', textMuted: '#0099CC' },
    { name: 'Clean Teal', primary: '#1B7B82', secondary: '#48CAE4', accent: '#70D8E8', background: '#F0FAFC', surface: '#FFFFFF', text: '#0D4A4F', textMuted: '#1B9AA6' },
    { name: 'Teal Fresh', primary: '#0F766E', secondary: '#115E59', accent: '#5EEAD4', background: '#F0FDFA', surface: '#FFFFFF', text: '#042F2E', textMuted: '#0F766E' },
  ],
  dental: [
    { name: 'Clean White', primary: '#0077B6', secondary: '#00B4D8', accent: '#66DDFF', background: '#F0F8FF', surface: '#FFFFFF', text: '#004466', textMuted: '#0099CC' },
    { name: 'Clinical Teal', primary: '#0F766E', secondary: '#115E59', accent: '#5EEAD4', background: '#F0FDFA', surface: '#FFFFFF', text: '#042F2E', textMuted: '#0F766E' },
    { name: 'Pure Blue', primary: '#2563EB', secondary: '#1E40AF', accent: '#60A5FA', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
  ],
  eyeclinic: [
    { name: 'Vision Blue', primary: '#2563EB', secondary: '#1E40AF', accent: '#60A5FA', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
    { name: 'Clinical White', primary: '#374151', secondary: '#6B7280', accent: '#9CA3AF', background: '#F9FAFB', surface: '#FFFFFF', text: '#1F2937', textMuted: '#4B5563' },
    { name: 'Focus Teal', primary: '#0F766E', secondary: '#115E59', accent: '#5EEAD4', background: '#F0FDFA', surface: '#FFFFFF', text: '#042F2E', textMuted: '#0F766E' },
  ],
  physiotherapy: [
    { name: 'Movement Blue', primary: '#0077B6', secondary: '#00B4D8', accent: '#66DDFF', background: '#F0F8FF', surface: '#FFFFFF', text: '#004466', textMuted: '#0099CC' },
    { name: 'Active Green', primary: '#22C55E', secondary: '#16A34A', accent: '#86EFAC', background: '#F0FDF4', surface: '#FFFFFF', text: '#14532D', textMuted: '#16A34A' },
    { name: 'Recovery Teal', primary: '#0F766E', secondary: '#115E59', accent: '#5EEAD4', background: '#F0FDFA', surface: '#FFFFFF', text: '#042F2E', textMuted: '#0F766E' },
  ],
  diagnostic: [
    { name: 'Lab Blue', primary: '#0077B6', secondary: '#00B4D8', accent: '#66DDFF', background: '#F0F8FF', surface: '#FFFFFF', text: '#004466', textMuted: '#0099CC' },
    { name: 'Precision Gray', primary: '#374151', secondary: '#6B7280', accent: '#9CA3AF', background: '#F9FAFB', surface: '#FFFFFF', text: '#1F2937', textMuted: '#4B5563' },
    { name: 'Clean White', primary: '#FAFAFA', secondary: '#E5E7EB', accent: '#F3F4F6', background: '#FFFFFF', surface: '#FFFFFF', text: '#111827', textMuted: '#6B7280' },
  ],
  gym: [
    { name: 'Bold Red', primary: '#DC2626', secondary: '#991B1B', accent: '#FCA5A5', background: '#FEF2F2', surface: '#FFFFFF', text: '#450A0A', textMuted: '#DC2626' },
    { name: 'Neon Dark', primary: '#22C55E', secondary: '#16A34A', accent: '#A3E635', background: '#0A0A0A', surface: '#171717', text: '#F5F5F5', textMuted: '#86EFAC' },
    { name: 'Cyber Blue Dark', primary: '#38BDF8', secondary: '#0EA5E9', accent: '#818CF8', background: '#020617', surface: '#0F172A', text: '#E2E8F0', textMuted: '#38BDF8' },
  ],
  yoga: [
    { name: 'Zen Purple', primary: '#7C3AED', secondary: '#5B21B6', accent: '#C4B5FD', background: '#F5F3FF', surface: '#FFFFFF', text: '#2E1065', textMuted: '#7C3AED' },
    { name: 'Calm Teal', primary: '#0F766E', secondary: '#115E59', accent: '#5EEAD4', background: '#F0FDFA', surface: '#FFFFFF', text: '#042F2E', textMuted: '#0F766E' },
    { name: 'Peaceful Pink', primary: '#F472B6', secondary: '#EC4899', accent: '#FBCFE8', background: '#FDF2F8', surface: '#FFFFFF', text: '#831843', textMuted: '#F472B6' },
  ],
  meditation: [
    { name: 'Mindful Purple', primary: '#7C3AED', secondary: '#5B21B6', accent: '#C4B5FD', background: '#F5F3FF', surface: '#FFFFFF', text: '#2E1065', textMuted: '#7C3AED' },
    { name: 'Serene Blue', primary: '#0891B2', secondary: '#155E75', accent: '#A5F3FC', background: '#F0FDFF', surface: '#FFFFFF', text: '#083344', textMuted: '#0891B2' },
    { name: 'Zen Beige', primary: '#C19A6B', secondary: '#A67B5B', accent: '#E6CBA8', background: '#FAF3EB', surface: '#FFFFFF', text: '#4B382A', textMuted: '#C19A6B' },
  ],
  nutritionist: [
    { name: 'Health Green', primary: '#22C55E', secondary: '#16A34A', accent: '#86EFAC', background: '#F0FDF4', surface: '#FFFFFF', text: '#14532D', textMuted: '#16A34A' },
    { name: 'Fresh Orange', primary: '#F97316', secondary: '#EA580C', accent: '#FDBA74', background: '#FFF7ED', surface: '#FFFFFF', text: '#431407', textMuted: '#F97316' },
    { name: 'Clean White', primary: '#374151', secondary: '#6B7280', accent: '#9CA3AF', background: '#FAFAFA', surface: '#FFFFFF', text: '#1F2937', textMuted: '#4B5563' },
  ],
  mentalwellness: [
    { name: 'Calm Lavender', primary: '#7B68A0', secondary: '#C9A8E8', accent: '#E0C8FF', background: '#F8F5FF', surface: '#FFFFFF', text: '#4A3870', textMuted: '#A090C0' },
    { name: 'Soothing Teal', primary: '#0F766E', secondary: '#115E59', accent: '#5EEAD4', background: '#F0FDFA', surface: '#FFFFFF', text: '#042F2E', textMuted: '#0F766E' },
    { name: 'Gentle Pink', primary: '#F472B6', secondary: '#EC4899', accent: '#FBCFE8', background: '#FDF2F8', surface: '#FFFFFF', text: '#831843', textMuted: '#F472B6' },
  ],
  rehabilitation: [
    { name: 'Recovery Blue', primary: '#0077B6', secondary: '#00B4D8', accent: '#66DDFF', background: '#F0F8FF', surface: '#FFFFFF', text: '#004466', textMuted: '#0099CC' },
    { name: 'Strength Green', primary: '#22C55E', secondary: '#16A34A', accent: '#86EFAC', background: '#F0FDF4', surface: '#FFFFFF', text: '#14532D', textMuted: '#16A34A' },
    { name: 'Support Gray', primary: '#374151', secondary: '#6B7280', accent: '#9CA3AF', background: '#F9FAFB', surface: '#FFFFFF', text: '#1F2937', textMuted: '#4B5563' },
  ],

  // ============================================
  // 4. BEAUTY & PERSONAL CARE
  // ============================================
  salon: [
    { name: 'Spa Lavender', primary: '#7B68A0', secondary: '#C9A8E8', accent: '#E0C8FF', background: '#F8F5FF', surface: '#FFFFFF', text: '#4A3870', textMuted: '#A090C0' },
    { name: 'Natural Jade', primary: '#2D5A4A', secondary: '#7BA38C', accent: '#A8C4B4', background: '#F0F4F1', surface: '#FFFFFF', text: '#1E3A2F', textMuted: '#5A7A6A' },
    { name: 'Rose Gold Spa', primary: '#B76E79', secondary: '#E8B4B8', accent: '#F0D4D8', background: '#FDF8F8', surface: '#FFFFFF', text: '#7A4A50', textMuted: '#C49AA0' },
  ],
  barber: [
    { name: 'Classic Black', primary: '#171717', secondary: '#262626', accent: '#737373', background: '#FAFAFA', surface: '#FFFFFF', text: '#0A0A0A', textMuted: '#525252' },
    { name: 'Barber Gold', primary: '#D4AF37', secondary: '#B8860B', accent: '#F5D76E', background: '#0B0B0B', surface: '#171717', text: '#FAFAF9', textMuted: '#E8C44A' },
    { name: 'Vintage Red', primary: '#DC2626', secondary: '#991B1B', accent: '#FCA5A5', background: '#FEF2F2', surface: '#FFFFFF', text: '#450A0A', textMuted: '#DC2626' },
  ],
  makeupartist: [
    { name: 'Glam Pink', primary: '#EC4899', secondary: '#DB2777', accent: '#F9A8D4', background: '#FDF2F8', surface: '#FFFFFF', text: '#831843', textMuted: '#EC4899' },
    { name: 'Professional Nude', primary: '#D977A7', secondary: '#BE5D89', accent: '#F5C2D8', background: '#FFF8FB', surface: '#FFFFFF', text: '#4A2233', textMuted: '#D977A7' },
    { name: 'Bold Red', primary: '#DC2626', secondary: '#991B1B', accent: '#FCA5A5', background: '#FEF2F2', surface: '#FFFFFF', text: '#450A0A', textMuted: '#DC2626' },
  ],
  nailstudio: [
    { name: 'Nail Pink', primary: '#EC4899', secondary: '#DB2777', accent: '#F9A8D4', background: '#FDF2F8', surface: '#FFFFFF', text: '#831843', textMuted: '#EC4899' },
    { name: 'Luxe Gold', primary: '#D4AF37', secondary: '#B8860B', accent: '#F5D76E', background: '#0B0B0B', surface: '#171717', text: '#FAFAF9', textMuted: '#E8C44A' },
    { name: 'Minimal White', primary: '#111827', secondary: '#374151', accent: '#9CA3AF', background: '#F9FAFB', surface: '#FFFFFF', text: '#111827', textMuted: '#6B7280' },
  ],
  bridalservices: [
    { name: 'Bridal Gold', primary: '#D4AF37', secondary: '#B8860B', accent: '#F5D76E', background: '#0B0B0B', surface: '#171717', text: '#FAFAF9', textMuted: '#E8C44A' },
    { name: 'Romantic Pink', primary: '#EC4899', secondary: '#DB2777', accent: '#F9A8D4', background: '#FDF2F8', surface: '#FFFFFF', text: '#831843', textMuted: '#EC4899' },
    { name: 'Classic White', primary: '#FAFAFA', secondary: '#E5E7EB', accent: '#F3F4F6', background: '#FFFFFF', surface: '#FFFFFF', text: '#111827', textMuted: '#6B7280' },
  ],
  beautyclinic: [
    { name: 'Clinic White', primary: '#374151', secondary: '#6B7280', accent: '#9CA3AF', background: '#F9FAFB', surface: '#FFFFFF', text: '#1F2937', textMuted: '#4B5563' },
    { name: 'Rose Gold', primary: '#B76E79', secondary: '#E8B4B8', accent: '#F0D4D8', background: '#FDF8F8', surface: '#FFFFFF', text: '#7A4A50', textMuted: '#C49AA0' },
    { name: 'Luxury Purple', primary: '#7C3AED', secondary: '#5B21B6', accent: '#C4B5FD', background: '#F5F3FF', surface: '#FFFFFF', text: '#2E1065', textMuted: '#7C3AED' },
  ],
  tattoo: [
    { name: 'Ink Dark', primary: '#171717', secondary: '#262626', accent: '#737373', background: '#0B0B0B', surface: '#171717', text: '#FAFAFA', textMuted: '#737373' },
    { name: 'Neo Traditional', primary: '#DC2626', secondary: '#991B1B', accent: '#FCA5A5', background: '#FEF2F2', surface: '#FFFFFF', text: '#450A0A', textMuted: '#DC2626' },
    { name: 'Bold Black', primary: '#0A0A0A', secondary: '#171717', accent: '#525252', background: '#FAFAFA', surface: '#FFFFFF', text: '#0A0A0A', textMuted: '#525252' },
  ],
  massagecenter: [
    { name: 'Relaxation Lavender', primary: '#7B68A0', secondary: '#C9A8E8', accent: '#E0C8FF', background: '#F8F5FF', surface: '#FFFFFF', text: '#4A3870', textMuted: '#A090C0' },
    { name: 'Warm Earth', primary: '#92400E', secondary: '#78350F', accent: '#D6B38A', background: '#FAF7F2', surface: '#FFFFFF', text: '#3B2F2F', textMuted: '#92400E' },
    { name: 'Calm Teal', primary: '#0F766E', secondary: '#115E59', accent: '#5EEAD4', background: '#F0FDFA', surface: '#FFFFFF', text: '#042F2E', textMuted: '#0F766E' },
  ],
  groomingservices: [
    { name: 'Sharp Navy', primary: '#1E3A8A', secondary: '#1E40AF', accent: '#93C5FD', background: '#EFF6FF', surface: '#FFFFFF', text: '#172554', textMuted: '#2563EB' },
    { name: 'Clean Black', primary: '#171717', secondary: '#262626', accent: '#737373', background: '#FAFAFA', surface: '#FFFFFF', text: '#0A0A0A', textMuted: '#525252' },
    { name: 'Professional Gray', primary: '#374151', secondary: '#6B7280', accent: '#9CA3AF', background: '#F9FAFB', surface: '#FFFFFF', text: '#1F2937', textMuted: '#4B5563' },
  ],

  // ============================================
  // 5. PROFESSIONAL SERVICES
  // ============================================
  corporate: [
    { name: 'Corporate Navy', primary: '#0A2463', secondary: '#3E92CC', accent: '#66B0E0', background: '#F5F8FC', surface: '#FFFFFF', text: '#0A1A33', textMuted: '#3E5A82' },
    { name: 'Modern Blue', primary: '#2563EB', secondary: '#1E40AF', accent: '#60A5FA', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
    { name: 'Trust Blue', primary: '#0369A1', secondary: '#0EA5E9', accent: '#60D0F0', background: '#F0F9FF', surface: '#FFFFFF', text: '#023E7A', textMuted: '#0284C7' },
  ],
  accounting: [
    { name: 'Trust Blue', primary: '#0369A1', secondary: '#0EA5E9', accent: '#60D0F0', background: '#F0F9FF', surface: '#FFFFFF', text: '#023E7A', textMuted: '#0284C7' },
    { name: 'Professional Navy', primary: '#0A2463', secondary: '#3E92CC', accent: '#66B0E0', background: '#F5F8FC', surface: '#FFFFFF', text: '#0A1A33', textMuted: '#3E5A82' },
    { name: 'Clean Gray', primary: '#374151', secondary: '#6B7280', accent: '#9CA3AF', background: '#F9FAFB', surface: '#FFFFFF', text: '#1F2937', textMuted: '#4B5563' },
  ],
  law: [
    { name: 'Legal Navy', primary: '#0A2463', secondary: '#1E40AF', accent: '#66B0E0', background: '#F5F8FC', surface: '#FFFFFF', text: '#0A1A33', textMuted: '#3E5A82' },
    { name: 'Burgundy Classic', primary: '#722F37', secondary: '#9B4F5C', accent: '#C47F88', background: '#FDF5F5', surface: '#FFFFFF', text: '#4A1F24', textMuted: '#8B4A50' },
    { name: 'Executive Black', primary: '#171717', secondary: '#525252', accent: '#737373', background: '#FAFAFA', surface: '#FFFFFF', text: '#0A0A0A', textMuted: '#525252' },
  ],
  tax: [
    { name: 'Legal Navy', primary: '#0A2463', secondary: '#1E40AF', accent: '#66B0E0', background: '#F5F8FC', surface: '#FFFFFF', text: '#0A1A33', textMuted: '#3E5A82' },
    { name: 'Document Gray', primary: '#374151', secondary: '#6B7280', accent: '#9CA3AF', background: '#F9FAFB', surface: '#FFFFFF', text: '#1F2937', textMuted: '#4B5563' },
    { name: 'Classic Black', primary: '#171717', secondary: '#525252', accent: '#737373', background: '#FAFAFA', surface: '#FFFFFF', text: '#0A0A0A', textMuted: '#525252' },
  ],
  audit: [
    { name: 'Audit Green', primary: '#166534', secondary: '#14532D', accent: '#86EFAC', background: '#F0FDF4', surface: '#FFFFFF', text: '#052E16', textMuted: '#16A34A' },
    { name: 'Professional Navy', primary: '#0A2463', secondary: '#3E92CC', accent: '#66B0E0', background: '#F5F8FC', surface: '#FFFFFF', text: '#0A1A33', textMuted: '#3E5A82' },
    { name: 'Clean White', primary: '#374151', secondary: '#6B7280', accent: '#9CA3AF', background: '#F9FAFB', surface: '#FFFFFF', text: '#1F2937', textMuted: '#4B5563' },
  ],
  businessconsultant: [
    { name: 'Corporate Navy', primary: '#0A2463', secondary: '#3E92CC', accent: '#66B0E0', background: '#F5F8FC', surface: '#FFFFFF', text: '#0A1A33', textMuted: '#3E5A82' },
    { name: 'Modern Blue', primary: '#2563EB', secondary: '#1E40AF', accent: '#60A5FA', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
    { name: 'Trust Teal', primary: '#0F766E', secondary: '#115E59', accent: '#5EEAD4', background: '#F0FDFA', surface: '#FFFFFF', text: '#042F2E', textMuted: '#0F766E' },
  ],
  financialadvisor: [
    { name: 'Wealth Gold', primary: '#D4AF37', secondary: '#B8860B', accent: '#F5D76E', background: '#0B0B0B', surface: '#171717', text: '#FAFAF9', textMuted: '#E8C44A' },
    { name: 'Trust Blue', primary: '#0369A1', secondary: '#0EA5E9', accent: '#60D0F0', background: '#F0F9FF', surface: '#FFFFFF', text: '#023E7A', textMuted: '#0284C7' },
    { name: 'Secure Green', primary: '#166534', secondary: '#14532D', accent: '#86EFAC', background: '#F0FDF4', surface: '#FFFFFF', text: '#052E16', textMuted: '#16A34A' },
  ],
  insurance: [
    { name: 'Safe Blue', primary: '#0369A1', secondary: '#0EA5E9', accent: '#60D0F0', background: '#F0F9FF', surface: '#FFFFFF', text: '#023E7A', textMuted: '#0284C7' },
    { name: 'Protection Navy', primary: '#0A2463', secondary: '#3E92CC', accent: '#66B0E0', background: '#F5F8FC', surface: '#FFFFFF', text: '#0A1A33', textMuted: '#3E5A82' },
    { name: 'Reliable Gray', primary: '#374151', secondary: '#6B7280', accent: '#9CA3AF', background: '#F9FAFB', surface: '#FFFFFF', text: '#1F2937', textMuted: '#4B5563' },
  ],
  realestateconsultant: [
    { name: 'Estate Navy', primary: '#1E3A5F', secondary: '#C9A962', accent: '#E8D9A8', background: '#F8F6F1', surface: '#FFFFFF', text: '#1A2B3C', textMuted: '#5A6B7C' },
    { name: 'Luxury Gold', primary: '#D4AF37', secondary: '#B8860B', accent: '#F5D76E', background: '#0B0B0B', surface: '#171717', text: '#FAFAF9', textMuted: '#E8C44A' },
    { name: 'Property Green', primary: '#14532D', secondary: '#22C55E', accent: '#86EFAC', background: '#F0FDF4', surface: '#FFFFFF', text: '#052E16', textMuted: '#16A34A' },
  ],
  marketing: [
    { name: 'Creative Orange', primary: '#F97316', secondary: '#EA580C', accent: '#FDBA74', background: '#FFF7ED', surface: '#FFFFFF', text: '#431407', textMuted: '#F97316' },
    { name: 'Bold Purple', primary: '#7C3AED', secondary: '#5B21B6', accent: '#C4B5FD', background: '#F5F3FF', surface: '#FFFFFF', text: '#2E1065', textMuted: '#7C3AED' },
    { name: 'Energetic Red', primary: '#DC2626', secondary: '#991B1B', accent: '#FCA5A5', background: '#FEF2F2', surface: '#FFFFFF', text: '#450A0A', textMuted: '#DC2626' },
  ],
  branding: [
    { name: 'Brand Gold', primary: '#D4AF37', secondary: '#B8860B', accent: '#F5D76E', background: '#0B0B0B', surface: '#171717', text: '#FAFAF9', textMuted: '#E8C44A' },
    { name: 'Creative Purple', primary: '#7C3AED', secondary: '#5B21B6', accent: '#C4B5FD', background: '#F5F3FF', surface: '#FFFFFF', text: '#2E1065', textMuted: '#7C3AED' },
    { name: 'Minimal Black', primary: '#171717', secondary: '#262626', accent: '#737373', background: '#FAFAFA', surface: '#FFFFFF', text: '#0A0A0A', textMuted: '#525252' },
  ],
  hr: [
    { name: 'People Blue', primary: '#2563EB', secondary: '#1E40AF', accent: '#60A5FA', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
    { name: 'Warm Navy', primary: '#0F172A', secondary: '#1E293B', accent: '#D4AF37', background: '#F8F5EF', surface: '#FFFFFF', text: '#111827', textMuted: '#6B7280' },
    { name: 'Friendly Teal', primary: '#0F766E', secondary: '#115E59', accent: '#5EEAD4', background: '#F0FDFA', surface: '#FFFFFF', text: '#042F2E', textMuted: '#0F766E' },
  ],
  recruitment: [
    { name: 'Talent Blue', primary: '#2563EB', secondary: '#1E40AF', accent: '#60A5FA', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
    { name: 'Growth Green', primary: '#22C55E', secondary: '#16A34A', accent: '#86EFAC', background: '#F0FDF4', surface: '#FFFFFF', text: '#14532D', textMuted: '#16A34A' },
    { name: 'Professional Gray', primary: '#374151', secondary: '#6B7280', accent: '#9CA3AF', background: '#F9FAFB', surface: '#FFFFFF', text: '#1F2937', textMuted: '#4B5563' },
  ],

  // ============================================
  // 6. TECHNOLOGY & DIGITAL
  // ============================================
  technology: [
    { name: 'Tech Blue', primary: '#2563EB', secondary: '#1E40AF', accent: '#60A5FA', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
    { name: 'Future Dark', primary: '#0F172A', secondary: '#1E293B', accent: '#38BDF8', background: '#020617', surface: '#0F172A', text: '#E2E8F0', textMuted: '#38BDF8' },
    { name: 'Innovation Purple', primary: '#7C3AED', secondary: '#5B21B6', accent: '#C4B5FD', background: '#F5F3FF', surface: '#FFFFFF', text: '#2E1065', textMuted: '#7C3AED' },
  ],
  software: [
    { name: 'Dev Blue', primary: '#2563EB', secondary: '#1E40AF', accent: '#60A5FA', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
    { name: 'Code Dark', primary: '#1F2937', secondary: '#111827', accent: '#10B981', background: '#F9FAFB', surface: '#FFFFFF', text: '#111827', textMuted: '#6B7280' },
    { name: 'Modern Indigo', primary: '#4F46E5', secondary: '#312E81', accent: '#A5B4FC', background: '#EEF2FF', surface: '#FFFFFF', text: '#1F2937', textMuted: '#6B7280' },
  ],
  saas: [
    { name: 'SaaS Purple', primary: '#7C3AED', secondary: '#5B21B6', accent: '#C4B5FD', background: '#F5F3FF', surface: '#FFFFFF', text: '#2E1065', textMuted: '#7C3AED' },
    { name: 'Cloud Blue', primary: '#0EA5E9', secondary: '#0369A1', accent: '#7DD3FC', background: '#F0F9FF', surface: '#FFFFFF', text: '#082F49', textMuted: '#0EA5E9' },
    { name: 'Enterprise Navy', primary: '#0F172A', secondary: '#1E293B', accent: '#60A5FA', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
  ],
  webdev: [
    { name: 'Web Dark', primary: '#1F2937', secondary: '#111827', accent: '#10B981', background: '#F9FAFB', surface: '#FFFFFF', text: '#111827', textMuted: '#6B7280' },
    { name: 'Modern Blue', primary: '#2563EB', secondary: '#1E40AF', accent: '#60A5FA', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
    { name: 'Clean White', primary: '#374151', secondary: '#6B7280', accent: '#9CA3AF', background: '#F9FAFB', surface: '#FFFFFF', text: '#1F2937', textMuted: '#4B5563' },
  ],
  appdev: [
    { name: 'App Blue', primary: '#2563EB', secondary: '#1E40AF', accent: '#60A5FA', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
    { name: 'Mobile Dark', primary: '#0F172A', secondary: '#1E293B', accent: '#38BDF8', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#38BDF8' },
    { name: 'Fresh Green', primary: '#10B981', secondary: '#047857', accent: '#6EE7B7', background: '#ECFDF5', surface: '#FFFFFF', text: '#064E3B', textMuted: '#10B981' },
  ],
  uiux: [
    { name: 'Design Purple', primary: '#7C3AED', secondary: '#5B21B6', accent: '#C4B5FD', background: '#F5F3FF', surface: '#FFFFFF', text: '#2E1065', textMuted: '#7C3AED' },
    { name: 'Creative Pink', primary: '#EC4899', secondary: '#8B5CF6', accent: '#F9A8D4', background: '#FDF4FF', surface: '#FFFFFF', text: '#3B0764', textMuted: '#EC4899' },
    { name: 'Minimal White', primary: '#111827', secondary: '#374151', accent: '#9CA3AF', background: '#F9FAFB', surface: '#FFFFFF', text: '#111827', textMuted: '#6B7280' },
  ],
  itservices: [
    { name: 'IT Blue', primary: '#2563EB', secondary: '#1E40AF', accent: '#60A5FA', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
    { name: 'Support Teal', primary: '#0F766E', secondary: '#115E59', accent: '#5EEAD4', background: '#F0FDFA', surface: '#FFFFFF', text: '#042F2E', textMuted: '#0F766E' },
    { name: 'Professional Gray', primary: '#374151', secondary: '#6B7280', accent: '#9CA3AF', background: '#F9FAFB', surface: '#FFFFFF', text: '#1F2937', textMuted: '#4B5563' },
  ],
  cybersecurity: [
    { name: 'Secure Red', primary: '#DC2626', secondary: '#991B1B', accent: '#FCA5A5', background: '#FEF2F2', surface: '#FFFFFF', text: '#450A0A', textMuted: '#DC2626' },
    { name: 'Cyber Dark', primary: '#0F172A', secondary: '#1E293B', accent: '#38BDF8', background: '#020617', surface: '#0F172A', text: '#E2E8F0', textMuted: '#38BDF8' },
    { name: 'Shield Green', primary: '#166534', secondary: '#14532D', accent: '#86EFAC', background: '#F0FDF4', surface: '#FFFFFF', text: '#052E16', textMuted: '#16A34A' },
  ],
  cloud: [
    { name: 'Cloud White', primary: '#374151', secondary: '#6B7280', accent: '#9CA3AF', background: '#F9FAFB', surface: '#FFFFFF', text: '#1F2937', textMuted: '#4B5563' },
    { name: 'Sky Blue', primary: '#0EA5E9', secondary: '#0369A1', accent: '#7DD3FC', background: '#F0F9FF', surface: '#FFFFFF', text: '#082F49', textMuted: '#0EA5E9' },
    { name: 'Tech Dark', primary: '#1F2937', secondary: '#111827', accent: '#10B981', background: '#F9FAFB', surface: '#FFFFFF', text: '#111827', textMuted: '#6B7280' },
  ],
  hosting: [
    { name: 'Server Blue', primary: '#2563EB', secondary: '#1E40AF', accent: '#60A5FA', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
    { name: 'Uptime Green', primary: '#22C55E', secondary: '#16A34A', accent: '#86EFAC', background: '#F0FDF4', surface: '#FFFFFF', text: '#14532D', textMuted: '#16A34A' },
    { name: 'Clean Dark', primary: '#0F172A', secondary: '#1E293B', accent: '#64748B', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
  ],
  seo: [
    { name: 'Search Green', primary: '#22C55E', secondary: '#16A34A', accent: '#86EFAC', background: '#F0FDF4', surface: '#FFFFFF', text: '#14532D', textMuted: '#16A34A' },
    { name: 'Ranking Gold', primary: '#D4AF37', secondary: '#B8860B', accent: '#F5D76E', background: '#0B0B0B', surface: '#171717', text: '#FAFAF9', textMuted: '#E8C44A' },
    { name: 'Modern Blue', primary: '#2563EB', secondary: '#1E40AF', accent: '#60A5FA', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
  ],
  socialmedia: [
    { name: 'Social Pink', primary: '#EC4899', secondary: '#DB2777', accent: '#F9A8D4', background: '#FDF2F8', surface: '#FFFFFF', text: '#831843', textMuted: '#EC4899' },
    { name: 'Vibrant Blue', primary: '#0EA5E9', secondary: '#0369A1', accent: '#7DD3FC', background: '#F0F9FF', surface: '#FFFFFF', text: '#082F49', textMuted: '#0EA5E9' },
    { name: 'Gradient Purple', primary: '#7C3AED', secondary: '#EC4899', accent: '#C4B5FD', background: '#F5F3FF', surface: '#FFFFFF', text: '#2E1065', textMuted: '#7C3AED' },
  ],
  ai: [
    { name: 'AI Purple', primary: '#7C3AED', secondary: '#5B21B6', accent: '#C4B5FD', background: '#F5F3FF', surface: '#FFFFFF', text: '#2E1065', textMuted: '#7C3AED' },
    { name: 'Neural Blue', primary: '#2563EB', secondary: '#1E40AF', accent: '#60A5FA', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
    { name: 'Future Dark', primary: '#0F172A', secondary: '#1E293B', accent: '#38BDF8', background: '#020617', surface: '#0F172A', text: '#E2E8F0', textMuted: '#38BDF8' },
  ],
  dataanalytics: [
    { name: 'Data Blue', primary: '#2563EB', secondary: '#1E40AF', accent: '#60A5FA', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
    { name: 'Insight Green', primary: '#22C55E', secondary: '#16A34A', accent: '#86EFAC', background: '#F0FDF4', surface: '#FFFFFF', text: '#14532D', textMuted: '#16A34A' },
    { name: 'Chart Gold', primary: '#D4AF37', secondary: '#B8860B', accent: '#F5D76E', background: '#0B0B0B', surface: '#171717', text: '#FAFAF9', textMuted: '#E8C44A' },
  ],

  // ============================================
  // 7. EDUCATION & TRAINING
  // ============================================
  education: [
    { name: 'Academic Blue', primary: '#1E40AF', secondary: '#3B82F6', accent: '#93C5FD', background: '#EFF6FF', surface: '#FFFFFF', text: '#1E3A8A', textMuted: '#2563EB' },
    { name: 'Scholar Gold', primary: '#78350F', secondary: '#D97706', accent: '#FCD34D', background: '#FFFBEB', surface: '#FFFFFF', text: '#451A03', textMuted: '#B45309' },
    { name: 'Library Brown', primary: '#5C4033', secondary: '#8B7355', accent: '#C4A880', background: '#FAF7F2', surface: '#FFFFFF', text: '#3D2B1F', textMuted: '#8B7355' },
  ],
  school: [
    { name: 'School Blue', primary: '#1E40AF', secondary: '#3B82F6', accent: '#93C5FD', background: '#EFF6FF', surface: '#FFFFFF', text: '#1E3A8A', textMuted: '#2563EB' },
    { name: 'Playful Yellow', primary: '#EAB308', secondary: '#CA8A04', accent: '#FEF08A', background: '#FEFCE8', surface: '#FFFFFF', text: '#422006', textMuted: '#EAB308' },
    { name: 'Friendly Green', primary: '#22C55E', secondary: '#16A34A', accent: '#86EFAC', background: '#F0FDF4', surface: '#FFFFFF', text: '#14532D', textMuted: '#16A34A' },
  ],
  college: [
    { name: 'Academic Navy', primary: '#1E3A8A', secondary: '#1E40AF', accent: '#93C5FD', background: '#EFF6FF', surface: '#FFFFFF', text: '#172554', textMuted: '#2563EB' },
    { name: 'Scholar Gold', primary: '#78350F', secondary: '#D97706', accent: '#FCD34D', background: '#FFFBEB', surface: '#FFFFFF', text: '#451A03', textMuted: '#B45309' },
    { name: 'Modern Blue', primary: '#2563EB', secondary: '#1E40AF', accent: '#60A5FA', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
  ],
  university: [
    { name: 'Prestige Navy', primary: '#0A2463', secondary: '#3E92CC', accent: '#66B0E0', background: '#F5F8FC', surface: '#FFFFFF', text: '#0A1A33', textMuted: '#3E5A82' },
    { name: 'Graduation Gold', primary: '#D4AF37', secondary: '#B8860B', accent: '#F5D76E', background: '#0B0B0B', surface: '#171717', text: '#FAFAF9', textMuted: '#E8C44A' },
    { name: 'Classic Red', primary: '#9F1239', secondary: '#881337', accent: '#FB7185', background: '#FFF1F2', surface: '#FFFFFF', text: '#4C0519', textMuted: '#9F1239' },
  ],
  coaching: [
    { name: 'Coach Orange', primary: '#F97316', secondary: '#EA580C', accent: '#FDBA74', background: '#FFF7ED', surface: '#FFFFFF', text: '#431407', textMuted: '#F97316' },
    { name: 'Growth Green', primary: '#22C55E', secondary: '#16A34A', accent: '#86EFAC', background: '#F0FDF4', surface: '#FFFFFF', text: '#14532D', textMuted: '#16A34A' },
    { name: 'Mentor Blue', primary: '#2563EB', secondary: '#1E40AF', accent: '#60A5FA', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
  ],
  onlinecourse: [
    { name: 'Learn Purple', primary: '#7C3AED', secondary: '#5B21B6', accent: '#C4B5FD', background: '#F5F3FF', surface: '#FFFFFF', text: '#2E1065', textMuted: '#7C3AED' },
    { name: 'Video Blue', primary: '#0EA5E9', secondary: '#0369A1', accent: '#7DD3FC', background: '#F0F9FF', surface: '#FFFFFF', text: '#082F49', textMuted: '#0EA5E9' },
    { name: 'Modern White', primary: '#111827', secondary: '#374151', accent: '#9CA3AF', background: '#F9FAFB', surface: '#FFFFFF', text: '#111827', textMuted: '#6B7280' },
  ],
  edtech: [
    { name: 'Tech Purple', primary: '#7C3AED', secondary: '#5B21B6', accent: '#C4B5FD', background: '#F5F3FF', surface: '#FFFFFF', text: '#2E1065', textMuted: '#7C3AED' },
    { name: 'Learn Blue', primary: '#2563EB', secondary: '#1E40AF', accent: '#60A5FA', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
    { name: 'Future Green', primary: '#22C55E', secondary: '#16A34A', accent: '#86EFAC', background: '#F0FDF4', surface: '#FFFFFF', text: '#14532D', textMuted: '#16A34A' },
  ],

  // ============================================
  // 8. HOME & LOCAL SERVICES
  // ============================================
  cleaning: [
    { name: 'Clean Blue', primary: '#0077B6', secondary: '#00B4D8', accent: '#66DDFF', background: '#F0F8FF', surface: '#FFFFFF', text: '#004466', textMuted: '#0099CC' },
    { name: 'Fresh Green', primary: '#22C55E', secondary: '#16A34A', accent: '#86EFAC', background: '#F0FDF4', surface: '#FFFFFF', text: '#14532D', textMuted: '#16A34A' },
    { name: 'Sparkle White', primary: '#FAFAFA', secondary: '#E5E7EB', accent: '#F3F4F6', background: '#FFFFFF', surface: '#FFFFFF', text: '#111827', textMuted: '#6B7280' },
  ],
  plumbing: [
    { name: 'Pipe Blue', primary: '#2563EB', secondary: '#1E40AF', accent: '#60A5FA', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
    { name: 'Water Teal', primary: '#0F766E', secondary: '#115E59', accent: '#5EEAD4', background: '#F0FDFA', surface: '#FFFFFF', text: '#042F2E', textMuted: '#0F766E' },
    { name: 'Tool Orange', primary: '#F97316', secondary: '#EA580C', accent: '#FDBA74', background: '#FFF7ED', surface: '#FFFFFF', text: '#431407', textMuted: '#F97316' },
  ],
  electrical: [
    { name: 'Electric Yellow', primary: '#EAB308', secondary: '#CA8A04', accent: '#FEF08A', background: '#FEFCE8', surface: '#FFFFFF', text: '#422006', textMuted: '#EAB308' },
    { name: 'Wire Blue', primary: '#2563EB', secondary: '#1E40AF', accent: '#60A5FA', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
    { name: 'Safety Dark', primary: '#171717', secondary: '#262626', accent: '#737373', background: '#FAFAFA', surface: '#FFFFFF', text: '#0A0A0A', textMuted: '#525252' },
  ],
  carpentry: [
    { name: 'Wood Brown', primary: '#92400E', secondary: '#78350F', accent: '#D6B38A', background: '#FAF7F2', surface: '#FFFFFF', text: '#3B2F2F', textMuted: '#92400E' },
    { name: 'Craftsman Navy', primary: '#1E3A8A', secondary: '#1E40AF', accent: '#93C5FD', background: '#EFF6FF', surface: '#FFFFFF', text: '#172554', textMuted: '#2563EB' },
    { name: 'Saw Dust Brown', primary: '#78716C', secondary: '#57534E', accent: '#D6D3D1', background: '#FAF7F5', surface: '#FFFFFF', text: '#292524', textMuted: '#78716C' },
  ],
  painting: [
    { name: 'Paint Blue', primary: '#2563EB', secondary: '#1E40AF', accent: '#60A5FA', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
    { name: 'Colorful Red', primary: '#DC2626', secondary: '#991B1B', accent: '#FCA5A5', background: '#FEF2F2', surface: '#FFFFFF', text: '#450A0A', textMuted: '#DC2626' },
    { name: 'Fresh Green', primary: '#22C55E', secondary: '#16A34A', accent: '#86EFAC', background: '#F0FDF4', surface: '#FFFFFF', text: '#14532D', textMuted: '#16A34A' },
  ],
  gardening: [
    { name: 'Garden Green', primary: '#22C55E', secondary: '#16A34A', accent: '#86EFAC', background: '#F0FDF4', surface: '#FFFFFF', text: '#14532D', textMuted: '#16A34A' },
    { name: 'Earth Brown', primary: '#78350F', secondary: '#92400E', accent: '#D6B38A', background: '#FAF7F2', surface: '#FFFFFF', text: '#451A03', textMuted: '#78350F' },
    { name: 'Natural Beige', primary: '#C19A6B', secondary: '#A67B5B', accent: '#E6CBA8', background: '#FAF3EB', surface: '#FFFFFF', text: '#4B382A', textMuted: '#C19A6B' },
  ],
  securityservices: [
    { name: 'Secure Dark', primary: '#171717', secondary: '#262626', accent: '#737373', background: '#0B0B0B', surface: '#171717', text: '#FAFAFA', textMuted: '#737373' },
    { name: 'Shield Blue', primary: '#2563EB', secondary: '#1E40AF', accent: '#60A5FA', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
    { name: 'Guard Green', primary: '#166534', secondary: '#14532D', accent: '#86EFAC', background: '#F0FDF4', surface: '#FFFFFF', text: '#052E16', textMuted: '#16A34A' },
  ],
  movers: [
    { name: 'Move Blue', primary: '#2563EB', secondary: '#1E40AF', accent: '#60A5FA', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
    { name: 'Truck Orange', primary: '#F97316', secondary: '#EA580C', accent: '#FDBA74', background: '#FFF7ED', surface: '#FFFFFF', text: '#431407', textMuted: '#F97316' },
    { name: 'Reliable Gray', primary: '#374151', secondary: '#6B7280', accent: '#9CA3AF', background: '#F9FAFB', surface: '#FFFFFF', text: '#1F2937', textMuted: '#4B5563' },
  ],

  // ============================================
  // 9. CONSTRUCTION & REAL ESTATE
  // ============================================
  construction: [
    { name: 'Industrial Orange', primary: '#E85D04', secondary: '#FF8C42', accent: '#FFAA66', background: '#FFF8F0', surface: '#FFFFFF', text: '#7A3000', textMuted: '#E85D04' },
    { name: 'Steel Gray', primary: '#4A4A4A', secondary: '#8B8B8B', accent: '#C4C4C4', background: '#F5F5F5', surface: '#FFFFFF', text: '#2D2D2D', textMuted: '#6B6B6B' },
    { name: 'Blueprint Blue', primary: '#1E40AF', secondary: '#3B82F6', accent: '#93C5FD', background: '#EFF6FF', surface: '#FFFFFF', text: '#1E3A8A', textMuted: '#2563EB' },
  ],
  realestate: [
    { name: 'Luxury Black', primary: '#171717', secondary: '#D4AF37', accent: '#E8C94A', background: '#FAFAFA', surface: '#FFFFFF', text: '#0A0A0A', textMuted: '#525252' },
    { name: 'Estate Green', primary: '#14532D', secondary: '#22C55E', accent: '#86EFAC', background: '#F0FDF4', surface: '#FFFFFF', text: '#052E16', textMuted: '#16A34A' },
    { name: 'Classic Navy', primary: '#1E3A5F', secondary: '#C9A962', accent: '#E8D9A8', background: '#F8F6F1', surface: '#FFFFFF', text: '#1A2B3C', textMuted: '#5A6B7C' },
  ],
  architecture: [
    { name: 'Arch White', primary: '#111827', secondary: '#374151', accent: '#9CA3AF', background: '#F9FAFB', surface: '#FFFFFF', text: '#111827', textMuted: '#6B7280' },
    { name: 'Design Gold', primary: '#D4AF37', secondary: '#B8860B', accent: '#F5D76E', background: '#0B0B0B', surface: '#171717', text: '#FAFAF9', textMuted: '#E8C44A' },
    { name: 'Modern Gray', primary: '#52525B', secondary: '#71717A', accent: '#D4D4D8', background: '#FAFAFA', surface: '#FFFFFF', text: '#18181B', textMuted: '#71717A' },
  ],
  interiordesignfirm: [
    { name: 'Interior Beige', primary: '#C19A6B', secondary: '#A67B5B', accent: '#E6CBA8', background: '#FAF3EB', surface: '#FFFFFF', text: '#4B382A', textMuted: '#C19A6B' },
    { name: 'Design Black', primary: '#171717', secondary: '#262626', accent: '#737373', background: '#FAFAFA', surface: '#FFFFFF', text: '#0A0A0A', textMuted: '#525252' },
    { name: 'Elegant Navy', primary: '#0F172A', secondary: '#1E293B', accent: '#D4AF37', background: '#F8F5EF', surface: '#FFFFFF', text: '#111827', textMuted: '#6B7280' },
  ],
  coworking: [
    { name: 'Cowork Teal', primary: '#0F766E', secondary: '#115E59', accent: '#5EEAD4', background: '#F0FDFA', surface: '#FFFFFF', text: '#042F2E', textMuted: '#0F766E' },
    { name: 'Creative Purple', primary: '#7C3AED', secondary: '#5B21B6', accent: '#C4B5FD', background: '#F5F3FF', surface: '#FFFFFF', text: '#2E1065', textMuted: '#7C3AED' },
    { name: 'Modern Blue', primary: '#2563EB', secondary: '#1E40AF', accent: '#60A5FA', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
  ],

  // ============================================
  // 10. AUTOMOTIVE
  // ============================================
  automotive: [
    { name: 'Auto Dark', primary: '#171717', secondary: '#262626', accent: '#737373', background: '#FAFAFA', surface: '#FFFFFF', text: '#0A0A0A', textMuted: '#525252' },
    { name: 'Steel Gray', primary: '#4A4A4A', secondary: '#8B8B8B', accent: '#C4C4C4', background: '#F5F5F5', surface: '#FFFFFF', text: '#2D2D2D', textMuted: '#6B6B6B' },
    { name: 'Safety Orange', primary: '#E85D04', secondary: '#FF8C42', accent: '#FFAA66', background: '#FFF8F0', surface: '#FFFFFF', text: '#7A3000', textMuted: '#E85D04' },
  ],
  carDealer: [
    { name: 'Auto Dark', primary: '#171717', secondary: '#262626', accent: '#737373', background: '#FAFAFA', surface: '#FFFFFF', text: '#0A0A0A', textMuted: '#525252' },
    { name: 'Premium Gold', primary: '#D4AF37', secondary: '#B8860B', accent: '#F5D76E', background: '#0B0B0B', surface: '#171717', text: '#FAFAF9', textMuted: '#E8C44A' },
    { name: 'Modern Blue', primary: '#2563EB', secondary: '#1E40AF', accent: '#60A5FA', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
  ],
  autoRepair: [
    { name: 'Mechanic Dark', primary: '#171717', secondary: '#262626', accent: '#737373', background: '#0B0B0B', surface: '#171717', text: '#FAFAFA', textMuted: '#737373' },
    { name: 'Wrench Orange', primary: '#E85D04', secondary: '#FF8C42', accent: '#FFAA66', background: '#FFF8F0', surface: '#FFFFFF', text: '#7A3000', textMuted: '#E85D04' },
    { name: 'Service Gray', primary: '#374151', secondary: '#6B7280', accent: '#9CA3AF', background: '#F9FAFB', surface: '#FFFFFF', text: '#1F2937', textMuted: '#4B5563' },
  ],
  evCharging: [
    { name: 'EV Green', primary: '#22C55E', secondary: '#16A34A', accent: '#86EFAC', background: '#F0FDF4', surface: '#FFFFFF', text: '#14532D', textMuted: '#16A34A' },
    { name: 'Charge Blue', primary: '#0EA5E9', secondary: '#0369A1', accent: '#7DD3FC', background: '#F0F9FF', surface: '#FFFFFF', text: '#082F49', textMuted: '#0EA5E9' },
    { name: 'Future Dark', primary: '#0F172A', secondary: '#1E293B', accent: '#38BDF8', background: '#020617', surface: '#0F172A', text: '#E2E8F0', textMuted: '#38BDF8' },
  ],

  // ============================================
  // 11. TRAVEL & HOSPITALITY
  // ============================================
  hotel: [
    { name: 'Luxury Gold', primary: '#D4AF37', secondary: '#B8860B', accent: '#F5D76E', background: '#0B0B0B', surface: '#171717', text: '#FAFAF9', textMuted: '#E8C44A' },
    { name: 'Royal Navy', primary: '#0F1E3C', secondary: '#C9A962', accent: '#E8D9A8', background: '#F5F7FA', surface: '#FFFFFF', text: '#0A1220', textMuted: '#4A5A72' },
    { name: 'Dark Teal Gold', primary: '#134E4A', secondary: '#115E59', accent: '#D4AF37', background: '#0F172A', surface: '#1E293B', text: '#F8FAFC', textMuted: '#5EEAD4' },
  ],
  travel: [
    { name: 'Exotic Teal', primary: '#0D9488', secondary: '#14B8A6', accent: '#5EEAD4', background: '#F0FDFA', surface: '#FFFFFF', text: '#0F4A47', textMuted: '#14B8A6' },
    { name: 'Sunset Coral', primary: '#E63946', secondary: '#FF6B8A', accent: '#FFA0B4', background: '#FFF0F3', surface: '#FFFFFF', text: '#8B1A24', textMuted: '#E63946' },
    { name: 'Tropical Blue', primary: '#0369A1', secondary: '#0EA5E9', accent: '#60D0F0', background: '#F0F9FF', surface: '#FFFFFF', text: '#023E7A', textMuted: '#0284C7' },
  ],
  villaRental: [
    { name: 'Luxury Gold', primary: '#D4AF37', secondary: '#B8860B', accent: '#F5D76E', background: '#0B0B0B', surface: '#171717', text: '#FAFAF9', textMuted: '#E8C44A' },
    { name: 'Villa Teal', primary: '#0F766E', secondary: '#115E59', accent: '#5EEAD4', background: '#F0FDFA', surface: '#FFFFFF', text: '#042F2E', textMuted: '#0F766E' },
    { name: 'Premium Navy', primary: '#0F1E3C', secondary: '#C9A962', accent: '#E8D9A8', background: '#F5F7FA', surface: '#FFFFFF', text: '#0A1220', textMuted: '#4A5A72' },
  ],
  tourOperator: [
    { name: 'Adventure Orange', primary: '#F97316', secondary: '#EA580C', accent: '#FDBA74', background: '#FFF7ED', surface: '#FFFFFF', text: '#431407', textMuted: '#F97316' },
    { name: 'Explore Green', primary: '#22C55E', secondary: '#16A34A', accent: '#86EFAC', background: '#F0FDF4', surface: '#FFFFFF', text: '#14532D', textMuted: '#16A34A' },
    { name: 'Travel Blue', primary: '#0EA5E9', secondary: '#0369A1', accent: '#7DD3FC', background: '#F0F9FF', surface: '#FFFFFF', text: '#082F49', textMuted: '#0EA5E9' },
  ],

  // ============================================
  // 12. EVENTS & ENTERTAINMENT
  // ============================================
  event: [
    { name: 'Celebration Purple', primary: '#6B2D8B', secondary: '#D946EF', accent: '#F0ABFF', background: '#FDF4FF', surface: '#FFFFFF', text: '#4A1A6A', textMuted: '#8B4AAB' },
    { name: 'Party Pink', primary: '#E63946', secondary: '#FF6B8A', accent: '#FFA0B4', background: '#FFF0F3', surface: '#FFFFFF', text: '#8B1A24', textMuted: '#E63946' },
    { name: 'Festive Gold', primary: '#D4AF37', secondary: '#B8860B', accent: '#F5D76E', background: '#0B0B0B', surface: '#171717', text: '#FAFAF9', textMuted: '#E8C44A' },
  ],
  weddingPlanning: [
    { name: 'Bridal Gold', primary: '#D4AF37', secondary: '#B8860B', accent: '#F5D76E', background: '#0B0B0B', surface: '#171717', text: '#FAFAF9', textMuted: '#E8C44A' },
    { name: 'Romantic Pink', primary: '#EC4899', secondary: '#DB2777', accent: '#F9A8D4', background: '#FDF2F8', surface: '#FFFFFF', text: '#831843', textMuted: '#EC4899' },
    { name: 'Elegant Cream', primary: '#C6A969', secondary: '#A88B4A', accent: '#EAD9B6', background: '#FCFAF5', surface: '#FFFFFF', text: '#3E3425', textMuted: '#C6A969' },
  ],
  photography: [
    { name: 'Photo Black', primary: '#171717', secondary: '#262626', accent: '#737373', background: '#0B0B0B', surface: '#171717', text: '#FAFAFA', textMuted: '#737373' },
    { name: 'Lens Blue', primary: '#2563EB', secondary: '#1E40AF', accent: '#60A5FA', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
    { name: 'Moment Gold', primary: '#D4AF37', secondary: '#B8860B', accent: '#F5D76E', background: '#0B0B0B', surface: '#171717', text: '#FAFAF9', textMuted: '#E8C44A' },
  ],

  // ============================================
  // 13. FINANCE & INSURANCE
  // ============================================
  finance: [
    { name: 'Wealth Gold', primary: '#D4AF37', secondary: '#B8860B', accent: '#F5D76E', background: '#0B0B0B', surface: '#171717', text: '#FAFAF9', textMuted: '#E8C44A' },
    { name: 'Trust Blue', primary: '#0369A1', secondary: '#0EA5E9', accent: '#60D0F0', background: '#F0F9FF', surface: '#FFFFFF', text: '#023E7A', textMuted: '#0284C7' },
    { name: 'Secure Green', primary: '#166534', secondary: '#14532D', accent: '#86EFAC', background: '#F0FDF4', surface: '#FFFFFF', text: '#052E16', textMuted: '#16A34A' },
  ],
  banking: [
    { name: 'Bank Blue', primary: '#0369A1', secondary: '#0EA5E9', accent: '#60D0F0', background: '#F0F9FF', surface: '#FFFFFF', text: '#023E7A', textMuted: '#0284C7' },
    { name: 'Secure Navy', primary: '#0A2463', secondary: '#3E92CC', accent: '#66B0E0', background: '#F5F8FC', surface: '#FFFFFF', text: '#0A1A33', textMuted: '#3E5A82' },
    { name: 'Trust Green', primary: '#166534', secondary: '#14532D', accent: '#86EFAC', background: '#F0FDF4', surface: '#FFFFFF', text: '#052E16', textMuted: '#16A34A' },
  ],
  fintech: [
    { name: 'Fintech Purple', primary: '#7C3AED', secondary: '#5B21B6', accent: '#C4B5FD', background: '#F5F3FF', surface: '#FFFFFF', text: '#2E1065', textMuted: '#7C3AED' },
    { name: 'Digital Blue', primary: '#2563EB', secondary: '#1E40AF', accent: '#60A5FA', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
    { name: 'Future Green', primary: '#22C55E', secondary: '#16A34A', accent: '#86EFAC', background: '#F0FDF4', surface: '#FFFFFF', text: '#14532D', textMuted: '#16A34A' },
  ],

  // ============================================
  // 14. MANUFACTURING & INDUSTRIAL
  // ============================================
  textile: [
    { name: 'Fabric Blue', primary: '#2563EB', secondary: '#1E40AF', accent: '#60A5FA', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
    { name: 'Cotton White', primary: '#FAFAFA', secondary: '#E5E7EB', accent: '#F3F4F6', background: '#FFFFFF', surface: '#FFFFFF', text: '#111827', textMuted: '#6B7280' },
    { name: 'Thread Gray', primary: '#374151', secondary: '#6B7280', accent: '#9CA3AF', background: '#F9FAFB', surface: '#FFFFFF', text: '#1F2937', textMuted: '#4B5563' },
  ],
  packaging: [
    { name: 'Pack Brown', primary: '#78350F', secondary: '#92400E', accent: '#D6B38A', background: '#FAF7F2', surface: '#FFFFFF', text: '#451A03', textMuted: '#78350F' },
    { name: 'Clean White', primary: '#374151', secondary: '#6B7280', accent: '#9CA3AF', background: '#F9FAFB', surface: '#FFFFFF', text: '#1F2937', textMuted: '#4B5563' },
    { name: 'Modern Blue', primary: '#2563EB', secondary: '#1E40AF', accent: '#60A5FA', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
  ],
  wholesale: [
    { name: 'Bulk Blue', primary: '#2563EB', secondary: '#1E40AF', accent: '#60A5FA', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
    { name: 'Trade Gold', primary: '#D4AF37', secondary: '#B8860B', accent: '#F5D76E', background: '#0B0B0B', surface: '#171717', text: '#FAFAF9', textMuted: '#E8C44A' },
    { name: 'Professional Gray', primary: '#374151', secondary: '#6B7280', accent: '#9CA3AF', background: '#F9FAFB', surface: '#FFFFFF', text: '#1F2937', textMuted: '#4B5563' },
  ],

  // ============================================
  // 15. AGRICULTURE
  // ============================================
  farming: [
    { name: 'Farm Green', primary: '#22C55E', secondary: '#16A34A', accent: '#86EFAC', background: '#F0FDF4', surface: '#FFFFFF', text: '#14532D', textMuted: '#16A34A' },
    { name: 'Earth Brown', primary: '#78350F', secondary: '#92400E', accent: '#D6B38A', background: '#FAF7F2', surface: '#FFFFFF', text: '#451A03', textMuted: '#78350F' },
    { name: 'Harvest Gold', primary: '#D4AF37', secondary: '#B8860B', accent: '#F5D76E', background: '#0B0B0B', surface: '#171717', text: '#FAFAF9', textMuted: '#E8C44A' },
  ],
  dairyFarm: [
    { name: 'Milk White', primary: '#FAFAFA', secondary: '#E5E7EB', accent: '#F3F4F6', background: '#FFFFFF', surface: '#FFFFFF', text: '#111827', textMuted: '#6B7280' },
    { name: 'Fresh Green', primary: '#22C55E', secondary: '#16A34A', accent: '#86EFAC', background: '#F0FDF4', surface: '#FFFFFF', text: '#14532D', textMuted: '#16A34A' },
    { name: 'Farm Brown', primary: '#92400E', secondary: '#78350F', accent: '#D6B38A', background: '#FAF7F2', surface: '#FFFFFF', text: '#3B2F2F', textMuted: '#92400E' },
  ],

  // ============================================
  // 16. LOGISTICS
  // ============================================
  courier: [
    { name: 'Speed Blue', primary: '#2563EB', secondary: '#1E40AF', accent: '#60A5FA', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
    { name: 'Fast Orange', primary: '#F97316', secondary: '#EA580C', accent: '#FDBA74', background: '#FFF7ED', surface: '#FFFFFF', text: '#431407', textMuted: '#F97316' },
    { name: 'Clean Dark', primary: '#0F172A', secondary: '#1E293B', accent: '#64748B', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
  ],
  logisticsCompany: [
    { name: 'Logistics Blue', primary: '#2563EB', secondary: '#1E40AF', accent: '#60A5FA', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
    { name: 'Cargo Orange', primary: '#F97316', secondary: '#EA580C', accent: '#FDBA74', background: '#FFF7ED', surface: '#FFFFFF', text: '#431407', textMuted: '#F97316' },
    { name: 'Professional Gray', primary: '#374151', secondary: '#6B7280', accent: '#9CA3AF', background: '#F9FAFB', surface: '#FFFFFF', text: '#1F2937', textMuted: '#4B5563' },
  ],

  // ============================================
  // 17. MEDIA & CREATIVE
  // ============================================
  advertising: [
    { name: 'Ad Purple', primary: '#7C3AED', secondary: '#5B21B6', accent: '#C4B5FD', background: '#F5F3FF', surface: '#FFFFFF', text: '#2E1065', textMuted: '#7C3AED' },
    { name: 'Creative Orange', primary: '#F97316', secondary: '#EA580C', accent: '#FDBA74', background: '#FFF7ED', surface: '#FFFFFF', text: '#431407', textMuted: '#F97316' },
    { name: 'Bold Red', primary: '#DC2626', secondary: '#991B1B', accent: '#FCA5A5', background: '#FEF2F2', surface: '#FFFFFF', text: '#450A0A', textMuted: '#DC2626' },
  ],
  designStudio: [
    { name: 'Design Purple', primary: '#7C3AED', secondary: '#5B21B6', accent: '#C4B5FD', background: '#F5F3FF', surface: '#FFFFFF', text: '#2E1065', textMuted: '#7C3AED' },
    { name: 'Creative Pink', primary: '#EC4899', secondary: '#DB2777', accent: '#F9A8D4', background: '#FDF2F8', surface: '#FFFFFF', text: '#831843', textMuted: '#EC4899' },
    { name: 'Minimal White', primary: '#111827', secondary: '#374151', accent: '#9CA3AF', background: '#F9FAFB', surface: '#FFFFFF', text: '#111827', textMuted: '#6B7280' },
  ],
  animationStudio: [
    { name: 'Animate Purple', primary: '#7C3AED', secondary: '#5B21B6', accent: '#C4B5FD', background: '#F5F3FF', surface: '#FFFFFF', text: '#2E1065', textMuted: '#7C3AED' },
    { name: 'Playful Blue', primary: '#0EA5E9', secondary: '#0369A1', accent: '#7DD3FC', background: '#F0F9FF', surface: '#FFFFFF', text: '#082F49', textMuted: '#0EA5E9' },
    { name: 'Fun Pink', primary: '#EC4899', secondary: '#DB2777', accent: '#F9A8D4', background: '#FDF2F8', surface: '#FFFFFF', text: '#831843', textMuted: '#EC4899' },
  ],

  // ============================================
  // 18. COMMUNITY
  // ============================================
  nonprofit: [
    { name: 'Cause Blue', primary: '#2563EB', secondary: '#1E40AF', accent: '#60A5FA', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
    { name: 'Heart Red', primary: '#DC2626', secondary: '#991B1B', accent: '#FCA5A5', background: '#FEF2F2', surface: '#FFFFFF', text: '#450A0A', textMuted: '#DC2626' },
    { name: 'Hope Green', primary: '#22C55E', secondary: '#16A34A', accent: '#86EFAC', background: '#F0FDF4', surface: '#FFFFFF', text: '#14532D', textMuted: '#16A34A' },
  ],
  charity: [
    { name: 'Give Pink', primary: '#EC4899', secondary: '#DB2777', accent: '#F9A8D4', background: '#FDF2F8', surface: '#FFFFFF', text: '#831843', textMuted: '#EC4899' },
    { name: 'Support Blue', primary: '#2563EB', secondary: '#1E40AF', accent: '#60A5FA', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
    { name: 'Care Green', primary: '#22C55E', secondary: '#16A34A', accent: '#86EFAC', background: '#F0FDF4', surface: '#FFFFFF', text: '#14532D', textMuted: '#16A34A' },
  ],

  // ============================================
  // 19. MISCELLANEOUS
  // ============================================
  franchise: [
    { name: 'Franchise Blue', primary: '#2563EB', secondary: '#1E40AF', accent: '#60A5FA', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
    { name: 'Brand Gold', primary: '#D4AF37', secondary: '#B8860B', accent: '#F5D76E', background: '#0B0B0B', surface: '#171717', text: '#FAFAF9', textMuted: '#E8C44A' },
    { name: 'Growth Green', primary: '#22C55E', secondary: '#16A34A', accent: '#86EFAC', background: '#F0FDF4', surface: '#FFFFFF', text: '#14532D', textMuted: '#16A34A' },
  ],
  sustainability: [
    { name: 'Eco Green', primary: '#166534', secondary: '#14532D', accent: '#86EFAC', background: '#F0FDF4', surface: '#FFFFFF', text: '#052E16', textMuted: '#16A34A' },
    { name: 'Earth Brown', primary: '#78350F', secondary: '#92400E', accent: '#D6B38A', background: '#FAF7F2', surface: '#FFFFFF', text: '#451A03', textMuted: '#78350F' },
    { name: 'Clean Blue', primary: '#0077B6', secondary: '#00B4D8', accent: '#66DDFF', background: '#F0F8FF', surface: '#FFFFFF', text: '#004466', textMuted: '#0099CC' },
  ],

  // ============================================
  // 20. EXISTING CATEGORIES (preserved)
  // ============================================
  ecommerce: [
    { name: 'Modern Blue', primary: '#2563EB', secondary: '#1E40AF', accent: '#60A5FA', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
    { name: 'Startup Indigo', primary: '#4F46E5', secondary: '#312E81', accent: '#A5B4FC', background: '#EEF2FF', surface: '#FFFFFF', text: '#1F2937', textMuted: '#6B7280' },
    { name: 'Mint Clean', primary: '#10B981', secondary: '#047857', accent: '#6EE7B7', background: '#ECFDF5', surface: '#FFFFFF', text: '#064E3B', textMuted: '#10B981' },
    { name: 'Coral Friendly', primary: '#F97316', secondary: '#EA580C', accent: '#FDBA74', background: '#FFF7ED', surface: '#FFFFFF', text: '#431407', textMuted: '#F97316' },
  ],
  portfolio: [
    { name: 'Elegant Navy Gold', primary: '#0F172A', secondary: '#1E293B', accent: '#D4AF37', background: '#F8F5EF', surface: '#FFFFFF', text: '#111827', textMuted: '#6B7280' },
    { name: 'Luxury Black Beige', primary: '#111111', secondary: '#2C2C2C', accent: '#C8A97E', background: '#F7F3EE', surface: '#FFFFFF', text: '#171717', textMuted: '#8B7355' },
    { name: 'Dark Gold Premium', primary: '#D4AF37', secondary: '#B8860B', accent: '#F5D76E', background: '#0B0B0B', surface: '#171717', text: '#FAFAF9', textMuted: '#E8C44A' },
    { name: 'Purple Luxury', primary: '#7C3AED', secondary: '#5B21B6', accent: '#C4B5FD', background: '#F5F3FF', surface: '#FFFFFF', text: '#2E1065', textMuted: '#7C3AED' },
  ],
  architect: [
    { name: 'Earthy Brown', primary: '#92400E', secondary: '#78350F', accent: '#D6B38A', background: '#FAF7F2', surface: '#FFFFFF', text: '#3B2F2F', textMuted: '#92400E' },
    { name: 'Coffee Cream', primary: '#6F4E37', secondary: '#4B3621', accent: '#D9C2A7', background: '#F8F3EE', surface: '#FFFDF9', text: '#2A2118', textMuted: '#6F4E37' },
    { name: 'Ivory Olive', primary: '#556B2F', secondary: '#3F4F1F', accent: '#B7C99A', background: '#FAFAF5', surface: '#FFFFFC', text: '#2C2F24', textMuted: '#556B2F' },
    { name: 'Terracotta Clay', primary: '#C75B39', secondary: '#9E3D2A', accent: '#E7A98F', background: '#FDF5F1', surface: '#FFFFFF', text: '#4A1F17', textMuted: '#C75B39' },
  ],
  agency: [
    { name: 'Modern Blue', primary: '#2563EB', secondary: '#1E40AF', accent: '#60A5FA', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
    { name: 'Startup Indigo', primary: '#4F46E5', secondary: '#312E81', accent: '#A5B4FC', background: '#EEF2FF', surface: '#FFFFFF', text: '#1F2937', textMuted: '#6B7280' },
    { name: 'Purple Luxury', primary: '#7C3AED', secondary: '#5B21B6', accent: '#C4B5FD', background: '#F5F3FF', surface: '#FFFFFF', text: '#2E1065', textMuted: '#7C3AED' },
    { name: 'Elegant Navy Gold', primary: '#0F172A', secondary: '#1E293B', accent: '#D4AF37', background: '#F8F5EF', surface: '#FFFFFF', text: '#111827', textMuted: '#6B7280' },
  ],
  beauty: [
    { name: 'Rose Boutique', primary: '#E11D48', secondary: '#9F1239', accent: '#F9A8D4', background: '#FFF1F2', surface: '#FFFFFF', text: '#500724', textMuted: '#E11D48' },
    { name: 'Peach Minimal', primary: '#FB923C', secondary: '#F97316', accent: '#FED7AA', background: '#FFF7ED', surface: '#FFFFFF', text: '#431407', textMuted: '#FB923C' },
    { name: 'Soft Pastel Pink', primary: '#F472B6', secondary: '#EC4899', accent: '#FBCFE8', background: '#FDF2F8', surface: '#FFFFFF', text: '#831843', textMuted: '#F472B6' },
    { name: 'Pastel Lilac', primary: '#C084FC', secondary: '#A855F7', accent: '#E9D5FF', background: '#FAF5FF', surface: '#FFFFFF', text: '#581C87', textMuted: '#C084FC' },
  ],
  default: [
    { name: 'Modern Blue', primary: '#2563EB', secondary: '#1E40AF', accent: '#60A5FA', background: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', textMuted: '#64748B' },
    { name: 'Elegant Navy Gold', primary: '#0F172A', secondary: '#1E293B', accent: '#D4AF37', background: '#F8F5EF', surface: '#FFFFFF', text: '#111827', textMuted: '#6B7280' },
    { name: 'Startup Indigo', primary: '#4F46E5', secondary: '#312E81', accent: '#A5B4FC', background: '#EEF2FF', surface: '#FFFFFF', text: '#1F2937', textMuted: '#6B7280' },
    { name: 'Mint Clean', primary: '#10B981', secondary: '#047857', accent: '#6EE7B7', background: '#ECFDF5', surface: '#FFFFFF', text: '#064E3B', textMuted: '#10B981' },
  ],
};

module.exports = { BUSINESS_CATEGORY_PALETTES };