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
  evolves_into: EVOLUTION_ENUM;
  level: number;
  level_multiplier: number;
  production_rate: number;
  lifetime_tadpoles_produced: number;
  power_ups: FrogPowerUpItem[];
  elementType: { [id: string]: number } // Example: { [FROG_ELEMENT_ENUM.HOLY]: 2, [FROG_ELEMENT_ENUM.DARK]: 1 }
}
export enum EVOLUTION_ENUM {
  TIER1,
  TIER2,
  TIER3,

  NO_EVOLUTION
}
export enum FROG_ELEMENT_ENUM {
  //FIRE,
  //PSYCHIC,
  HOLY, // Less likely to die. Can't be affected by negative powerups
  DARK, // Powerful, but might kill other frogs
  UNDEAD, // Can't be affected by positive powerups. Can't die?


  NONE // No element
}


////////////////////////////////////////////////////////////
/// PONDS
////////////////////////////////////////////////////////////
export interface PondItem extends Item {
  id: number;
  kind: POND_ENUM;
  description: string;
  tadpole_capacity: number;
  frog_capacity: number;
  next_pond: POND_ENUM;
}
export enum POND_ENUM {
  WATER_GLASS,
  TOILET,
  SIMPLE_POND,
  FANCY_POND,
  SPECTACULAR_POND,
  NO_UPGRADE = -1,
}
export const PONDS: { [id: string]: PondItem } = {
  [POND_ENUM.WATER_GLASS]: {
    id: POND_ENUM.WATER_GLASS,
    kind: POND_ENUM.WATER_GLASS,
    description: 'A glass of water.',
    name: 'Glass of Water',
    tadpole_capacity: 50,
    frog_capacity: 1,
    next_pond: POND_ENUM.TOILET,
  },
  [POND_ENUM.TOILET]: {
    id: POND_ENUM.TOILET,
    kind: POND_ENUM.TOILET,
    description: 'A low flow toilet.',
    name: 'Toilet',
    tadpole_capacity: 200,
    frog_capacity: 1,
    next_pond: POND_ENUM.SIMPLE_POND,
  },
  [POND_ENUM.SIMPLE_POND]: {
    id: POND_ENUM.SIMPLE_POND,
    kind: POND_ENUM.SIMPLE_POND,
    description: 'A simple pond.',
    name: 'Simple pond',
    tadpole_capacity: 500,
    frog_capacity: 2,
    next_pond: POND_ENUM.FANCY_POND,
  },
  [POND_ENUM.FANCY_POND]: {
    id: POND_ENUM.FANCY_POND,
    kind: POND_ENUM.FANCY_POND,
    description: 'A fancy pond.',
    name: 'Fancy pond',
    tadpole_capacity: 200,
    frog_capacity: 3,
    next_pond: POND_ENUM.SPECTACULAR_POND,
  },
  [POND_ENUM.SPECTACULAR_POND]: {
    id: POND_ENUM.SPECTACULAR_POND,
    kind: POND_ENUM.SPECTACULAR_POND,
    description: 'A spectacular pond.',
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
  effectIsPositive: boolean;
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
  WEAK,
}
export enum FROG_POWERUP_SIDE_EFFECT_ENUM {
  DIE,
  LOSE_ALL_LEVELS,
  SLEEP,
  REDUCE_PRODUCTION_RATE,
}

