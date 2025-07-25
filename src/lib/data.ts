import { Destination } from '@/types';

// Famous tourist destinations in Bhutan
export const sampleDestinations: Destination[] = [
  {
    id: '1',
    name: 'Tiger\'s Nest Monastery',
    country: 'Bhutan',
    continent: 'Asia',
    description: 'Paro Taktsang, known as Tiger\'s Nest Monastery, is a prominent Himalayan Buddhist sacred site and temple complex located in the cliffside of the upper Paro valley in Bhutan. Built in 1692, it is one of Bhutan\'s most iconic landmarks. The monastery clings to a cliff at 3,120 meters above sea level, and the hike to reach it offers breathtaking views of the surrounding valley.',
    shortDescription: 'Sacred Buddhist monastery dramatically perched on a cliff face, offering breathtaking views and spiritual serenity.',
    images: {
      hero: 'https://images.unsplash.com/photo-1598869012638-f5351b49498f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      gallery: [
        'https://images.unsplash.com/photo-1637550667967-9edc9f4e892a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1638246438556-5d5042582f05?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1729180253305-23990aee8705?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ],
      thumbnail: 'https://images.unsplash.com/photo-1637550667967-9edc9f4e892a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    highlights: ['Sacred Monastery', 'Cliff Views', 'Hiking Trail', 'Buddhist Heritage', 'Mountain Scenery'],
    bestTimeToVisit: 'Mar-May, Sep-Nov',
    categories: ['Cultural', 'Adventure', 'Historical', 'Spiritual'],
    coordinates: {
      lat: 27.4916,
      lng: 89.3639
    }
  },
  {
    id: '2',
    name: 'Thimphu',
    country: 'Bhutan',
    continent: 'Asia',
    description: 'Thimphu is the capital and largest city of Bhutan. It is situated in the western central part of Bhutan, and the surrounding valley is one of Bhutan\'s dzongkhags. The city became the capital of Bhutan in 1961. Thimphu is home to the royal family, government offices, and many of Bhutan\'s most important cultural sites including the Tashichho Dzong and the Buddha Dordenma statue.',
    shortDescription: 'Capital city blending traditional Bhutanese architecture with modern development, home to the royal family.',
    images: {
      hero: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1583309219338-a582f1f9ca6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      thumbnail: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    highlights: ['Tashichho Dzong', 'Weekend Market', 'Buddha Dordenma', 'Traditional Architecture', 'Royal Palace'],
    bestTimeToVisit: 'Oct-Dec',
    categories: ['City', 'Cultural', 'Historical', 'Shopping'],
    coordinates: {
      lat: 27.4728,
      lng: 89.6390
    }
  },
  {
    id: '3',
    name: 'Punakha Dzong',
    country: 'Bhutan',
    continent: 'Asia',
    description: 'Punakha Dzong, also known as Pungthang Dewa chhenbi Phodrang, is the administrative centre of Punakha District in Punakha, Bhutan. Constructed by Ngawang Namgyal, 1st Zhabdrung Rinpoche, in 1637–38, it is the second oldest and second-largest dzong in Bhutan. The dzong houses the sacred relics of the southern Drukpa Lineage of the Kagyu school of Tibetan Buddhism.',
    shortDescription: 'Majestic fortress-monastery at the confluence of two rivers, showcasing traditional Bhutanese architecture.',
    images: {
      hero: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1583309219338-a582f1f9ca6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    highlights: ['Ancient Fortress', 'River Confluence', 'Traditional Art', 'Royal Ceremonies', 'Buddhist Heritage'],
    bestTimeToVisit: 'Oct-Apr',
    categories: ['Historical', 'Cultural', 'Architecture', 'Spiritual'],
    coordinates: {
      lat: 27.5951,
      lng: 89.8765
    }
  },
  {
    id: '4',
    name: 'Phobjikha Valley',
    country: 'Bhutan',
    continent: 'Asia',
    description: 'Phobjikha Valley is a vast U-shaped glacial valley in central Bhutan. The valley is the winter home of black-necked cranes that migrate from the Tibetan Plateau. The valley is also home to the 17th-century Gangteng Monastery, one of the largest Nyingma monasteries in Bhutan. The valley\'s unique ecosystem has been recognized for its importance and is protected as part of Bhutan\'s conservation efforts.',
    shortDescription: 'Pristine glacial valley and winter sanctuary for endangered black-necked cranes from Tibet.',
    images: {
      hero: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1583309219338-a582f1f9ca6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    highlights: ['Black-necked Cranes', 'Gangteng Monastery', 'Nature Trails', 'Valley Views', 'Rural Homestays'],
    bestTimeToVisit: 'Nov-Mar',
    categories: ['Nature', 'Wildlife', 'Cultural', 'Birdwatching'],
    coordinates: {
      lat: 27.4833,
      lng: 89.8167
    }
  },
  {
    id: '5',
    name: 'Bumthang Valley',
    country: 'Bhutan',
    continent: 'Asia',
    description: 'Bumthang consists of four valleys - Chumey, Choekhor, Tang and Ura. It is home to many of Bhutan\'s oldest temples and monasteries, and is considered the spiritual heartland of the kingdom. The region is also famous for its apple orchards, cheese production, and traditional weaving. Bumthang is where Buddhism was first introduced to Bhutan in the 8th century.',
    shortDescription: 'Spiritual heartland of Bhutan with ancient temples, apple orchards, and traditional farming communities.',
    images: {
      hero: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1583309219338-a582f1f9ca6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      thumbnail: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    highlights: ['Ancient Temples', 'Apple Orchards', 'Traditional Villages', 'Spiritual Sites', 'Local Crafts'],
    bestTimeToVisit: 'Sep-Nov',
    categories: ['Cultural', 'Nature', 'Historical', 'Rural'],
    coordinates: {
      lat: 27.5333,
      lng: 90.7500
    }
  },
  {
    id: '6',
    name: 'Dochula Pass',
    country: 'Bhutan',
    continent: 'Asia',
    description: 'Dochula Pass is a mountain pass in the snow-covered Himalayas within Bhutan on the road from Thimphu to Punakha. The pass is located at an elevation of 3,100 metres and is marked by 108 memorial chortens or stupas. On clear days, the pass offers spectacular panoramic views of the Himalayan mountain range, including several peaks over 7,000 meters.',
    shortDescription: 'High mountain pass adorned with 108 stupas, offering panoramic views of the Himalayan peaks.',
    images: {
      hero: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1583309219338-a582f1f9ca6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      thumbnail: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    highlights: ['108 Stupas', 'Himalayan Views', 'Mountain Pass', 'Prayer Flags', 'Scenic Drive'],
    bestTimeToVisit: 'Oct-Feb',
    categories: ['Mountain', 'Cultural', 'Nature', 'Photography'],
    coordinates: {
      lat: 27.4833,
      lng: 89.7667
    }
  }
];

// Helper function to get featured destinations
export const getFeaturedDestinations = (count: number = 6): Destination[] => {
  return sampleDestinations.slice(0, count);
};

// Helper function to get destinations by continent
export const getDestinationsByContinent = (continent: string): Destination[] => {
  return sampleDestinations.filter(dest => dest.continent === continent);
};

// Helper function to get destinations by category
export const getDestinationsByCategory = (category: string): Destination[] => {
  return sampleDestinations.filter(dest => dest.categories.includes(category));
};

// Helper function to get all available continents
export const getAllContinents = (): string[] => {
  const continents = new Set<string>();
  sampleDestinations.forEach(dest => continents.add(dest.continent));
  return Array.from(continents).sort();
};

// Helper function to get all available categories
export const getAllCategories = (): string[] => {
  const categories = new Set<string>();
  sampleDestinations.forEach(dest => {
    dest.categories.forEach(category => categories.add(category));
  });
  return Array.from(categories).sort();
};

// Helper function to get all available countries
export const getAllCountries = (): string[] => {
  const countries = new Set<string>();
  sampleDestinations.forEach(dest => countries.add(dest.country));
  return Array.from(countries).sort();
};

// Helper function to get related destinations based on categories and continent
export const getRelatedDestinations = (currentDestination: Destination, count: number = 3): Destination[] => {
  // Find destinations with similar categories
  const sameCategory = sampleDestinations.filter(dest =>
    dest.id !== currentDestination.id &&
    dest.categories.some(cat => currentDestination.categories.includes(cat))
  );

  // If we don't have enough similar category destinations, add other destinations
  if (sameCategory.length < count) {
    const otherDestinations = sampleDestinations.filter(dest =>
      dest.id !== currentDestination.id &&
      !sameCategory.some(similar => similar.id === dest.id)
    );

    return [...sameCategory, ...otherDestinations].slice(0, count);
  }

  return sameCategory.slice(0, count);
};