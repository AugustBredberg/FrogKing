

export interface Item {
  id: number;
  name: string;
}

export interface FrogItem extends Item {
  evolves_into: EVOLUTION_ENUM[];
  count: number;
  level: number;
  level_multiplier: number;
  production_rate: number;
}

export interface PondItem extends Item {
  tadpole_capacity: number;
  frog_capacity: number;
}

export enum INVENTORY_ENUM {
  TADPOLE,
  FROGITEM
}


export enum EVOLUTION_ENUM {
  FROG,
  TOAD
}

export enum POND_ENUM {
  SIMPLE_POND,
  FANCY_POND
}

export const FROGS: { [id: string]: FrogItem } = {
  [EVOLUTION_ENUM.FROG]: {
      id: EVOLUTION_ENUM.FROG,
      name: 'Frog',
      evolves_into: [EVOLUTION_ENUM.TOAD],
      count: 0,
      level: 1,
      level_multiplier: 0.05,
      production_rate: 2
  },
  [EVOLUTION_ENUM.TOAD]: {
    id: EVOLUTION_ENUM.TOAD,
    name: 'Toad',
    evolves_into: [],
    count: 0,
    level: 1,
    level_multiplier: 0.05,
    production_rate: 10
}
};

export const PONDS: { [id: string]: PondItem } = {
  [POND_ENUM.SIMPLE_POND]: {
      id: POND_ENUM.SIMPLE_POND,
      name: 'Simple pond',
      tadpole_capacity: 50,
      frog_capacity: 2,
  },
  [POND_ENUM.FANCY_POND]: {
    id: POND_ENUM.FANCY_POND,
    name: 'Fancy pond',
    tadpole_capacity: 200,
    frog_capacity: 3,
},
};
