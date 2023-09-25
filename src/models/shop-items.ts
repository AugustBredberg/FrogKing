import { Item, INVENTORY_ENUM, EVOLUTION_ENUM, DEFAULT_FROGS, POND_ENUM, PondItem } from './items';

export enum SHOP_ITEM_TYPES {
    EVOLUTION, // Evolves a specific frog
    LEVELUP, // Levels up a specific frog
    FROGJUICE, // Powers up the frog type that the juice is applied on (e.g. Frog Juice, Toad Juice)
    POND // Increases the capacity of the pond
}

export interface ShopItem extends Item {
  id: number;
  type: SHOP_ITEM_TYPES;
  rate: number;
  for: INVENTORY_ENUM;
  cost_multiplier: number;
  cost: number;
}

export const POND_SHOP: { [id: string]: ShopItem } = {
  [POND_ENUM.FANCY_POND]: {
      id: POND_ENUM.FANCY_POND,
      name: 'Fancy pond',
      type: SHOP_ITEM_TYPES.POND,
      cost: 50, // Costs 50 tadpoles
      rate: 0, // Tadpoles per second
      for: INVENTORY_ENUM.TADPOLE, // Costs tadpoles
      cost_multiplier: 0 // Cost multiplier
  },
  [POND_ENUM.SPECTACULAR_POND]: {
    id: POND_ENUM.SPECTACULAR_POND,
    name: 'Spectacular pond',
    type: SHOP_ITEM_TYPES.POND,
    cost: 200, // Costs 50 tadpoles
    rate: 0, // Tadpoles per second
    for: INVENTORY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0 // Cost multiplier
  },
};

// Each FROG Enum binds to all their related shop items (evolutions, level-ups, frogjuice)
export const EVOLUTION_SHOP: { [id: string]: ShopItem } = {
  [EVOLUTION_ENUM.FROG]: {
      id: EVOLUTION_ENUM.FROG,
      name: 'Evolve tadpole into Frog',
      type: SHOP_ITEM_TYPES.EVOLUTION,
      cost: 20, // Costs 20 tadpoles
      rate: DEFAULT_FROGS[EVOLUTION_ENUM.FROG].production_rate, // Tadpoles per second
      for: INVENTORY_ENUM.TADPOLE, // Costs tadpoles
      cost_multiplier: 0 // Cost multiplier
  },
  [EVOLUTION_ENUM.TOAD]: {
      id: EVOLUTION_ENUM.TOAD,
      name: 'Evolve Frog into Toad',
      type: SHOP_ITEM_TYPES.EVOLUTION,
      cost: 100, // Costs 100 tadpoles
      rate: DEFAULT_FROGS[EVOLUTION_ENUM.TOAD].production_rate, // Tadpoles per second
      for: INVENTORY_ENUM.TADPOLE, // Costs tadpoles
      cost_multiplier: 0 // Cost multiplier
  },
  [EVOLUTION_ENUM.GECKO]: {
      id: EVOLUTION_ENUM.GECKO,
      name: 'Evolve Frog into Gecko',
      type: SHOP_ITEM_TYPES.EVOLUTION,
      cost: 100, // Costs 100 tadpoles
      rate: DEFAULT_FROGS[EVOLUTION_ENUM.GECKO].production_rate, // Tadpoles per second
      for: INVENTORY_ENUM.TADPOLE, // Costs tadpoles
      cost_multiplier: 0 // Cost multiplier
  },
};


export const LEVELSHOP: { [id: string]: ShopItem } = {
  [EVOLUTION_ENUM.FROG]: {
      id: EVOLUTION_ENUM.FROG,
      name: 'Level up Frog',
      type: SHOP_ITEM_TYPES.LEVELUP,
      cost: 30,
      rate: 0, // 0 tadpoles per second
      for: INVENTORY_ENUM.TADPOLE, // Costs tadpoles
      cost_multiplier: 0.05 // Cost multiplier
  },
  [EVOLUTION_ENUM.TOAD]: {
      id: EVOLUTION_ENUM.TOAD,
      name: 'Level up Toad',
      type: SHOP_ITEM_TYPES.LEVELUP,
      cost: 100,
      rate: 0, // 0 tadpoles per second
      for: INVENTORY_ENUM.TADPOLE, // Costs tadpoles
      cost_multiplier: 0.05 // Cost multiplier
  },
  [EVOLUTION_ENUM.GECKO]: {
      id: EVOLUTION_ENUM.GECKO,
      name: 'Level up Gecko',
      type: SHOP_ITEM_TYPES.LEVELUP,
      cost: 80,
      rate: 0, // 0 tadpoles per second
      for: INVENTORY_ENUM.TADPOLE, // Costs tadpoles
      cost_multiplier: 0.05 // Cost multiplier
  },
};

export const SHOP: {
  [id: string]: {
    [id: string]: ShopItem
  }
} = {
  [SHOP_ITEM_TYPES.EVOLUTION]: EVOLUTION_SHOP,
  [SHOP_ITEM_TYPES.LEVELUP]: LEVELSHOP,
  [SHOP_ITEM_TYPES.FROGJUICE]: {},
  [SHOP_ITEM_TYPES.POND]: POND_SHOP
}

export const INITIAL_SHOP: {
  [id: string]: {
    [id: string]: ShopItem
  }
} = {
  [SHOP_ITEM_TYPES.EVOLUTION]: {},
  [SHOP_ITEM_TYPES.LEVELUP]: {},
  [SHOP_ITEM_TYPES.FROGJUICE]: {},
  [SHOP_ITEM_TYPES.POND]: {
    [POND_ENUM.FANCY_POND]: POND_SHOP[POND_ENUM.FANCY_POND]
  }
}







