import { Activity } from '../types';

export const metActivityData: Activity[] = [
  // Bicycling activities
  {
    id: 'bicycling_leisure',
    name: 'Bicycling, leisure, 5.5 mph',
    met: 3.5,
    category: 'Bicycling',
  },
  {
    id: 'bicycling_10mph',
    name: 'Bicycling, 10-11.9 mph, leisure, slow, light effort',
    met: 6.8,
    category: 'Bicycling',
  },
  {
    id: 'bicycling_12mph',
    name: 'Bicycling, 12-13.9 mph, moderate effort',
    met: 8.0,
    category: 'Bicycling',
  },
  {
    id: 'bicycling_14mph',
    name: 'Bicycling, 14-15.9 mph, vigorous effort',
    met: 10.0,
    category: 'Bicycling',
  },
  {
    id: 'bicycling_16mph',
    name: 'Bicycling, 16-19 mph, very fast, racing general',
    met: 12.0,
    category: 'Bicycling',
  },
  {
    id: 'bicycling_racing',
    name: 'Bicycling, > 20 mph, racing',
    met: 15.8,
    category: 'Bicycling',
  },
  {
    id: 'bicycling_stationary_light',
    name: 'Bicycling, stationary, light effort',
    met: 6.8,
    category: 'Bicycling',
  },
  {
    id: 'bicycling_stationary_moderate',
    name: 'Bicycling, stationary, moderate effort',
    met: 8.5,
    category: 'Bicycling',
  },
  {
    id: 'bicycling_stationary_vigorous',
    name: 'Bicycling, stationary, vigorous effort',
    met: 10.5,
    category: 'Bicycling',
  },
  {
    id: 'bicycling_mountain',
    name: 'Bicycling, mountain, general',
    met: 8.5,
    category: 'Bicycling',
  },
  
  // Conditioning exercises
  {
    id: 'aerobics_low_impact',
    name: 'Aerobics, low impact',
    met: 5.0,
    category: 'Conditioning',
  },
  {
    id: 'aerobics_high_impact',
    name: 'Aerobics, high impact',
    met: 7.3,
    category: 'Conditioning',
  },
  {
    id: 'aerobics_step_light',
    name: 'Aerobics, step, with 6-8 inch step',
    met: 8.5,
    category: 'Conditioning',
  },
  {
    id: 'aerobics_step_high',
    name: 'Aerobics, step, with 10-12 inch step',
    met: 10.0,
    category: 'Conditioning',
  },
  {
    id: 'calisthenics_light',
    name: 'Calisthenics, light or moderate effort',
    met: 3.8,
    category: 'Conditioning',
  },
  {
    id: 'calisthenics_vigorous',
    name: 'Calisthenics, vigorous effort',
    met: 8.0,
    category: 'Conditioning',
  },
  {
    id: 'circuit_training',
    name: 'Circuit training, general',
    met: 8.0,
    category: 'Conditioning',
  },
  {
    id: 'crossfit',
    name: 'Crossfit, high intensity functional training',
    met: 11.5,
    category: 'Conditioning',
  },
  {
    id: 'elliptical_trainer',
    name: 'Elliptical trainer, moderate effort',
    met: 5.0,
    category: 'Conditioning',
  },
  {
    id: 'resistance_training',
    name: 'Resistance training (weight lifting, free weights, nautilus or universal), moderate/vigorous effort',
    met: 5.0,
    category: 'Conditioning',
  },
  {
    id: 'weight_lifting_light',
    name: 'Weight lifting, light workout',
    met: 3.5,
    category: 'Conditioning',
  },
  {
    id: 'weight_lifting_vigorous',
    name: 'Weight lifting, vigorous effort',
    met: 6.0,
    category: 'Conditioning',
  },
  {
    id: 'pilates',
    name: 'Pilates, general',
    met: 3.8,
    category: 'Conditioning',
  },
  {
    id: 'stretching_light',
    name: 'Stretching, mild',
    met: 2.3,
    category: 'Conditioning',
  },
  {
    id: 'yoga_light',
    name: 'Yoga, hatha, light effort',
    met: 2.5,
    category: 'Conditioning',
  },
  {
    id: 'yoga_moderate',
    name: 'Yoga, power, flow, vinyasa, moderate effort',
    met: 4.0,
    category: 'Conditioning',
  },
  {
    id: 'zumba',
    name: 'Zumba fitness, general',
    met: 9.5,
    category: 'Conditioning',
  },
  
  // Dancing
  {
    id: 'dancing_ballet',
    name: 'Dancing, ballet, modern, or jazz, general, rehearsal or class',
    met: 5.0,
    category: 'Dancing',
  },
  {
    id: 'dancing_ballroom_slow',
    name: 'Dancing, ballroom, slow (e.g., waltz, foxtrot, slow dancing)',
    met: 3.0,
    category: 'Dancing',
  },
  {
    id: 'dancing_ballroom_fast',
    name: 'Dancing, ballroom, fast (e.g., disco, folk, square)',
    met: 7.8,
    category: 'Dancing',
  },
  {
    id: 'dancing_aerobic',
    name: 'Dancing, aerobic, general',
    met: 7.3,
    category: 'Dancing',
  },
  {
    id: 'dancing_salsa',
    name: 'Dancing, salsa, merengue',
    met: 7.5,
    category: 'Dancing',
  },
  
  // Home activities and chores
  {
    id: 'cleaning_house',
    name: 'Cleaning, house, general',
    met: 3.0,
    category: 'Home Activities',
  },
  {
    id: 'cleaning_heavy',
    name: 'Cleaning, heavy (washing windows, vacuuming, mopping)',
    met: 3.5,
    category: 'Home Activities',
  },
  {
    id: 'cooking',
    name: 'Cooking or food preparation',
    met: 2.5,
    category: 'Home Activities',
  },
  {
    id: 'gardening_general',
    name: 'Gardening, general',
    met: 3.8,
    category: 'Home Activities',
  },
  {
    id: 'mowing_lawn',
    name: 'Mowing lawn, power mower',
    met: 4.5,
    category: 'Home Activities',
  },
  {
    id: 'shoveling_snow',
    name: 'Shoveling snow, by hand',
    met: 6.0,
    category: 'Home Activities',
  },
  {
    id: 'sweeping',
    name: 'Sweeping, moderate effort',
    met: 3.3,
    category: 'Home Activities',
  },
  {
    id: 'moving_furniture',
    name: 'Moving household items, carrying boxes',
    met: 5.8,
    category: 'Home Activities',
  },
  
  // Occupational activities
  {
    id: 'office_work',
    name: 'Office work, desk work',
    met: 1.5,
    category: 'Occupational',
  },
  {
    id: 'standing_light_work',
    name: 'Standing, light work (bartending, store clerk, assembling, filing)',
    met: 3.0,
    category: 'Occupational',
  },
  {
    id: 'construction_general',
    name: 'Construction, general',
    met: 4.0,
    category: 'Occupational',
  },
  {
    id: 'carpentry',
    name: 'Carpentry, general',
    met: 4.3,
    category: 'Occupational',
  },
  {
    id: 'farming_general',
    name: 'Farming, general',
    met: 4.8,
    category: 'Occupational',
  },
  {
    id: 'firefighting',
    name: 'Firefighting, general',
    met: 8.0,
    category: 'Occupational',
  },
  
  // Running activities
  {
    id: 'jogging_general',
    name: 'Jogging, general',
    met: 7.0,
    category: 'Running',
  },
  {
    id: 'running_4mph',
    name: 'Running, 4 mph (13.5 min/mile)',
    met: 6.0,
    category: 'Running',
  },
  {
    id: 'running_5mph',
    name: 'Running, 5 mph (12 min/mile)',
    met: 8.3,
    category: 'Running',
  },
  {
    id: 'running_5.2mph',
    name: 'Running, 5.2 mph (11.5 min/mile)',
    met: 9.0,
    category: 'Running',
  },
  {
    id: 'running_6mph',
    name: 'Running, 6 mph (10 min/mile)',
    met: 9.8,
    category: 'Running',
  },
  {
    id: 'running_6.7mph',
    name: 'Running, 6.7 mph (9 min/mile)',
    met: 10.5,
    category: 'Running',
  },
  {
    id: 'running_7mph',
    name: 'Running, 7 mph (8.5 min/mile)',
    met: 11.0,
    category: 'Running',
  },
  {
    id: 'running_7.5mph',
    name: 'Running, 7.5 mph (8 min/mile)',
    met: 11.5,
    category: 'Running',
  },
  {
    id: 'running_8mph',
    name: 'Running, 8 mph (7.5 min/mile)',
    met: 11.8,
    category: 'Running',
  },
  {
    id: 'running_8.6mph',
    name: 'Running, 8.6 mph (7 min/mile)',
    met: 12.3,
    category: 'Running',
  },
  {
    id: 'running_9mph',
    name: 'Running, 9 mph (6.5 min/mile)',
    met: 12.8,
    category: 'Running',
  },
  {
    id: 'running_10mph',
    name: 'Running, 10 mph (6 min/mile)',
    met: 14.5,
    category: 'Running',
  },
  {
    id: 'running_treadmill',
    name: 'Running, treadmill, general',
    met: 9.0,
    category: 'Running',
  },
  {
    id: 'running_stairs',
    name: 'Running, stairs, up',
    met: 15.0,
    category: 'Running',
  },
  
  // Sports activities
  {
    id: 'baseball_general',
    name: 'Baseball, general',
    met: 5.0,
    category: 'Sports',
  },
  {
    id: 'basketball_general',
    name: 'Basketball, general',
    met: 6.5,
    category: 'Sports',
  },
  {
    id: 'basketball_game',
    name: 'Basketball, game play',
    met: 8.0,
    category: 'Sports',
  },
  {
    id: 'bowling',
    name: 'Bowling',
    met: 3.8,
    category: 'Sports',
  },
  {
    id: 'boxing_sparring',
    name: 'Boxing, sparring',
    met: 7.8,
    category: 'Sports',
  },
  {
    id: 'football_competitive',
    name: 'Football, competitive',
    met: 8.0,
    category: 'Sports',
  },
  {
    id: 'golf_walking',
    name: 'Golf, walking, carrying clubs',
    met: 4.3,
    category: 'Sports',
  },
  {
    id: 'hockey_field',
    name: 'Hockey, field',
    met: 7.8,
    category: 'Sports',
  },
  {
    id: 'hockey_ice',
    name: 'Hockey, ice, general',
    met: 8.0,
    category: 'Sports',
  },
  {
    id: 'martial_arts',
    name: 'Martial arts, different types, moderate pace',
    met: 10.3,
    category: 'Sports',
  },
  {
    id: 'racquetball_competitive',
    name: 'Racquetball, competitive',
    met: 10.0,
    category: 'Sports',
  },
  {
    id: 'rock_climbing',
    name: 'Rock climbing, ascending rock',
    met: 8.0,
    category: 'Sports',
  },
  {
    id: 'skateboarding',
    name: 'Skateboarding, general, moderate effort',
    met: 5.0,
    category: 'Sports',
  },
  {
    id: 'soccer_casual',
    name: 'Soccer, casual, general',
    met: 7.0,
    category: 'Sports',
  },
  {
    id: 'soccer_competitive',
    name: 'Soccer, competitive',
    met: 10.0,
    category: 'Sports',
  },
  {
    id: 'softball_general',
    name: 'Softball or baseball, general play',
    met: 5.0,
    category: 'Sports',
  },
  {
    id: 'squash',
    name: 'Squash',
    met: 12.0,
    category: 'Sports',
  },
  {
    id: 'table_tennis',
    name: 'Table tennis, ping pong',
    met: 4.0,
    category: 'Sports',
  },
  {
    id: 'tennis_singles',
    name: 'Tennis, singles',
    met: 8.0,
    category: 'Sports',
  },
  {
    id: 'tennis_doubles',
    name: 'Tennis, doubles',
    met: 6.0,
    category: 'Sports',
  },
  {
    id: 'volleyball_competitive',
    name: 'Volleyball, competitive',
    met: 8.0,
    category: 'Sports',
  },
  {
    id: 'volleyball_beach',
    name: 'Volleyball, beach, in sand',
    met: 8.0,
    category: 'Sports',
  },
  
  // Swimming activities
  {
    id: 'swimming_leisurely',
    name: 'Swimming, leisurely, not lap swimming',
    met: 6.0,
    category: 'Swimming',
  },
  {
    id: 'swimming_backstroke',
    name: 'Swimming, backstroke, general',
    met: 8.0,
    category: 'Swimming',
  },
  {
    id: 'swimming_breaststroke',
    name: 'Swimming, breaststroke, general',
    met: 10.3,
    category: 'Swimming',
  },
  {
    id: 'swimming_butterfly',
    name: 'Swimming, butterfly, general',
    met: 13.8,
    category: 'Swimming',
  },
  {
    id: 'swimming_crawl',
    name: 'Swimming, crawl, fast',
    met: 10.0,
    category: 'Swimming',
  },
  {
    id: 'swimming_crawl_slow',
    name: 'Swimming, crawl, slow',
    met: 8.0,
    category: 'Swimming',
  },
  {
    id: 'swimming_treading_water',
    name: 'Swimming, treading water, moderate effort',
    met: 3.5,
    category: 'Swimming',
  },
  {
    id: 'water_aerobics',
    name: 'Water aerobics, water calisthenics',
    met: 5.5,
    category: 'Swimming',
  },
  
  // Walking activities
  {
    id: 'walking_leisure',
    name: 'Walking, leisure, 2.0 mph, level surface',
    met: 2.8,
    category: 'Walking',
  },
  {
    id: 'walking_2.5mph',
    name: 'Walking, 2.5 mph, level surface',
    met: 3.0,
    category: 'Walking',
  },
  {
    id: 'walking_3mph',
    name: 'Walking, 3.0 mph, level surface',
    met: 3.5,
    category: 'Walking',
  },
  {
    id: 'walking_3.5mph',
    name: 'Walking, 3.5 mph, level surface',
    met: 4.3,
    category: 'Walking',
  },
  {
    id: 'walking_4mph',
    name: 'Walking, 4.0 mph, level surface, very brisk pace',
    met: 5.0,
    category: 'Walking',
  },
  {
    id: 'walking_4.5mph',
    name: 'Walking, 4.5 mph, level surface',
    met: 6.3,
    category: 'Walking',
  },
  {
    id: 'walking_5mph',
    name: 'Walking, 5.0 mph',
    met: 8.0,
    category: 'Walking',
  },
  {
    id: 'walking_upstairs',
    name: 'Walking, upstairs',
    met: 8.8,
    category: 'Walking',
  },
  {
    id: 'walking_downstairs',
    name: 'Walking, downstairs',
    met: 3.5,
    category: 'Walking',
  },
  {
    id: 'walking_backwards',
    name: 'Walking, backwards, 3.5 mph',
    met: 6.0,
    category: 'Walking',
  },
  {
    id: 'hiking_general',
    name: 'Hiking, general',
    met: 6.0,
    category: 'Walking',
  },
  {
    id: 'backpacking',
    name: 'Backpacking, general',
    met: 7.0,
    category: 'Walking',
  },
  {
    id: 'walking_dog',
    name: 'Walking the dog',
    met: 3.0,
    category: 'Walking',
  },
  
  // Winter activities
  {
    id: 'skiing_downhill_moderate',
    name: 'Skiing, downhill, moderate effort',
    met: 5.3,
    category: 'Winter Activities',
  },
  {
    id: 'skiing_downhill_vigorous',
    name: 'Skiing, downhill, vigorous effort',
    met: 8.0,
    category: 'Winter Activities',
  },
  {
    id: 'skiing_cross_country_light',
    name: 'Skiing, cross country, 2.5 mph, light effort',
    met: 7.0,
    category: 'Winter Activities',
  },
  {
    id: 'skiing_cross_country_moderate',
    name: 'Skiing, cross country, 4.0-4.9 mph, moderate effort',
    met: 9.0,
    category: 'Winter Activities',
  },
  {
    id: 'skiing_cross_country_vigorous',
    name: 'Skiing, cross country, > 5.0 mph, vigorous effort',
    met: 12.5,
    category: 'Winter Activities',
  },
  {
    id: 'snowboarding',
    name: 'Snowboarding, general',
    met: 5.3,
    category: 'Winter Activities',
  },
  {
    id: 'snowshoeing',
    name: 'Snowshoeing',
    met: 10.0,
    category: 'Winter Activities',
  },
  {
    id: 'ice_skating_moderate',
    name: 'Ice skating, moderate effort',
    met: 7.0,
    category: 'Winter Activities',
  },
  
  // Water activities
  {
    id: 'canoeing_leisure',
    name: 'Canoeing, rowing, light effort',
    met: 3.5,
    category: 'Water Activities',
  },
  {
    id: 'canoeing_moderate',
    name: 'Canoeing, rowing, moderate effort',
    met: 7.0,
    category: 'Water Activities',
  },
  {
    id: 'kayaking',
    name: 'Kayaking, moderate effort',
    met: 5.0,
    category: 'Water Activities',
  },
  {
    id: 'paddle_boarding',
    name: 'Paddle boarding, standing',
    met: 6.0,
    category: 'Water Activities',
  },
  {
    id: 'surfing',
    name: 'Surfing, body or board',
    met: 6.0,
    category: 'Water Activities',
  },
  {
    id: 'water_skiing',
    name: 'Water skiing',
    met: 6.0,
    category: 'Water Activities',
  },
  
  // Sedentary activities
  {
    id: 'sleeping',
    name: 'Sleeping',
    met: 0.95,
    category: 'Sedentary',
  },
  {
    id: 'watching_tv',
    name: 'Watching TV',
    met: 1.0,
    category: 'Sedentary',
  },
  {
    id: 'sitting_quietly',
    name: 'Sitting quietly, general',
    met: 1.3,
    category: 'Sedentary',
  },
  {
    id: 'sitting_typing',
    name: 'Sitting, typing/computer work',
    met: 1.5,
    category: 'Sedentary',
  },
  {
    id: 'standing_quietly',
    name: 'Standing quietly',
    met: 1.5,
    category: 'Sedentary',
  },
  {
    id: 'reading_sitting',
    name: 'Reading, sitting',
    met: 1.3,
    category: 'Sedentary',
  },
  {
    id: 'eating_sitting',
    name: 'Eating, sitting',
    met: 1.5,
    category: 'Sedentary',
  },
  {
    id: 'driving_car',
    name: 'Driving a car',
    met: 2.0,
    category: 'Sedentary',
  },
];

// Helper function to get activity categories
export const getActivityCategories = (): string[] => {
  const categories = new Set(metActivityData.map(activity => activity.category));
  return Array.from(categories).sort();
};

// Helper function to get activities by category
export const getActivitiesByCategory = (category: string): Activity[] => {
  return metActivityData.filter(activity => activity.category === category);
};

// Helper function to find activity by ID
export const getActivityById = (id: string): Activity | undefined => {
  return metActivityData.find(activity => activity.id === id);
};

// Helper function to search activities by name
export const searchActivities = (query: string): Activity[] => {
  const lowercaseQuery = query.toLowerCase();
  return metActivityData.filter(activity => 
    activity.name.toLowerCase().includes(lowercaseQuery) ||
    activity.category.toLowerCase().includes(lowercaseQuery)
  );
}; 