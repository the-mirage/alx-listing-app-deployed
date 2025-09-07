import { PropertyProps } from '@/interfaces';

// Example API base URL
export const API_BASE_URL = 'https://api.example.com';

// UI-related constants
export const BUTTON_TEXT = {
  BOOK_NOW: 'Book Now',
  VIEW_DETAILS: 'View Details',
};

//images
export const IMAGES = {
  hero: '/assets/images/hero-image.png',
};


export const PROPERTYLISTINGSAMPLE: PropertyProps [] = [
  {
    id: 1,
    name: "Villa Arrecife Beach House",
    description: "Experience luxury beachfront living in this stunning villa. Features include a private pool, direct beach access, and modern amenities throughout. Perfect for families or groups seeking a premium coastal retreat.",
    address: {
      city: "Sidemne, Bali",
      country: "Indonesia"
    },
    rating: 4.89,
    category: ["Top Villa", "Self Check-in", "Free Schedule"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "/assets/images/image 2.png",
    discount: ""
  },
  {
    id: 2,
    name: "Entire cabin",
    description: "Cozy mountain cabin surrounded by nature. This rustic yet comfortable retreat offers panoramic views, a fireplace, and complete privacy. Ideal for those seeking a peaceful mountain getaway.",
    address: {
      city: "Nova Friburgo",
      country: "Brazil"
    },
    rating: 4.70,
    category: ["Top Villa", "Self Check-in", "Free Schedule"],
    price: 1800,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    image: "/assets/images/image 3.png",
    discount: "30"
  },
  {
    id: 3,
    name: "Villa Lamp",
    description: "Modern Mediterranean villa with stunning architectural design. Features include a private garden, contemporary furnishings, and a serene atmosphere. Perfect for design enthusiasts and luxury seekers.",
    address: {
      city: "Benahavis",
      country: "Spain"
    },
    rating: 4.92,
    category: ["Top Villa", "Self Check-in", "Free Schedule"],
    price: 1500,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3"
    },
    image: "/assets/images/image 4.png",
    discount: ""
  },
  {
    id: 4,
    name: "Earthen home",
    description: "Unique eco-friendly home built with sustainable materials. This property offers a one-of-a-kind stay with natural cooling, organic gardens, and authentic local architecture. Perfect for environmentally conscious travelers.",
    address: {
      city: "Santa Maria",
      country: "Colombia"
    },
    rating: 4.85,
    category: ["Top Villa", "Self Check-in", "Free Schedule"],
    price: 4500,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4"
    },
    image: "/assets/images/image 5.png",
    discount: "15"
  },
  {
    id: 5,
    name: "Private Room",
    description: "Elegant private suite in a traditional Brazilian home. Featuring high ceilings, colonial architecture, and access to a shared garden. Perfect for solo travelers or couples.",
    address: {
      city: "Moeda",
      country: "Brazil"
    },
    rating: 4.77,
    category: ["Top Villa", "Self Check-in", "Free Schedule"],
    price: 2800,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "4-6"
    },
    image: "/assets/images/image 6.png",
    discount: "20"
  },
  {
    id: 6,
    name: "Gokce Gemile Estate",
    description: "Luxurious Turkish estate with breathtaking Mediterranean views. This expansive property features traditional architecture, multiple terraces, and a large pool. Ideal for large groups or special events.",
    address: {
      city: "Kayaköy",
      country: "Turkey"
    },
    rating: 4.95,
    category: ["Top Villa", "Self Check-in", "Free Schedule"],
    price: 5000,
    offers: {
      bed: "5",
      shower: "4",
      occupants: "8-10"
    },
    image: "/assets/images/image 7.png",
    discount: ""
  },
  {
    id: 7,
    name: "Luxury 1000 sqm Villa...",
    description: "Spacious Moroccan villa combining traditional design with modern luxury. Features include a courtyard pool, hammam, and roof terrace with Atlas Mountains views. Perfect for luxury travelers seeking authentic Moroccan style.",
    address: {
      city: "Marrakech",
      country: "Morocco"
    },
    rating: 4.65,
    category: ["Top Villa", "Self Check-in", "Free Schedule"],
    price: 2300,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "/assets/images/image 8.png",
    discount: "10"
  },
  {
    id: 8,
    name: "Palais Hassoun Marrakech",
    description: "Historic palace turned luxury accommodation in the heart of Marrakech. Featuring intricate Moroccan craftsmanship, multiple courtyards, and traditional furnishings. An authentic royal experience.",
    address: {
      city: "Marrakech",
      country: "Morocco"
    },
    rating: 4.80,
    category: ["Top Villa", "Self Check-in", "Free Schedule"],
    price: 2750,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "5-6"
    },
    image: "/assets/images/image 9.png",
    discount: "25"
  },
  {
    id: 9,
    name: "Villa l 'Oui d' Or",
    description: "Charming villa combining French and Moroccan influences. Features include a private pool, garden, and elegant interiors. Perfect for those seeking a romantic getaway.",
    address: {
      city: "Marrakech",
      country: "Morocco"
    },
    rating: 4.60,
    category: ["Top Villa", "Book Now Pay Later", "Free Schedule"],
    price: 2000,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3"
    },
    image: "/assets/images/image 10.png",
    discount: ""
  },
  {
    id: 10,
    name: "Designer villa, pool not ...",
    description: "Contemporary designer villa showcasing modern Moroccan architecture. Featuring stylish interiors, outdoor living spaces, and artistic touches throughout. Ideal for design enthusiasts.",
    address: {
      city: "Marrakech",
      country: "Morocco"
    },
    rating: 4.72,
    category: ["Top Villa", "Self Check-in", "Free Schedule"],
    price: 2600,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    image: "/assets/images/image 11.png",
    discount: "40"
  },
  {
    id: 11,
    name: "Royal Zephyr - Marrakech",
    description: "Ultra-luxury villa offering the ultimate Moroccan experience. Features include a grand pool, private spa, and butler service. Perfect for those seeking the finest accommodations in Marrakech.",
    address: {
      city: "Marrakech",
      country: "Morocco"
    },
    rating: 4.93,
    category: ["Top Villa", "Self Check-in", "Free Schedule"],
    price: 6000,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8"
    },
    image: "/assets/images/image 12.png",
    discount: "50"
  },
  {
    id: 12,
    name: "Rïad Mayo & Bungalows",
    description: "Traditional riad with modern bungalows in a peaceful setting. Combining authentic Moroccan architecture with contemporary comfort. Great for experiencing both traditional and modern Morocco.",
    address: {
      city: "Sidi Abdallah Ghiat",
      country: "Morocco"
    },
    rating: 4.83,
    category: ["Top Villa", "Self Check-in", "Free Schedule"],
    price: 3400,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "/assets/images/image 13.png",
    discount: ""
  },
  {
    id: 13,
    name: "Casa de Carolina",
    description: "Beachfront Spanish villa with Mediterranean charm. Features include direct beach access, a private pool, and spacious terraces. Perfect for beach lovers and sun seekers.",
    address: {
      city: "Playas de Vera",
      country: "Spain"
    },
    rating: 4.67,
    category: ["Top Villa", "Self Check-in", "Free Schedule"],
    price: 2700,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4"
    },
    image: "/assets/images/image 14.png",
    discount: "35"
  },
  {
    id: 14,
    name: "Happy Valley Villa, Tuni...",
    description: "Intimate villa in the heart of Tunisia's Happy Valley. Featuring traditional architecture, a private courtyard, and modern amenities. Perfect for couples seeking a romantic getaway.",
    address: {
      city: "Qaroun",
      country: "Egypt"
    },
    rating: 4.81,
    category: ["Top Villa", "Instant Book", "Free Schedule"],
    price: 2200,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "2"
    },
    image: "/assets/images/image 15.png",
    discount: ""
  }
];