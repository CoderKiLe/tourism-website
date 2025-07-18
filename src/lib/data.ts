import { Destination } from '@/types';

// Sample tourist destinations from around the world
export const sampleDestinations: Destination[] = [
  // ASIA
  {
    id: '1',
    name: 'Tiger\'s Nest Monastery',
    country: 'Bhutan',
    continent: 'Asia',
    description: 'Paro Taktsang, known as Tiger\'s Nest Monastery, is a prominent Himalayan Buddhist sacred site and temple complex located in the cliffside of the upper Paro valley in Bhutan. Built in 1692, it is one of Bhutan\'s most iconic landmarks. The monastery clings to a cliff at 3,120 meters above sea level, and the hike to reach it offers breathtaking views of the surrounding valley.',
    shortDescription: 'Sacred Buddhist monastery dramatically perched on a cliff face, offering breathtaking views and spiritual serenity.',
    images: {
      hero: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1583309219338-a582f1f9ca6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      thumbnail: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
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
    name: 'Kyoto\'s Bamboo Forest',
    country: 'Japan',
    continent: 'Asia',
    description: 'The Arashiyama Bamboo Grove is one of Kyoto\'s top attractions and for good reason: standing amid these soaring stalks of bamboo is like being in another world. The experience has become a bucket-list item for travelers to Japan. Located in the Arashiyama district of western Kyoto, the bamboo forest path stretches from the entrance of Tenryu-ji Temple to just before Okochi Sanso Villa.',
    shortDescription: 'Enchanting pathway through towering bamboo stalks creating a magical atmosphere of light and shadow.',
    images: {
      hero: 'https://images.unsplash.com/photo-1576675466969-38eeae4b41f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1576675466969-38eeae4b41f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1576675784201-0e142b423952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1607619662634-3ac55ec0e216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      thumbnail: 'https://images.unsplash.com/photo-1576675466969-38eeae4b41f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    highlights: ['Bamboo Grove', 'Zen Gardens', 'Tenryu-ji Temple', 'Traditional Tea Houses', 'Rickshaw Rides'],
    bestTimeToVisit: 'Nov-Mar',
    categories: ['Nature', 'Cultural', 'Photography', 'Peaceful'],
    coordinates: {
      lat: 35.0169,
      lng: 135.6745
    }
  },
  {
    id: '3',
    name: 'Bali Rice Terraces',
    country: 'Indonesia',
    continent: 'Asia',
    description: 'The Tegallalang Rice Terraces in Ubud are famous for their beautiful scenes of rice paddies involving the subak (traditional Balinese cooperative irrigation system). The terraced rice fields were developed using traditional Balinese irrigation system which was passed down from the 8th century. They offer a perfect example of Balinese agricultural practices and showcase the harmony between nature, humans and the spiritual realm.',
    shortDescription: 'Stunning emerald-green terraced rice fields showcasing traditional Balinese agricultural techniques and breathtaking landscapes.',
    images: {
      hero: 'https://images.unsplash.com/photo-1531592937781-344ad608fabf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1531592937781-344ad608fabf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1604999333679-b86d54738315?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1558005530-a7958896ec60?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      thumbnail: 'https://images.unsplash.com/photo-1531592937781-344ad608fabf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    highlights: ['Terraced Rice Fields', 'Traditional Farming', 'Sunrise Views', 'Cultural Experience', 'Local Crafts'],
    bestTimeToVisit: 'Apr-Oct',
    categories: ['Nature', 'Cultural', 'Photography', 'Rural'],
    coordinates: {
      lat: -8.4322,
      lng: 115.2771
    }
  },
  
  // AFRICA
  {
    id: '4',
    name: 'Victoria Falls',
    country: 'Zimbabwe/Zambia',
    continent: 'Africa',
    description: 'Victoria Falls, or Mosi-oa-Tunya (the Smoke that Thunders), is a waterfall on the Zambezi River at the border between Zambia and Zimbabwe. It has been described as one of the Seven Natural Wonders of the world. The falls are part of two national parks: Victoria Falls National Park in Zimbabwe and Mosi-oa-Tunya National Park in Zambia, and are a major tourist attraction for both countries.',
    shortDescription: 'One of the world\'s largest waterfalls creating a spectacular curtain of falling water and mist visible from miles away.',
    images: {
      hero: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1547970810-dc1eac37d174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      thumbnail: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    highlights: ['Massive Waterfall', 'Devil\'s Pool', 'Rainbow Views', 'Bungee Jumping', 'River Cruises'],
    bestTimeToVisit: 'Feb-May',
    categories: ['Nature', 'Adventure', 'Wildlife', 'Wonder'],
    coordinates: {
      lat: -17.9243,
      lng: 25.8572
    }
  },
  {
    id: '5',
    name: 'Marrakech Medina',
    country: 'Morocco',
    continent: 'Africa',
    description: 'The Medina of Marrakech, a UNESCO World Heritage site, is a historic walled city dating back to the Berber Empire. Its labyrinthine streets are filled with souks (markets), palaces, mosques, and gardens. The medina is centered around Jemaa el-Fnaa square, which comes alive each evening with storytellers, musicians, and food vendors, creating an atmosphere that has remained largely unchanged for centuries.',
    shortDescription: 'Ancient walled city with vibrant markets, historic palaces, and a maze of narrow streets filled with rich cultural experiences.',
    images: {
      hero: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1597212618440-806262de4f6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1539020140153-e8c237561b6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1553102674-af685bb5fe40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      thumbnail: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    highlights: ['Jemaa el-Fnaa Square', 'Traditional Souks', 'Bahia Palace', 'Koutoubia Mosque', 'Moroccan Cuisine'],
    bestTimeToVisit: 'Mar-May, Sep-Nov',
    categories: ['Cultural', 'Historical', 'Shopping', 'Culinary'],
    coordinates: {
      lat: 31.6295,
      lng: -7.9811
    }
  },
  
  // EUROPE
  {
    id: '6',
    name: 'Santorini',
    country: 'Greece',
    continent: 'Europe',
    description: 'Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its two principal towns, Fira and Oia, cling to cliffs above an underwater caldera (crater). They overlook the sea, small islands to the west and beaches made up of black, red and white lava pebbles.',
    shortDescription: 'Iconic Greek island with dazzling white buildings, blue domes, and spectacular sunsets over the Aegean Sea.',
    images: {
      hero: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      thumbnail: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    highlights: ['Caldera Views', 'Oia Sunset', 'Blue Domed Churches', 'Volcanic Beaches', 'Mediterranean Cuisine'],
    bestTimeToVisit: 'Apr-Jun, Sep-Oct',
    categories: ['Island', 'Romantic', 'Cultural', 'Beach'],
    coordinates: {
      lat: 36.3932,
      lng: 25.4615
    }
  },
  {
    id: '7',
    name: 'Northern Lights',
    country: 'Iceland',
    continent: 'Europe',
    description: 'The Northern Lights, or Aurora Borealis, are one of nature\'s most spectacular displays, a celestial ballet of light dancing across the night sky. Iceland is one of the best places in the world to see this phenomenon. The lights are actually collisions between electrically charged particles from the sun that enter the earth\'s atmosphere. The best time to witness this magical display is during the winter months when darkness prevails.',
    shortDescription: 'Mesmerizing natural light display in the night sky, painting the darkness with vibrant colors of green, blue, and purple.',
    images: {
      hero: 'https://images.unsplash.com/photo-1579033385971-a7bc024a0291?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1579033385971-a7bc024a0291?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      thumbnail: 'https://images.unsplash.com/photo-1579033385971-a7bc024a0291?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    highlights: ['Aurora Borealis', 'Night Photography', 'Icelandic Landscapes', 'Winter Experience', 'Guided Tours'],
    bestTimeToVisit: 'Sep-Apr',
    categories: ['Nature', 'Photography', 'Wonder', 'Winter'],
    coordinates: {
      lat: 64.9631,
      lng: -19.0208
    }
  },
  
  // NORTH AMERICA
  {
    id: '8',
    name: 'Grand Canyon',
    country: 'United States',
    continent: 'North America',
    description: 'The Grand Canyon is a steep-sided canyon carved by the Colorado River in Arizona. For thousands of years, the area has been continuously inhabited by Native Americans, who built settlements within the canyon and its many caves. The Grand Canyon is 277 miles long, up to 18 miles wide and attains a depth of over a mile. Nearly two billion years of Earth\'s geological history have been exposed as the Colorado River and its tributaries cut their channels through layer after layer of rock.',
    shortDescription: 'Vast, majestic canyon showcasing billions of years of geological history with breathtaking panoramic vistas.',
    images: {
      hero: 'https://images.unsplash.com/photo-1615551043360-33de8b5f410c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1615551043360-33de8b5f410c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1527333656061-ca7adf608ae1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1502724808734-6bcfafb27423?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      thumbnail: 'https://images.unsplash.com/photo-1615551043360-33de8b5f410c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    highlights: ['Scenic Viewpoints', 'Hiking Trails', 'Colorado River', 'Geological Formations', 'Native American History'],
    bestTimeToVisit: 'Mar-May, Sep-Nov',
    categories: ['Nature', 'Adventure', 'Wonder', 'Hiking'],
    coordinates: {
      lat: 36.0544,
      lng: -112.2401
    }
  },
  {
    id: '9',
    name: 'Tulum',
    country: 'Mexico',
    continent: 'North America',
    description: 'Tulum is a resort town on Mexico\'s Caribbean coast. It\'s known for its well-preserved ruins of an ancient Mayan port city. The main building is a large stone structure called El Castillo (castle), perched on a rocky cliff above the white sand beach and turquoise sea. Near the ruins is the Parque Nacional Tulum, a coastal area with mangroves and cenotes (natural limestone sinkholes).',
    shortDescription: 'Ancient Mayan ruins perched on seaside cliffs overlooking pristine Caribbean beaches with turquoise waters.',
    images: {
      hero: 'https://images.unsplash.com/photo-1504730655501-e8638e63a831?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1504730655501-e8638e63a831?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1518638150340-f706e86654de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1605217613423-c5ca91496cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      thumbnail: 'https://images.unsplash.com/photo-1504730655501-e8638e63a831?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    highlights: ['Mayan Ruins', 'Caribbean Beaches', 'Cenotes', 'Eco-friendly Resorts', 'Snorkeling'],
    bestTimeToVisit: 'Nov-Apr',
    categories: ['Beach', 'Historical', 'Cultural', 'Adventure'],
    coordinates: {
      lat: 20.2114,
      lng: -87.4654
    }
  },
  
  // SOUTH AMERICA
  {
    id: '10',
    name: 'Machu Picchu',
    country: 'Peru',
    continent: 'South America',
    description: 'Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley. Built in the 15th century and later abandoned, it\'s renowned for its sophisticated dry-stone walls that fuse huge blocks without the use of mortar, intriguing buildings that play on astronomical alignments, and panoramic views. Its exact former use remains a mystery.',
    shortDescription: 'Mystical Incan citadel nestled among Andean peaks, showcasing remarkable ancient engineering and spiritual significance.',
    images: {
      hero: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1565516449454-e8e3d21e76a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      thumbnail: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    highlights: ['Incan Architecture', 'Mountain Views', 'Inca Trail', 'Sacred Valley', 'Ancient History'],
    bestTimeToVisit: 'May-Oct',
    categories: ['Historical', 'Wonder', 'Adventure', 'Cultural'],
    coordinates: {
      lat: -13.1631,
      lng: -72.5450
    }
  },
  {
    id: '11',
    name: 'Galápagos Islands',
    country: 'Ecuador',
    continent: 'South America',
    description: 'The Galápagos Islands, part of the Republic of Ecuador, are an archipelago of volcanic islands distributed on either side of the Equator in the Pacific Ocean. The islands are known for their vast number of endemic species and were studied by Charles Darwin during the second voyage of HMS Beagle, which contributed to his theory of evolution by natural selection.',
    shortDescription: 'Unique archipelago with extraordinary biodiversity, where visitors can observe rare wildlife in their natural habitat.',
    images: {
      hero: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1518127673922-0d4f7eb36d27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1559253664-ca249d4608c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      thumbnail: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    highlights: ['Endemic Wildlife', 'Giant Tortoises', 'Volcanic Landscapes', 'Snorkeling', 'Darwin Research Station'],
    bestTimeToVisit: 'Dec-May',
    categories: ['Nature', 'Wildlife', 'Adventure', 'Island'],
    coordinates: {
      lat: -0.9538,
      lng: -90.9656
    }
  },
  
  // OCEANIA
  {
    id: '12',
    name: 'Great Barrier Reef',
    country: 'Australia',
    continent: 'Oceania',
    description: 'The Great Barrier Reef is the world\'s largest coral reef system composed of over 2,900 individual reefs and 900 islands stretching for over 2,300 kilometers over an area of approximately 344,400 square kilometers. The reef is located in the Coral Sea, off the coast of Queensland, Australia. The Great Barrier Reef can be seen from outer space and is the world\'s biggest single structure made by living organisms.',
    shortDescription: 'World\'s largest coral reef ecosystem offering spectacular underwater experiences with vibrant marine life.',
    images: {
      hero: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1570789210967-2cac24afeb00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1582153465561-a2d4ac601b1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      thumbnail: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    highlights: ['Coral Gardens', 'Marine Life', 'Snorkeling', 'Diving', 'Island Hopping'],
    bestTimeToVisit: 'Jun-Oct',
    categories: ['Nature', 'Adventure', 'Wonder', 'Marine'],
    coordinates: {
      lat: -18.2871,
      lng: 147.6992
    }
  },
  {
    id: '13',
    name: 'Milford Sound',
    country: 'New Zealand',
    continent: 'Oceania',
    description: 'Milford Sound is a fiord in the southwest of New Zealand\'s South Island. It\'s known for towering Mitre Peak, plus rainforests and waterfalls like Stirling and Bowen falls, which plummet down its sheer sides. The fiord is home to fur seal colonies, penguins and dolphins. Milford Discovery Centre and Underwater Observatory offers views of rare black coral and other marine life.',
    shortDescription: 'Dramatic fiord with towering cliffs, cascading waterfalls, and pristine waters nestled in New Zealand\'s wilderness.',
    images: {
      hero: 'https://images.unsplash.com/photo-1578284742788-1c8b59e48e09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1578284742788-1c8b59e48e09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1530968033775-2c92736b131e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1504575958497-ccdd586c2997?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      thumbnail: 'https://images.unsplash.com/photo-1578284742788-1c8b59e48e09?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    highlights: ['Mitre Peak', 'Boat Cruises', 'Waterfalls', 'Wildlife Spotting', 'Kayaking'],
    bestTimeToVisit: 'Nov-Apr',
    categories: ['Nature', 'Scenic', 'Adventure', 'Wildlife'],
    coordinates: {
      lat: -44.6414,
      lng: 167.8973
    }
  },
  
  // ANTARCTICA
  {
    id: '14',
    name: 'Antarctic Peninsula',
    country: 'Antarctica',
    continent: 'Antarctica',
    description: 'The Antarctic Peninsula is the northernmost part of the mainland of Antarctica, located at the base of the Southern Hemisphere. It is the most accessible part of the continent, with stunning landscapes of mountains, glaciers, and abundant wildlife. Despite being one of the most remote places on Earth, it attracts thousands of visitors each year who come to witness its pristine beauty and unique ecosystem.',
    shortDescription: 'Earth\'s last great wilderness featuring spectacular icebergs, glaciers, and diverse wildlife in a pristine environment.',
    images: {
      hero: 'https://images.unsplash.com/photo-1551466629-dd0d9e243ee3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1551466629-dd0d9e243ee3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1494791368093-85217d9524e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      thumbnail: 'https://images.unsplash.com/photo-1551466629-dd0d9e243ee3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    highlights: ['Penguin Colonies', 'Icebergs', 'Whale Watching', 'Research Stations', 'Pristine Wilderness'],
    bestTimeToVisit: 'Nov-Mar',
    categories: ['Adventure', 'Wildlife', 'Wonder', 'Expedition'],
    coordinates: {
      lat: -65.0,
      lng: -63.0
    }
  },
  
  // Additional destinations from Bhutan
  {
    id: '15',
    name: 'Punakha Dzong',
    country: 'Bhutan',
    continent: 'Asia',
    description: 'Punakha Dzong, also known as Pungthang Dewa chhenbi Phodrang, is the administrative centre of Punakha District in Punakha, Bhutan. Constructed by Ngawang Namgyal, 1st Zhabdrung Rinpoche, in 1637–38, it is the second oldest and second-largest dzong in Bhutan. The dzong houses the sacred relics of the southern Drukpa Lineage of the Kagyu school of Tibetan Buddhism, including the Rangjung Kasarpani.',
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
    id: '16',
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
  }
];

// Helper function to get featured destinations
export const getFeaturedDestinations = (count: number = 6): Destination[] => {
  // Get a diverse selection of destinations from different continents
  const continents = ['Asia', 'Africa', 'Europe', 'North America', 'South America', 'Oceania', 'Antarctica'];
  let featured: Destination[] = [];
  
  // Try to get at least one destination from each continent
  continents.forEach(continent => {
    const continentDestinations = sampleDestinations.filter(dest => dest.continent === continent);
    if (continentDestinations.length > 0) {
      featured.push(continentDestinations[0]);
    }
  });
  
  // If we have more slots to fill, add more destinations
  if (featured.length < count) {
    const remaining = count - featured.length;
    const existingIds = featured.map(dest => dest.id);
    const additionalDestinations = sampleDestinations
      .filter(dest => !existingIds.includes(dest.id))
      .slice(0, remaining);
    
    featured = [...featured, ...additionalDestinations];
  }
  
  // If we have too many, trim to the requested count
  return featured.slice(0, count);
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
  // First try to find destinations with similar categories in the same continent
  const sameContinentAndCategory = sampleDestinations.filter(dest => 
    dest.id !== currentDestination.id && 
    dest.continent === currentDestination.continent &&
    dest.categories.some(cat => currentDestination.categories.includes(cat))
  );
  
  // If we have enough, return those
  if (sameContinentAndCategory.length >= count) {
    return sameContinentAndCategory.slice(0, count);
  }
  
  // Otherwise, find destinations with similar categories regardless of continent
  const sameCategory = sampleDestinations.filter(dest => 
    dest.id !== currentDestination.id &&
    dest.continent !== currentDestination.continent &&
    dest.categories.some(cat => currentDestination.categories.includes(cat))
  );
  
  // Combine and return
  const related = [...sameContinentAndCategory, ...sameCategory];
  return related.slice(0, count);
};