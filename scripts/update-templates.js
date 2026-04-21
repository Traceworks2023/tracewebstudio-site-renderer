import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TEMPLATES_DIR = path.join(__dirname, '..', 'src', 'templates');

// Content data for each family
const familyContent = {
  'beauty': {
    heroTitle: 'Radiance Starts Here',
    heroSubtitle: 'Clean beauty essentials for your daily ritual. Handcrafted with love, backed by science.',
    heroImage: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1920',
    categories: [
      { name: 'Skincare', image: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=600', itemCount: 48 },
      { name: 'Makeup', image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600', itemCount: 72 },
      { name: 'Haircare', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600', itemCount: 36 },
      { name: 'Fragrance', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=600', itemCount: 24 }
    ],
    products: [
      { name: 'Hydrating Serum', price: 48, originalPrice: 58, badge: 'Bestseller', rating: 5, reviews: 234, image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400' },
      { name: 'Velvet Matte Lipstick', price: 32, badge: 'New', rating: 4, reviews: 89, image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400' },
      { name: 'Rose Face Oil', price: 56, rating: 5, reviews: 167, image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400' },
      { name: 'Volume Mascara', price: 28, badge: '-20%', rating: 4, reviews: 312, image: 'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400' }
    ],
    testimonials: [
      { name: 'Sarah Mitchell', role: 'Beauty Blogger', company: 'Glow Daily', quote: 'My skin has never looked better. The hydrating serum is a total game changer!', rating: 5, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' },
      { name: 'Emma Laurent', role: 'Makeup Artist', company: 'Paris Beauty', quote: 'Finally found clean beauty products that actually work. Obsessed with the rose face oil.', rating: 5, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100' },
      { name: 'Jessica Kim', role: 'Fashion Editor', company: 'Vogue Korea', quote: 'The velvet matte lipstick collection is absolutely stunning. Long-lasting and comfortable.', rating: 5, image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100' }
    ],
    splitTitle: 'Our Philosophy',
    splitContent: 'We believe beauty should be effortless, not overwhelming. Every product is crafted with natural ingredients that nourish your skin and make you feel confident.',
    splitImage: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800',
    ctaTitle: 'Discover Your Routine',
    ctaText: 'Take the Quiz',
    ctaUrl: '/quiz',
    newsletterTitle: 'Join the Glow List',
    newsletterSubtitle: 'Get 15% off your first order and exclusive access to new launches.'
  },
  'fashion': {
    heroTitle: 'Define Your Style',
    heroSubtitle: 'Curated collections for the modern wardrobe. Quality pieces that transcend seasons.',
    heroImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920',
    categories: [
      { name: 'Women', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600', itemCount: 156 },
      { name: 'Men', image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600', itemCount: 124 },
      { name: 'Accessories', image: 'https://images.unsplash.com/photo-1611085583191-a1b947a8c3e6?w=600', itemCount: 89 },
      { name: 'New Arrivals', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600', itemCount: 78 }
    ],
    products: [
      { name: 'Cashmere Overcoat', price: 458, originalPrice: 580, badge: 'Sale', rating: 5, reviews: 67, image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400' },
      { name: 'Silk Midi Dress', price: 295, badge: 'New', rating: 4, reviews: 34, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400' },
      { name: 'Leather Chelsea Boots', price: 320, rating: 5, reviews: 128, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400' },
      { name: 'Structured Blazer', price: 275, badge: '-15%', rating: 4, reviews: 89, image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400' }
    ],
    testimonials: [
      { name: 'Alexandra Chen', role: 'Fashion Director', company: 'Elle Magazine', quote: 'Finally a brand that understands modern elegance. The quality is exceptional.', rating: 5, image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100' },
      { name: 'Marcus Webb', role: 'Style Editor', company: 'GQ', quote: 'My go-to for timeless pieces that never go out of style. Worth every penny.', rating: 5, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
      { name: 'Olivia Park', role: 'Influencer', company: '@oliviastyle', quote: 'The cashmere overcoat is hands down the best investment I have made this year.', rating: 5, image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100' }
    ],
    splitTitle: 'Our Heritage',
    splitContent: 'Three generations of craftsmanship. We believe in slow fashion - pieces that last, not trends that fade.',
    splitImage: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800',
    ctaTitle: 'Explore the Collection',
    ctaText: 'Shop Now',
    ctaUrl: '/collection',
    newsletterTitle: 'Be First to Know',
    newsletterSubtitle: 'Subscribe for exclusive early access and 10% off your first order.'
  },
  'restaurant-cafe': {
    heroTitle: 'Taste the Difference',
    heroSubtitle: 'Farm-to-table dining where every dish tells a story. Seasonal ingredients, timeless flavors.',
    heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920',
    categories: [
      { name: 'Starters', image: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?w=600', itemCount: 12 },
      { name: 'Main Courses', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600', itemCount: 18 },
      { name: 'Desserts', image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600', itemCount: 10 },
      { name: 'Wine & Drinks', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600', itemCount: 24 }
    ],
    products: [
      { name: 'Truffle Risotto', price: 38, badge: 'Chef Special', rating: 5, reviews: 234, image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400' },
      { name: 'Grilled Sea Bass', price: 42, rating: 5, reviews: 189, image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400' },
      { name: 'Artisan Burger', price: 28, badge: 'Best Seller', rating: 4, reviews: 456, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400' },
      { name: 'Chocolate Fondant', price: 16, rating: 5, reviews: 167, image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400' }
    ],
    testimonials: [
      { name: 'Michael Torres', role: 'Food Critic', company: 'NY Times', quote: 'The best Italian fine dining experience outside of Rome. Extraordinary.', rating: 5, image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100' },
      { name: 'Sophie Martin', role: 'Blogger', company: 'Foodie Travels', quote: 'The truffle risotto is to die for. Every dish is a work of art.', rating: 5, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100' },
      { name: 'James Wilson', role: 'Regular', company: 'Local Guide', quote: 'Our go-to for special occasions. Never disappoints. The service is impeccable.', rating: 5, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' }
    ],
    splitTitle: 'Our Story',
    splitContent: 'Founded in 1987 by Chef Marco Rossi, we have been serving authentic Italian cuisine made with love and the finest ingredients.',
    splitImage: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
    ctaTitle: 'Reserve Your Table',
    ctaText: 'Book Now',
    ctaUrl: '/reservations',
    newsletterTitle: 'Join Our Table',
    newsletterSubtitle: 'Get exclusive offers and updates on seasonal menus.'
  },
  'photographer': {
    heroTitle: 'Capturing Moments',
    heroSubtitle: 'Wedding & portrait photography that tells your unique story with artistry and heart.',
    heroImage: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1920',
    categories: [
      { name: 'Weddings', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600', itemCount: 45 },
      { name: 'Portraits', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600', itemCount: 89 },
      { name: 'Commercial', image: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?w=600', itemCount: 34 },
      { name: 'Events', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600', itemCount: 56 }
    ],
    products: [
      { name: 'Wedding Package', price: 3500, originalPrice: 4200, badge: 'Popular', rating: 5, reviews: 89, image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400' },
      { name: 'Portrait Session', price: 450, badge: 'New', rating: 5, reviews: 134, image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400' },
      { name: 'Event Coverage', price: 1200, rating: 5, reviews: 67, image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400' },
      { name: 'Commercial Shoot', price: 2500, badge: 'Custom', rating: 5, reviews: 45, image: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?w=400' }
    ],
    testimonials: [
      { name: 'Rachel & David', role: 'Newlyweds', company: '', quote: 'They captured our wedding day perfectly. Every photo tells our story.', rating: 5, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' },
      { name: 'Jennifer Adams', role: 'CEO', company: 'Adams Media', quote: 'Professional, creative, and incredibly talented. Our brand has never looked better.', rating: 5, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100' },
      { name: 'Marcus Thompson', role: 'Actor', company: '', quote: 'Best portrait session ever. They made me feel comfortable and captured my essence.', rating: 5, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' }
    ],
    splitTitle: 'About My Approach',
    splitContent: 'I believe every photograph should evoke emotion and tell a story. With 15 years of experience, I capture authentic moments that last a lifetime.',
    splitImage: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800',
    ctaTitle: 'Let\'s Create Together',
    ctaText: 'Book a Session',
    ctaUrl: '/booking',
    newsletterTitle: 'Behind the Lens',
    newsletterSubtitle: 'Get photography tips and exclusive offers.'
  },
  'jewelry': {
    heroTitle: 'Timeless Elegance',
    heroSubtitle: 'Handcrafted jewelry pieces that celebrate life\'s precious moments. Each design tells a unique story.',
    heroImage: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920',
    categories: [
      { name: 'Rings', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600', itemCount: 45 },
      { name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600', itemCount: 38 },
      { name: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600', itemCount: 52 },
      { name: 'Bracelets', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600', itemCount: 29 }
    ],
    products: [
      { name: 'Diamond Solitaire Ring', price: 4500, originalPrice: 5200, badge: 'Bestseller', rating: 5, reviews: 67, image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400' },
      { name: 'Pearl Pendant Necklace', price: 890, badge: 'New', rating: 5, reviews: 89, image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400' },
      { name: 'Gold Hoop Earrings', price: 340, rating: 5, reviews: 156, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400' },
      { name: 'Tennis Bracelet', price: 2100, badge: '-15%', rating: 5, reviews: 43, image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400' }
    ],
    testimonials: [
      { name: 'Victoria Hughes', role: 'Jewelry Collector', company: '', quote: 'Exceptional quality and craftsmanship. My go-to for special occasion pieces.', rating: 5, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' },
      { name: 'Catherine Blake', role: 'Bride-to-be', company: '', quote: 'The diamond ring exceeded all expectations. Pure magic.', rating: 5, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100' },
      { name: 'Natalie Cooper', role: 'Fashion Blogger', company: 'Style Daily', quote: 'Stunning pieces that elevate every outfit. Love this brand!', rating: 5, image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100' }
    ],
    splitTitle: 'Our Craft',
    splitContent: 'Each piece is handcrafted by master jewelers using ethically sourced stones and recycled metals.',
    splitImage: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800',
    ctaTitle: 'Find Your Perfect Piece',
    ctaText: 'Shop Collection',
    ctaUrl: '/collection',
    newsletterTitle: 'Join the Inner Circle',
    newsletterSubtitle: 'First access to new collections and exclusive subscriber rewards.'
  },
  'gym-fitness': {
    heroTitle: 'Transform Your Limits',
    heroSubtitle: 'State-of-the-art facilities and expert trainers to help you achieve your strongest self.',
    heroImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920',
    categories: [
      { name: 'Personal Training', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600', itemCount: 12 },
      { name: 'Group Classes', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600', itemCount: 24 },
      { name: 'Nutrition Plans', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600', itemCount: 8 },
      { name: 'Recovery Zone', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600', itemCount: 6 }
    ],
    products: [
      { name: 'Annual Membership', price: 899, originalPrice: 1200, badge: 'Best Value', rating: 5, reviews: 456, image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400' },
      { name: 'PT Session Pack', price: 350, badge: 'Popular', rating: 5, reviews: 234, image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400' },
      { name: 'Nutrition Consultation', price: 149, rating: 5, reviews: 189, image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400' },
      { name: 'Group Class Pass', price: 89, badge: '-20%', rating: 4, reviews: 567, image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400' }
    ],
    testimonials: [
      { name: 'Mike Johnson', role: 'Member since 2020', company: '', quote: 'Lost 40 pounds and gained confidence. Best decision I ever made.', rating: 5, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
      { name: 'Sarah Williams', role: 'Marathon Runner', company: '', quote: 'The trainers here helped me qualify for Boston. Incredible coaching.', rating: 5, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' },
      { name: 'Chris Martinez', role: 'Fitness Influencer', company: '@chrisfitness', quote: 'Best gym in the city. Equipment is top-notch and community is amazing.', rating: 5, image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100' }
    ],
    splitTitle: 'Why Choose Us',
    splitContent: 'We combine cutting-edge equipment with personalized coaching to help you reach your goals faster.',
    splitImage: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800',
    ctaTitle: 'Start Your Journey',
    ctaText: 'Get Guest Pass',
    ctaUrl: '/trial',
    newsletterTitle: 'Fit Tips & Offers',
    newsletterSubtitle: 'Weekly training tips and exclusive member-only deals.'
  },
  'hotel-resort': {
    heroTitle: 'Your Sanctuary Awaits',
    heroSubtitle: 'Luxury accommodations with breathtaking views. Experience hospitality at its finest.',
    heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920',
    categories: [
      { name: 'Deluxe Rooms', image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600', itemCount: 45 },
      { name: 'Suites', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600', itemCount: 28 },
      { name: 'Villas', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600', itemCount: 12 },
      { name: 'Experiences', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600', itemCount: 36 }
    ],
    products: [
      { name: 'Ocean View Suite', price: 450, originalPrice: 580, badge: 'Most Popular', rating: 5, reviews: 234, image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400' },
      { name: 'Beach Villa', price: 890, badge: 'New', rating: 5, reviews: 89, image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400' },
      { name: 'Spa Weekend', price: 599, rating: 5, reviews: 167, image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400' },
      { name: 'Dining Experience', price: 195, badge: '-10%', rating: 5, reviews: 312, image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400' }
    ],
    testimonials: [
      { name: 'Jennifer & Mark', role: 'Honeymooners', company: '', quote: 'The most romantic getaway. Everything was absolutely perfect.', rating: 5, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' },
      { name: 'Robert Chen', role: 'Business Traveler', company: 'Tech Corp', quote: 'My home away from home. Impeccable service every time.', rating: 5, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
      { name: 'Emma Thompson', role: 'Travel Blogger', company: 'Wanderlust', quote: 'The beach villa was stunning. Paradise found!', rating: 5, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100' }
    ],
    splitTitle: 'Our Promise',
    splitContent: 'For over 50 years, we have been creating unforgettable experiences. Your comfort is our passion.',
    splitImage: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
    ctaTitle: 'Book Your Escape',
    ctaText: 'Reserve Now',
    ctaUrl: '/booking',
    newsletterTitle: 'Exclusive Offers',
    newsletterSubtitle: 'Subscribe for special rates and upgrades.'
  },
  'real-estate': {
    heroTitle: 'Find Your Dream Home',
    heroSubtitle: 'Expert guidance through your real estate journey. From first home to investment property.',
    heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920',
    categories: [
      { name: 'Houses', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600', itemCount: 89 },
      { name: 'Apartments', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600', itemCount: 124 },
      { name: 'Condos', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600', itemCount: 67 },
      { name: 'Commercial', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600', itemCount: 34 }
    ],
    products: [
      { name: 'Downtown Penthouse', price: 2500000, badge: 'Featured', rating: 5, reviews: 23, image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400' },
      { name: 'Family Home', price: 850000, originalPrice: 920000, badge: 'Price Reduced', rating: 5, reviews: 45, image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400' },
      { name: 'Waterfront Villa', price: 1800000, rating: 5, reviews: 34, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400' },
      { name: 'Investment Property', price: 450000, badge: 'Great Deal', rating: 4, reviews: 67, image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400' }
    ],
    testimonials: [
      { name: 'The Andersons', role: 'Homeowners', company: '', quote: 'Found our dream home in just 3 weeks. Incredible service!', rating: 5, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
      { name: 'Linda Martinez', role: 'Investor', company: '', quote: 'My third property with this team. They really understand the market.', rating: 5, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' },
      { name: 'David Park', role: 'First-time Buyer', company: '', quote: 'Made the overwhelming process easy. Couldn\'t have done it without them.', rating: 5, image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100' }
    ],
    splitTitle: 'Why Work With Us',
    splitContent: 'With 25 years of experience and a deep understanding of local markets, we make buying and selling seamless.',
    splitImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
    ctaTitle: 'Let\'s Find Your Home',
    ctaText: 'Schedule Consultation',
    ctaUrl: '/contact',
    newsletterTitle: 'New Listings First',
    newsletterSubtitle: 'Be the first to see new properties on the market.'
  },
  'travel-agency': {
    heroTitle: 'Adventure Awaits',
    heroSubtitle: 'Curated travel experiences that take you beyond the ordinary. Your journey starts here.',
    heroImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920',
    categories: [
      { name: 'Beach Destinations', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600', itemCount: 45 },
      { name: 'Mountain Treks', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600', itemCount: 32 },
      { name: 'City Breaks', image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600', itemCount: 67 },
      { name: 'Cultural Tours', image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=600', itemCount: 54 }
    ],
    products: [
      { name: 'Maldives Paradise', price: 3500, originalPrice: 4200, badge: 'Best Seller', rating: 5, reviews: 189, image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400' },
      { name: 'Swiss Alps Adventure', price: 2800, badge: 'New', rating: 5, reviews: 134, image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=400' },
      { name: 'Tokyo Discovery', price: 2200, rating: 5, reviews: 256, image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400' },
      { name: 'Safari Experience', price: 4100, badge: '-15%', rating: 5, reviews: 178, image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400' }
    ],
    testimonials: [
      { name: 'Amanda & Tom', role: 'Honeymooners', company: '', quote: 'The Maldives trip was magical. Every detail was perfectly arranged.', rating: 5, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' },
      { name: 'James Wilson', role: 'Solo Traveler', company: '', quote: 'The Tokyo tour was incredible. Best travel experience of my life.', rating: 5, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
      { name: 'Sarah Johnson', role: 'Adventure Seeker', company: '', quote: 'The Swiss Alps trek exceeded all expectations. Unforgettable!', rating: 5, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100' }
    ],
    splitTitle: 'Our Expertise',
    splitContent: 'We craft personalized travel experiences with insider knowledge and exclusive access to extraordinary places.',
    splitImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800',
    ctaTitle: 'Plan Your Escape',
    ctaText: 'Get a Quote',
    ctaUrl: '/contact',
    newsletterTitle: 'Travel Inspiration',
    newsletterSubtitle: 'Exclusive deals and travel tips delivered to your inbox.'
  },
  'pet-store': {
    heroTitle: 'Happy Pets, Happy Life',
    heroSubtitle: 'Premium pet supplies and nutrition for your furry family members. Because they deserve the best.',
    heroImage: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1920',
    categories: [
      { name: 'Dog Supplies', image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600', itemCount: 156 },
      { name: 'Cat Supplies', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600', itemCount: 134 },
      { name: 'Pet Food', image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=600', itemCount: 89 },
      { name: 'Accessories', image: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=600', itemCount: 78 }
    ],
    products: [
      { name: 'Premium Dog Food', price: 68, originalPrice: 85, badge: 'Bestseller', rating: 5, reviews: 456, image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=400' },
      { name: 'Orthopedic Pet Bed', price: 149, badge: 'New', rating: 5, reviews: 234, image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400' },
      { name: 'Interactive Toy Set', price: 45, rating: 4, reviews: 567, image: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=400' },
      { name: 'Self-Cleaning Litter', price: 129, badge: '-20%', rating: 5, reviews: 345, image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400' }
    ],
    testimonials: [
      { name: 'Lisa Chen', role: 'Dog Mom', company: '', quote: 'My golden retriever loves this food! His coat has never looked better.', rating: 5, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' },
      { name: 'Tom Harris', role: 'Cat Dad', company: '', quote: 'Finally a litter box that actually works! Game changer.', rating: 5, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
      { name: 'Rachel Green', role: 'Pet Blogger', company: 'Paws & Claws', quote: 'My go-to store for everything pet. Great prices and fast shipping!', rating: 5, image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100' }
    ],
    splitTitle: 'Our Promise',
    splitContent: 'We source only the best products for your pets. Every item is vetted for quality and safety.',
    splitImage: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800',
    ctaTitle: 'Spoil Your Pets',
    ctaText: 'Shop Now',
    ctaUrl: '/shop',
    newsletterTitle: 'Pet Parenting Tips',
    newsletterSubtitle: 'Expert advice and exclusive offers for pet parents.'
  }
};

// Default content for families not in the list
const defaultContent = {
  heroTitle: 'Welcome',
  heroSubtitle: 'Premium quality and exceptional service.',
  heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920',
  categories: [
    { name: 'Category 1', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600', itemCount: 24 },
    { name: 'Category 2', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600', itemCount: 36 },
    { name: 'Category 3', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600', itemCount: 18 },
    { name: 'Category 4', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600', itemCount: 42 }
  ],
  products: [
    { name: 'Premium Product 1', price: 99, rating: 5, reviews: 123, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400' },
    { name: 'Premium Product 2', price: 149, badge: 'New', rating: 5, reviews: 89, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400' },
    { name: 'Premium Product 3', price: 79, rating: 4, reviews: 234, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400' },
    { name: 'Premium Product 4', price: 199, badge: 'Sale', rating: 5, reviews: 156, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400' }
  ],
  testimonials: [
    { name: 'John Smith', role: 'Customer', company: '', quote: 'Exceptional quality and service. Highly recommend!', rating: 5, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
    { name: 'Jane Doe', role: 'Client', company: '', quote: 'Amazing experience from start to finish. Will be back!', rating: 5, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' },
    { name: 'Alex Johnson', role: 'Member', company: '', quote: 'Best in the business. Couldnt be happier.', rating: 5, image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100' }
  ],
  splitTitle: 'About Us',
  splitContent: 'We are dedicated to providing the best products and services to our customers.',
  splitImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
  ctaTitle: 'Get Started',
  ctaText: 'Contact Us',
  ctaUrl: '/contact',
  newsletterTitle: 'Stay Updated',
  newsletterSubtitle: 'Subscribe for the latest news and exclusive offers.'
};

function getContentForFamily(family) {
  // Try exact match first
  if (familyContent[family]) {
    return familyContent[family];
  }

  // Try partial match (e.g., 'photographer' matches 'photographer' in content)
  for (const [key, content] of Object.entries(familyContent)) {
    if (family.includes(key) || key.includes(family)) {
      return content;
    }
  }

  return defaultContent;
}

function updateTemplateConfig(config, family) {
  const content = getContentForFamily(family);

  // Find home page
  const homePage = config.pages.find(p => p.id === 'home');
  if (!homePage) return config;

  // Update each section with content
  homePage.sections.forEach(section => {
    switch (section.type) {
      case 'hero-editorial':
      case 'hero-cinematic':
        section.content = {
          ...section.content,
          title: content.heroTitle,
          subtitle: content.heroSubtitle,
          image: content.heroImage
        };
        break;
      case 'category-grid':
        section.content = {
          ...section.content,
          title: section.content.title || 'Shop by Category',
          categories: content.categories.map((c, i) => ({
            id: String(i + 1),
            name: c.name,
            image: c.image,
            itemCount: c.itemCount,
            link: `/category/${c.name.toLowerCase().replace(/\s+/g, '-')}`
          }))
        };
        break;
      case 'product-carousel':
        section.content = {
          ...section.content,
          title: section.content.title || 'Featured',
          products: content.products.map((p, i) => ({
            id: String(i + 1),
            ...p
          }))
        };
        break;
      case 'split-media':
        section.content = {
          ...section.content,
          title: content.splitTitle,
          content: content.splitContent,
          image: content.splitImage
        };
        break;
      case 'testimonials-slider':
        section.content = {
          ...section.content,
          title: section.content.title || 'What They Say',
          testimonials: content.testimonials
        };
        break;
      case 'cta-banner':
        section.content = {
          ...section.content,
          title: content.ctaTitle,
          ctaText: content.ctaText,
          ctaUrl: content.ctaUrl
        };
        break;
      case 'newsletter':
        section.content = {
          ...section.content,
          title: content.newsletterTitle,
          subtitle: content.newsletterSubtitle
        };
        break;
    }
  });

  return config;
}

function processTemplates() {
  const dirs = fs.readdirSync(TEMPLATES_DIR);
  let count = 0;
  let errors = 0;

  dirs.forEach(dir => {
    const configPath = path.join(TEMPLATES_DIR, dir, 'config.json');

    // Skip if not a directory or no config
    const dirPath = path.join(TEMPLATES_DIR, dir);
    if (!fs.statSync(dirPath).isDirectory()) return;
    if (!fs.existsSync(configPath)) return;

    try {
      const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

      // Extract family name (remove tier and style suffix)
      const family = dir.replace(/-(starter|growth|advanced|signature)-.*$/, '');

      // Update the config
      const updatedConfig = updateTemplateConfig(config, family);

      // Write back
      fs.writeFileSync(configPath, JSON.stringify(updatedConfig, null, 2));

      console.log(`Updated: ${dir} (family: ${family})`);
      count++;
    } catch (err) {
      console.error(`Error processing ${dir}:`, err.message);
      errors++;
    }
  });

  console.log(`\nDone! Updated ${count} templates with ${errors} errors.`);
}

processTemplates();