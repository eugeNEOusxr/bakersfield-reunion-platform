// Shared Bakersfield Venues Database
// All schools use these same venues

export const venues = [
  {
    id: 'padre-hotel',
    name: 'The Padre Hotel',
    address: '1702 18th Street, Bakersfield, CA 93301',
    website: 'https://thepadrehotel.com',
    virtualTour: 'https://www.thepadrehotel.com/gallery',
    description: 'Historic boutique hotel in downtown Bakersfield with rooftop bar, elegant ballrooms, and Spanish colonial architecture.',
    capacity: 250,
    pricing: {
      basePrice: 8500,
      perPerson: 85,
      includes: ['Full bar service', 'AV equipment', 'Dedicated event coordinator', 'Valet parking']
    },
    specs: {
      indoorOutdoor: 'Both',
      parking: 'Valet + Street',
      catering: 'In-house',
      alcohol: 'Full bar'
    },
    floorPlans: [
      { name: 'Grand Ballroom', capacity: 200, features: 'Main event space, dance floor, stage' },
      { name: 'Rooftop Bar', capacity: 100, features: 'Cocktail hour, city views, outdoor lounge' },
      { name: 'Private Dining Room', capacity: 50, features: 'VIP area, intimate setting' }
    ],
    image: '🏨'
  },
  {
    id: 'stockdale-country-club',
    name: 'Stockdale Country Club',
    address: '7001 Stockdale Highway, Bakersfield, CA 93309',
    website: 'https://stockdalecc.com',
    virtualTour: 'https://stockdalecc.com',
    description: 'Premier country club featuring championship golf course views, elegant banquet halls, and upscale dining.',
    capacity: 300,
    pricing: {
      basePrice: 7500,
      perPerson: 75,
      includes: ['Buffet dinner', 'Wine service', 'Linens and centerpieces', 'Setup and cleanup']
    },
    specs: {
      indoorOutdoor: 'Both',
      parking: 'Free lot',
      catering: 'In-house',
      alcohol: 'Wine & beer'
    },
    floorPlans: [
      { name: 'Grand Ballroom', capacity: 300, features: 'Golf course views, dance floor, private bar' },
      { name: 'Patio Terrace', capacity: 150, features: 'Outdoor cocktail space, sunset views' }
    ],
    image: '⛳'
  },
  {
    id: 'rabobank-convention',
    name: 'Rabobank Convention Center',
    address: '1001 Truxtun Avenue, Bakersfield, CA 93301',
    website: 'https://rabobankconventioncenter.com',
    virtualTour: 'https://maps.google.com/?q=Rabobank+Convention+Center+Bakersfield',
    description: 'Downtown convention center with massive capacity, modern amenities, and flexible event spaces.',
    capacity: 500,
    pricing: {
      basePrice: 9500,
      perPerson: 65,
      includes: ['Tables and chairs', 'Basic AV', 'Security staff', 'Loading dock access']
    },
    specs: {
      indoorOutdoor: 'Indoor',
      parking: 'Paid garage',
      catering: 'Your choice',
      alcohol: 'Licensed caterer'
    },
    floorPlans: [
      { name: 'Grand Hall', capacity: 500, features: 'Massive space, high ceilings, customizable layout' },
      { name: 'Breakout Room', capacity: 100, features: 'Registration area, lounge space' }
    ],
    image: '🏛️'
  },
  {
    id: 'seven-oaks',
    name: 'Seven Oaks Country Club',
    address: '1201 Bakersfield Country Club Drive, Bakersfield, CA 93306',
    website: 'https://sevenoakscc.com',
    virtualTour: 'https://maps.google.com/?q=Seven+Oaks+Country+Club+Bakersfield',
    description: 'Exclusive country club with beautiful grounds, lake views, and sophisticated event spaces.',
    capacity: 275,
    pricing: {
      basePrice: 8000,
      perPerson: 80,
      includes: ['Plated dinner', 'Full bar', 'Dance floor', 'Ceremony space']
    },
    specs: {
      indoorOutdoor: 'Both',
      parking: 'Valet',
      catering: 'In-house',
      alcohol: 'Full bar'
    },
    floorPlans: [
      { name: 'Lakeside Ballroom', capacity: 250, features: 'Water views, elegant décor, built-in bar' },
      { name: 'Garden Terrace', capacity: 150, features: 'Outdoor ceremony space, landscaped grounds' }
    ],
    image: '🌳'
  }
];

// Helper function to get venue by ID
export function getVenueById(venueId) {
  return venues.find(v => v.id === venueId);
}

// Helper function to calculate total cost
export function calculateVenueCost(venueId, guestCount) {
  const venue = getVenueById(venueId);
  if (!venue) return null;

  return {
    basePrice: venue.pricing.basePrice,
    perPersonCost: venue.pricing.perPerson * guestCount,
    total: venue.pricing.basePrice + (venue.pricing.perPerson * guestCount),
    perPerson: venue.pricing.perPerson
  };
}
