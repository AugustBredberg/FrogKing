export interface Item {
  name: string;
}

export enum CURRENCY_ENUM {
  TADPOLE,
  FROGITEM,
}

export interface FrogKing {
  tadpolesPerClick: number;
  level: number;
  powerUps: KingPowerUpItem[];
}
export enum KING_ACTIONS {
  LEVELUP,
  POWERUP
}
export enum KING_POWERUP_ENUM {
  ROYAL_RAGE,
}
export interface KingPowerUpItem extends Item {
  name: string;
  kind: KING_POWERUP_ENUM;
  description: string;
  statusText: string;
  duration: number; // In seconds
  //sideEffects: KING_POWERUP_SIDE_EFFECT_ENUM[];
  productionRateMultiplier: number;
  expiration: Date; // Is set when powerup is used
  effectIsPositive: boolean;
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
  element_type: { [id: string]: number }; // Example: { [FROG_ELEMENT_ENUM.HOLY]: 2, [FROG_ELEMENT_ENUM.DARK]: 1 }
  next_possible_element_choices: FROG_ELEMENT_ENUM[];
}
export enum EVOLUTION_ENUM {
  TIER1 = 1,
  TIER2,
  TIER3,
  TIER4,
  TIER5,
  TIER6,
  TIER7,
  TIER8,
  TIER9,
  TIER10,
  TIER11,

  NO_EVOLUTION,
}
export enum FROG_ELEMENT_ENUM {
  //FIRE,
  //PSYCHIC,
  UNDEAD = 'Undead', // Can't be affected by positive powerups. Can't die?
  HOLY = 'Holy', // Less likely to die. Can't be affected by negative powerups
  DARK = 'Dark', // Powerful, but might kill other frogs
  SPIRIT = 'Spirit', // Can't be affected by negative powerups
  PSYCHIC = 'Psychic', // Produces more tadpoles
  MIGHTY = 'Mighty', // Less likely to die
  NONE = '', // No element
}

////////////////////////////////////////////////////////////
/// PONDS
////////////////////////////////////////////////////////////
export interface PondItem extends Item {
  id: number;
  kind: POND_ENUM;
  description: string;
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

////////////////////////////////////////////////////////////
/// POWERUPS
////////////////////////////////////////////////////////////
export interface FrogPowerUpItem extends Item {
  name: string;
  kind: FROG_POWERUP_ENUM;
  description: string;
  statusText: string;
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
  FROGROIDS = 1,
  FRODKA = 2,
  FRABIES = 3,
  ///// NEGATIVE POWERUPS /////
  SLEEPING = -1,
  WEAK = -2,
}
export enum FROG_POWERUP_SIDE_EFFECT_ENUM {
  DIE,
  LOSE_ALL_LEVELS,
  SLEEP,
  REDUCE_PRODUCTION_RATE,
}
