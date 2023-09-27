export interface Item {
  name: string;
}

export enum CURRENCY_ENUM {
  TADPOLE,
  FROGITEM,
}
////////////////////////////////////////////////////////////
/// FROGS
////////////////////////////////////////////////////////////
export interface FrogItem extends Item {
  id: string;
  description: string;
  kind: EVOLUTION_ENUM;
  evolves_into: EVOLUTION_ENUM[];
  level: number;
  level_multiplier: number;
  production_rate: number;
  power_ups: FrogPowerUpItem[];
}
export enum EVOLUTION_ENUM {
  TIER1,
  TIER2,
  TIER3,
}
export const DEFAULT_FROGS: { [id: string]: FrogItem } = {
  [EVOLUTION_ENUM.TIER1]: {
    id: crypto.randomUUID(),
    name: 'Frog',
    description:
      "A normal, everyday frog. It ribbits. It hops. It eats flies. It's a frog.",
    kind: EVOLUTION_ENUM.TIER1,
    evolves_into: [EVOLUTION_ENUM.TIER2],
    level: 1,
    level_multiplier: 0.05,
    production_rate: 2,
    power_ups: [],
  },
  [EVOLUTION_ENUM.TIER2]: {
    id: crypto.randomUUID(),
    name: 'Toad',
    description:
      "A toad. It's a frog, but a toad. It's a little bigger now than before. A few wart-like bumps have appeared on its back. ",
    kind: EVOLUTION_ENUM.TIER2,
    evolves_into: [EVOLUTION_ENUM.TIER3],
    level: 1,
    level_multiplier: 0.05,
    production_rate: 4,
    power_ups: [],
  },
  [EVOLUTION_ENUM.TIER3]: {
    id: crypto.randomUUID(),
    name: 'Gecko',
    description:
      "A gecko. It's body is narrower and more sleek than it was. It has a long tongue and can climb walls. An agile little fellow.",
    kind: EVOLUTION_ENUM.TIER3,
    evolves_into: [],
    level: 1,
    level_multiplier: 0.15,
    production_rate: 6,
    power_ups: [],
  },
};

////////////////////////////////////////////////////////////
/// PONDS
////////////////////////////////////////////////////////////
export interface PondItem extends Item {
  kind: POND_ENUM;
  tadpole_capacity: number;
  frog_capacity: number;
  next_pond: POND_ENUM;
}
export enum POND_ENUM {
  SIMPLE_POND,
  FANCY_POND,
  SPECTACULAR_POND,
  NO_UPGRADE = -1,
}
export const PONDS: { [id: string]: PondItem } = {
  [POND_ENUM.SIMPLE_POND]: {
    kind: POND_ENUM.SIMPLE_POND,
    name: 'Simple pond',
    tadpole_capacity: 50,
    frog_capacity: 2,
    next_pond: POND_ENUM.FANCY_POND,
  },
  [POND_ENUM.FANCY_POND]: {
    kind: POND_ENUM.FANCY_POND,
    name: 'Fancy pond',
    tadpole_capacity: 200,
    frog_capacity: 3,
    next_pond: POND_ENUM.SPECTACULAR_POND,
  },
  [POND_ENUM.SPECTACULAR_POND]: {
    kind: POND_ENUM.SPECTACULAR_POND,
    name: 'Spectacular pond',
    tadpole_capacity: 500,
    frog_capacity: 4,
    next_pond: POND_ENUM.NO_UPGRADE,
  },
};

////////////////////////////////////////////////////////////
/// POWERUPS
////////////////////////////////////////////////////////////
export interface FrogPowerUpItem extends Item {
  name: string;
  kind: FROG_POWERUP_ENUM;
  description: string;
  duration: number; // In seconds
  sideEffects: FROG_POWERUP_SIDE_EFFECT_ENUM[];
  productionRateMultiplier: number;
  expiration: Date; // Is set when powerup is used
}
export interface FrogPowerUpSideEffect extends Item {
  name: string;
  kind: FROG_POWERUP_SIDE_EFFECT_ENUM;
  description: string;
  risk: number; // 0-1
}
export enum FROG_POWERUP_ENUM {
  FROGROIDS,
  FRODKA,
  FRABIES,
  ///// NEGATIVE POWERUPS /////
  SLEEPING,
  WEAK
}
export enum FROG_POWERUP_SIDE_EFFECT_ENUM {
  DIE,
  LOSE_ALL_LEVELS,
  SLEEP,
  REDUCE_PRODUCTION_RATE,
}
export const DEFAULT_FROGPOWERUPS: { [id: string]: FrogPowerUpItem } = {
  [FROG_POWERUP_ENUM.FROGROIDS]: {
    name: 'Frogroids',
    kind: FROG_POWERUP_ENUM.FROGROIDS,
    description:
      "Enhance a frog with frogroids. They'll be more productive for a while. But be careful, they might die afterwards.",
    duration: 5, // 5 seconds
    sideEffects: [FROG_POWERUP_SIDE_EFFECT_ENUM.DIE, FROG_POWERUP_SIDE_EFFECT_ENUM.LOSE_ALL_LEVELS],
    productionRateMultiplier: 3,
    expiration: new Date(), // Is set when powerup is used
  },
  [FROG_POWERUP_ENUM.FRODKA]: {
    name: 'Frodka',
    kind: FROG_POWERUP_ENUM.FRODKA,
    description:
      "Treat your frog to some frog vodka. They'll produce more tadpoles for a while, but when the effect wears off they might fall asleep.",
    duration: 5, // 5 seconds
    sideEffects: [FROG_POWERUP_SIDE_EFFECT_ENUM.SLEEP],
    productionRateMultiplier: 1.5,
    expiration: new Date(), // Is set when powerup is used
  },
  [FROG_POWERUP_ENUM.FRABIES]: {
    name: 'Frabies',
    kind: FROG_POWERUP_ENUM.FRABIES,
    description:
      "Inject your frog with frog rabies. They'll produce more tadpoles for a while, but when the effect wears off they get weak for a while",
    duration: 5, // 5 seconds
    sideEffects: [FROG_POWERUP_SIDE_EFFECT_ENUM.REDUCE_PRODUCTION_RATE],
    productionRateMultiplier: 1.5,
    expiration: new Date(), // Is set when powerup is used
  },


  ///// NEGATIVE POWERUPS /////
  [FROG_POWERUP_ENUM.SLEEPING]: {
    name: 'Sleeping',
    kind: FROG_POWERUP_ENUM.SLEEPING,
    description:
      "Frog is asleep.",
    duration: 60, // 60 seconds
    sideEffects: [],
    productionRateMultiplier: 0,
    expiration: new Date(), // Is set when powerup is used
  },
  [FROG_POWERUP_ENUM.WEAK]: {
    name: 'Weak',
    kind: FROG_POWERUP_ENUM.WEAK,
    description:
      "Frog is weak, production rate is halved.",
    duration: 30, // 60 seconds
    sideEffects: [],
    productionRateMultiplier: 0.5,
    expiration: new Date(), // Is set when powerup is used
  },
};
export const DEFAULT_FROGPOWERUPS_SIDE_EFFECTS: { [id: string]: FrogPowerUpSideEffect } = {
  [FROG_POWERUP_SIDE_EFFECT_ENUM.DIE]: {
    name: 'Die',
    kind: FROG_POWERUP_SIDE_EFFECT_ENUM.DIE,
    description: 'The frog dies.',
    risk: 0.2, // 20% chance of dying
  },
  [FROG_POWERUP_SIDE_EFFECT_ENUM.LOSE_ALL_LEVELS]: {
    name: 'Lose all levels',
    kind: FROG_POWERUP_SIDE_EFFECT_ENUM.LOSE_ALL_LEVELS,
    description: 'The frog loses all levels.',
    risk: 0.5, // 50% chance of losing all levels
  },
  [FROG_POWERUP_SIDE_EFFECT_ENUM.SLEEP]: {
    name: 'Sleep',
    kind: FROG_POWERUP_SIDE_EFFECT_ENUM.SLEEP,
    description: 'The frog falls asleep.',
    risk: 0.7, // 70% chance of falling asleep
  },
  [FROG_POWERUP_SIDE_EFFECT_ENUM.REDUCE_PRODUCTION_RATE]: {
    name: 'Reduce production rate',
    kind: FROG_POWERUP_SIDE_EFFECT_ENUM.REDUCE_PRODUCTION_RATE,
    description: 'The frog\'s production rate is halved.',
    risk: 1, // 100% chance of reducing production rate
  },
};

