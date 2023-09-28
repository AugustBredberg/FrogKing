import { EVOLUTION_ENUM, FROG_ELEMENT_ENUM, FROG_POWERUP_ENUM, FROG_POWERUP_SIDE_EFFECT_ENUM, FrogItem, FrogPowerUpItem, FrogPowerUpSideEffect } from "./items";

///////////////////////////////////////////////////////////
/// FROGS
///////////////////////////////////////////////////////////
export const DEFAULT_FROGS: { [id: string]: FrogItem } = {
  [EVOLUTION_ENUM.TIER1]: {
    id: crypto.randomUUID(),
    name: 'Frog',
    description:
      "A normal, everyday frog. It ribbits. It hops. It eats flies. It's a frog.",
    kind: EVOLUTION_ENUM.TIER1,
    evolves_into: EVOLUTION_ENUM.TIER2,
    level: 1,
    level_multiplier: 0.05,
    production_rate: 2,
    lifetime_tadpoles_produced: 0,
    power_ups: [],
    elementType: {
      [FROG_ELEMENT_ENUM.HOLY]: 0,
      [FROG_ELEMENT_ENUM.DARK]: 0,
      [FROG_ELEMENT_ENUM.UNDEAD]: 0,
    }
  },
  [EVOLUTION_ENUM.TIER2]: {
    id: crypto.randomUUID(),
    name: 'Toad',
    description:
      "A toad. It's a frog, but a toad. It's a little bigger now than before. A few wart-like bumps have appeared on its back. ",
    kind: EVOLUTION_ENUM.TIER2,
    evolves_into: EVOLUTION_ENUM.TIER3,
    level: 1,
    level_multiplier: 0.05,
    production_rate: 4,
    lifetime_tadpoles_produced: 0,
    power_ups: [],
    elementType: {
      [FROG_ELEMENT_ENUM.HOLY]: 0,
      [FROG_ELEMENT_ENUM.DARK]: 0,
      [FROG_ELEMENT_ENUM.UNDEAD]: 0,
    }
  },
  [EVOLUTION_ENUM.TIER3]: {
    id: crypto.randomUUID(),
    name: 'Gecko',
    description:
      "A gecko. It's body is narrower and more sleek than it was. It has a long tongue and can climb walls. An agile little fellow.",
    kind: EVOLUTION_ENUM.TIER3,
    evolves_into: EVOLUTION_ENUM.NO_EVOLUTION,
    level: 1,
    level_multiplier: 0.15,
    production_rate: 6,
    lifetime_tadpoles_produced: 0,
    power_ups: [],
    elementType: {
      [FROG_ELEMENT_ENUM.HOLY]: 0,
      [FROG_ELEMENT_ENUM.DARK]: 0,
      [FROG_ELEMENT_ENUM.UNDEAD]: 0,
    }
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

