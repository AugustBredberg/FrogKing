import { EVOLUTION_ENUM, FROG_ELEMENT_ENUM, FROG_POWERUP_ENUM, FROG_POWERUP_SIDE_EFFECT_ENUM, FrogItem, FrogPowerUpItem, FrogPowerUpSideEffect, KING_POWERUP_ENUM, KingPowerUpItem, POND_ENUM, PondItem } from "./items";



///////////////////////////////////////////////////////////
/// FROG KING POWERUPS
///////////////////////////////////////////////////////////
export const DEFAULT_FROG_KING_POWERUPS: { [id: string]: KingPowerUpItem } = {
  [KING_POWERUP_ENUM.ROYAL_RAGE]: {
    name: 'Royal Rage',
    kind: KING_POWERUP_ENUM.ROYAL_RAGE,
    description:
      'The king enters a furious state. Clicking produces tadpoles 10x faster for 30 seconds.',
    statusText: 'Royal Rage!',
    duration: 30, // 5 seconds
    //sideEffects: [],
    productionRateMultiplier: 10,
    expiration: new Date(), // Is set when powerup is used
    effectIsPositive: true,
  }
}

///////////////////////////////////////////////////////////
/// FROGS
///////////////////////////////////////////////////////////
var emptyElements = {
      [FROG_ELEMENT_ENUM.UNDEAD]: 0,
      [FROG_ELEMENT_ENUM.HOLY]: 0,
      [FROG_ELEMENT_ENUM.DARK]: 0,
      [FROG_ELEMENT_ENUM.SPIRIT]: 0,
      [FROG_ELEMENT_ENUM.PSYCHIC]: 0,
      [FROG_ELEMENT_ENUM.MIGHTY]: 0,
    }
export const DEFAULT_FROGS: { [id: string]: FrogItem } = {
  [EVOLUTION_ENUM.TIER1]: {
    id: crypto.randomUUID(),
    name: 'Green Frog',
    description:
      "This is your standard green frog, found in ponds and wetlands. It's a typical amphibian, known for its croaking and jumping abilities.",
    kind: EVOLUTION_ENUM.TIER1,
    evolves_into: EVOLUTION_ENUM.TIER2,
    level: 1,
    level_multiplier: 0.1,
    production_rate: 2,
    lifetime_tadpoles_produced: 0,
    power_ups: [],
    element_type: emptyElements,
    next_possible_element_choices: []
  },
  [EVOLUTION_ENUM.TIER2]: {
    id: crypto.randomUUID(),
    name: 'Red frog',
    description:
      "The frog has undergone a remarkable transformation. Its body is now adorned with vibrant brown-red skin that gives it a fiery appearance. What sets it apart is the striking contrast with its underbelly, which is a brilliant bright orange.",
    kind: EVOLUTION_ENUM.TIER2,
    evolves_into: EVOLUTION_ENUM.TIER3,
    level: 1,
    level_multiplier: 0.1,
    production_rate: 8,
    lifetime_tadpoles_produced: 0,
    power_ups: [],
    element_type: emptyElements,
    next_possible_element_choices: []
  },
  [EVOLUTION_ENUM.TIER3]: {
    id: crypto.randomUUID(),
    name: 'Gigantoad',
    description:
      "The frog has undergone a mutation, growing to the size of a cat. Its sheer size is intimidating, but it still retains the appearance of a typical frog.",
    kind: EVOLUTION_ENUM.TIER3,
    evolves_into: EVOLUTION_ENUM.TIER4,
    level: 1,
    level_multiplier: 0.1,
    production_rate: 36,
    lifetime_tadpoles_produced: 0,
    power_ups: [],
    element_type: emptyElements,
    next_possible_element_choices: []
  },
  [EVOLUTION_ENUM.TIER4]: {
    id: crypto.randomUUID(),
    name: 'Scholarly Frog',
    description:
      "The Gigantoad's mutation extends to its brain, allowing it to formulate croak-like words. It can now produce rudimentary vocalizations, indicating the first signs of advanced intelligence.",
    kind: EVOLUTION_ENUM.TIER4,
    evolves_into: EVOLUTION_ENUM.TIER5,
    level: 1,
    level_multiplier: 0.1,
    production_rate: 128,
    lifetime_tadpoles_produced: 0,
    power_ups: [],
    element_type: emptyElements,
    next_possible_element_choices: []
  },
  [EVOLUTION_ENUM.TIER5]: {
    id: crypto.randomUUID(),
    name: 'Ingenious Amphibian',
    description:
      "The Scholarly Frog's development continues, enabling it to use its two front legs as hands. It has learned to craft simple tools and even communicate with humans, albeit in a limited fashion.",
    kind: EVOLUTION_ENUM.TIER5,
    evolves_into: EVOLUTION_ENUM.TIER6,
    level: 1,
    level_multiplier: 0.1,
    production_rate: 256,
    lifetime_tadpoles_produced: 0,
    power_ups: [],
    element_type: emptyElements,
    next_possible_element_choices: []
  },
  [EVOLUTION_ENUM.TIER6]: {
    id: crypto.randomUUID(),
    name: 'Sage of the Marsh',
    description:
      "The Ingenious Amphibian's intelligence flourishes, and it begins offering valuable insights to humans from a nearby village. They seek wisdom and guidance from this extraordinary frog, elevating its status.",
    kind: EVOLUTION_ENUM.TIER6,
    evolves_into: EVOLUTION_ENUM.TIER7,
    level: 1,
    level_multiplier: 0.1,
    production_rate: 512,
    lifetime_tadpoles_produced: 0,
    power_ups: [],
    element_type: emptyElements,
    next_possible_element_choices: []
  },
  [EVOLUTION_ENUM.TIER7]: {
    id: crypto.randomUUID(),
    name: 'Frogdom\'s Elected Ruler',
    description:
      "The Sage of the Marsh's wisdom becomes legendary, and humans elect the frog as their leader. It serves as a symbol of unity and wisdom, guiding the village and fostering peace among its inhabitants.",
    kind: EVOLUTION_ENUM.TIER7,
    evolves_into: EVOLUTION_ENUM.TIER8,
    level: 1,
    level_multiplier: 0.1,
    production_rate: 1024,
    lifetime_tadpoles_produced: 0,
    power_ups: [],
    element_type: emptyElements,
    next_possible_element_choices: []
  },
  [EVOLUTION_ENUM.TIER8]: {
    id: crypto.randomUUID(),
    name: 'Amphibian Archmage',
    description:
      "The Frogdom's Elected Ruler's wisdom transcends the ordinary. It gains the power to levitate and manipulate matter with its thoughts. Rocks and trees bend to its will, making it a revered figure in the world of mysticism.",
    kind: EVOLUTION_ENUM.TIER8,
    evolves_into: EVOLUTION_ENUM.TIER9,
    level: 1,
    level_multiplier: 0.1,
    production_rate: 2048,
    lifetime_tadpoles_produced: 0,
    power_ups: [],
    element_type: emptyElements,
    next_possible_element_choices: []
  },
  [EVOLUTION_ENUM.TIER9]: {
    id: crypto.randomUUID(),
    name: 'Celestial Amphibian',
    description:
      "The Amphibian Archmage's abilities reach cosmic proportions. It can now traverse the stars, communicate with extraterrestrial beings, and influence the very fabric of the universe, becoming a being of profound cosmic significance.",
    kind: EVOLUTION_ENUM.TIER9,
    evolves_into: EVOLUTION_ENUM.TIER10,
    level: 1,
    level_multiplier: 0.1,
    production_rate: 4096,
    lifetime_tadpoles_produced: 0,
    power_ups: [],
    element_type: emptyElements,
    next_possible_element_choices: []
  },
  [EVOLUTION_ENUM.TIER10]: {
    id: crypto.randomUUID(),
    name: 'Frogdivinity',
    description:
      "The Celestial Amphibian ascends to god-like status, shaping worlds and dimensions with its boundless power. It has become a deity worshiped by beings across the cosmos, embodying the ultimate frog-like entity, a symbol of creation and wisdom beyond mortal comprehension.",
    kind: EVOLUTION_ENUM.TIER10,
    evolves_into: EVOLUTION_ENUM.TIER11,
    level: 1,
    level_multiplier: 0.1,
    production_rate: 8192,
    lifetime_tadpoles_produced: 0,
    power_ups: [],
    element_type: emptyElements,
    next_possible_element_choices: []
  },
  [EVOLUTION_ENUM.TIER11]: {
    id: crypto.randomUUID(),
    name: 'Azathoth, the Froggod',
    description:
      "Azathoth is an eldritch deity in the form of a colossal, writhing frog. Its gaping maw consumes entire galaxies, and its croak births new universes. It exists beyond comprehension, a nightmare made flesh—or in this case, amphibian.",
    kind: EVOLUTION_ENUM.TIER11,
    evolves_into: EVOLUTION_ENUM.NO_EVOLUTION,
    level: 1,
    level_multiplier: 0.1,
    production_rate: 16384,
    lifetime_tadpoles_produced: 0,
    power_ups: [],
    element_type: emptyElements,
    next_possible_element_choices: []
  },
};


///////////////////////////////////////////////////////////
/// FROG POWERUPS
///////////////////////////////////////////////////////////
export const DEFAULT_FROGPOWERUPS: { [id: string]: FrogPowerUpItem } = {
  [FROG_POWERUP_ENUM.FROGROIDS]: {
    name: 'Frogroids',
    kind: FROG_POWERUP_ENUM.FROGROIDS,
    description:
      "Enhance a frog with frogroids. They'll be more productive for a while. But be careful, they might die afterwards.",
    statusText: 'Frog is roided up!',
    duration: 5, // 5 seconds
    sideEffects: [
      FROG_POWERUP_SIDE_EFFECT_ENUM.DIE,
      FROG_POWERUP_SIDE_EFFECT_ENUM.LOSE_ALL_LEVELS,
    ],
    productionRateMultiplier: 3,
    expiration: new Date(), // Is set when powerup is used
    effectIsPositive: true,
  },
  [FROG_POWERUP_ENUM.FRODKA]: {
    name: 'Frodka',
    kind: FROG_POWERUP_ENUM.FRODKA,
    description:
      "Treat your frog to some frog vodka. They'll produce more tadpoles for a while, but when the effect wears off they might fall asleep.",
    statusText: 'Frog is drunk!',
    duration: 5, // 5 seconds
    sideEffects: [FROG_POWERUP_SIDE_EFFECT_ENUM.SLEEP],
    productionRateMultiplier: 1.5,
    expiration: new Date(), // Is set when powerup is used
    effectIsPositive: true,
  },
  [FROG_POWERUP_ENUM.FRABIES]: {
    name: 'Frabies',
    kind: FROG_POWERUP_ENUM.FRABIES,
    description:
      "Inject your frog with frog rabies. They'll produce more tadpoles for a while, but when the effect wears off they get weak for a while",
    statusText: 'Frog is rabid!',
    duration: 5, // 5 seconds
    sideEffects: [FROG_POWERUP_SIDE_EFFECT_ENUM.REDUCE_PRODUCTION_RATE],
    productionRateMultiplier: 1.5,
    expiration: new Date(), // Is set when powerup is used
    effectIsPositive: true,
  },

  ///// NEGATIVE POWERUPS /////
  [FROG_POWERUP_ENUM.SLEEPING]: {
    name: 'Sleeping',
    kind: FROG_POWERUP_ENUM.SLEEPING,
    description: 'Frog is asleep.',
    statusText: 'Frog is asleep!',
    duration: 60, // 60 seconds
    sideEffects: [],
    productionRateMultiplier: 0,
    expiration: new Date(), // Is set when powerup is used
    effectIsPositive: false,
  },
  [FROG_POWERUP_ENUM.WEAK]: {
    name: 'Weak',
    kind: FROG_POWERUP_ENUM.WEAK,
    description: 'Frog is weak, production rate is halved.',
    statusText: 'Frog is weak!',
    duration: 30, // 60 seconds
    sideEffects: [],
    productionRateMultiplier: 0.5,
    expiration: new Date(), // Is set when powerup is used
    effectIsPositive: false,
  },
};

export const DEFAULT_FROGPOWERUPS_SIDE_EFFECTS: {
  [id: string]: FrogPowerUpSideEffect;
} = {
  [FROG_POWERUP_SIDE_EFFECT_ENUM.DIE]: {
    name: 'Die',
    kind: FROG_POWERUP_SIDE_EFFECT_ENUM.DIE,
    description: 'Risk of frog dying.',
    risk: 0.2, // 20% chance of dying
  },
  [FROG_POWERUP_SIDE_EFFECT_ENUM.LOSE_ALL_LEVELS]: {
    name: 'Lose all levels',
    kind: FROG_POWERUP_SIDE_EFFECT_ENUM.LOSE_ALL_LEVELS,
    description: 'Risk that frog loses all levels.',
    risk: 0.5, // 50% chance of losing all levels
  },
  [FROG_POWERUP_SIDE_EFFECT_ENUM.SLEEP]: {
    name: 'Sleep',
    kind: FROG_POWERUP_SIDE_EFFECT_ENUM.SLEEP,
    description: 'Risk that frog falls asleep.',
    risk: 0.7, // 70% chance of falling asleep
  },
  [FROG_POWERUP_SIDE_EFFECT_ENUM.REDUCE_PRODUCTION_RATE]: {
    name: 'Reduce production rate',
    kind: FROG_POWERUP_SIDE_EFFECT_ENUM.REDUCE_PRODUCTION_RATE,
    description: "Risk that the frog's production rate is halved.",
    risk: 1, // 100% chance of reducing production rate
  },
};


export const DEFAULT_PONDS: { [id: string]: PondItem } = {
  [POND_ENUM.WATER_GLASS]: {
    id: POND_ENUM.WATER_GLASS,
    kind: POND_ENUM.WATER_GLASS,
    description: 'A glass of water.',
    name: 'Glass of Water',
    frog_capacity: 1,
    next_pond: POND_ENUM.TOILET,
  },
  [POND_ENUM.TOILET]: {
    id: POND_ENUM.TOILET,
    kind: POND_ENUM.TOILET,
    description: 'A low flow toilet.',
    name: 'Toilet',
    frog_capacity: 1,
    next_pond: POND_ENUM.SIMPLE_POND,
  },
  [POND_ENUM.SIMPLE_POND]: {
    id: POND_ENUM.SIMPLE_POND,
    kind: POND_ENUM.SIMPLE_POND,
    description: 'A simple pond.',
    name: 'Simple pond',
    frog_capacity: 2,
    next_pond: POND_ENUM.FANCY_POND,
  },
  [POND_ENUM.FANCY_POND]: {
    id: POND_ENUM.FANCY_POND,
    kind: POND_ENUM.FANCY_POND,
    description: 'A fancy pond.',
    name: 'Fancy pond',
    frog_capacity: 3,
    next_pond: POND_ENUM.SPECTACULAR_POND,
  },
  [POND_ENUM.SPECTACULAR_POND]: {
    id: POND_ENUM.SPECTACULAR_POND,
    kind: POND_ENUM.SPECTACULAR_POND,
    description: 'A spectacular pond.',
    name: 'Spectacular pond',
    frog_capacity: 4,
    next_pond: POND_ENUM.NO_UPGRADE,
  },
};

