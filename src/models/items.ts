

export interface Item {
  name: string;
}

export interface FrogItem extends Item {
  id: string,
  description: string;
  kind: EVOLUTION_ENUM;
  evolves_into: EVOLUTION_ENUM[];
  level: number;
  level_multiplier: number;
  production_rate: number;
}

export interface PondItem extends Item {
  kind: POND_ENUM;
  tadpole_capacity: number;
  frog_capacity: number;
  next_pond: POND_ENUM;
}

export enum INVENTORY_ENUM {
  TADPOLE,
  FROGITEM
}


export enum EVOLUTION_ENUM {
  FROG,
  TOAD,
  GECKO
}

export enum POND_ENUM {
  SIMPLE_POND,
  FANCY_POND,
  SPECTACULAR_POND,
  NO_UPGRADE = -1
}

export const DEFAULT_FROGS: { [id: string]: FrogItem } = {
  [EVOLUTION_ENUM.FROG]: {
      id: crypto.randomUUID(),
      name: 'Frog',
      description: 'A normal, everyday frog. It ribbits. It hops. It eats flies. It\'s a frog.',
      kind: EVOLUTION_ENUM.FROG,
      evolves_into: [EVOLUTION_ENUM.TOAD, EVOLUTION_ENUM.GECKO],
      level: 1,
      level_multiplier: 0.05,
      production_rate: 2
  },
  [EVOLUTION_ENUM.TOAD]: {
    id: crypto.randomUUID(),
    name: 'Toad',
    description: 'A toad. It\'s a frog, but a toad. It\'s a little bigger now than before. A few wart-like bumps have appeared on its back. ',
    kind: EVOLUTION_ENUM.TOAD,
    evolves_into: [],
    level: 1,
    level_multiplier: 0.05,
    production_rate: 10
  },
  [EVOLUTION_ENUM.GECKO]: {
    id: crypto.randomUUID(),
    name: 'Gecko',
    description: 'A gecko. It\'s body is narrower and more sleek than it was. It has a long tongue and can climb walls. An agile little fellow.',
    kind: EVOLUTION_ENUM.GECKO,
    evolves_into: [],
    level: 1,
    level_multiplier: 0.15,
    production_rate: 7
  }
};

export const PONDS: { [id: string]: PondItem } = {
  [POND_ENUM.SIMPLE_POND]: {
      kind: POND_ENUM.SIMPLE_POND,
      name: 'Simple pond',
      tadpole_capacity: 50,
      frog_capacity: 2,
      next_pond: POND_ENUM.FANCY_POND
  },
  [POND_ENUM.FANCY_POND]: {
    kind: POND_ENUM.FANCY_POND,
    name: 'Fancy pond',
    tadpole_capacity: 200,
    frog_capacity: 3,
    next_pond: POND_ENUM.SPECTACULAR_POND
  },
  [POND_ENUM.SPECTACULAR_POND]: {
    kind: POND_ENUM.SPECTACULAR_POND,
    name: 'Spectacular pond',
    tadpole_capacity: 500,
    frog_capacity: 4,
    next_pond: POND_ENUM.NO_UPGRADE
  },
};
