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
  qty: number;
  multiplier: number;
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
      qty: 0,
      multiplier: 0 // Cost multiplier
  },
  [POND_ENUM.SPECTACULAR_POND]: {
    id: POND_ENUM.SPECTACULAR_POND,
    name: 'Spectacular pond',
    type: SHOP_ITEM_TYPES.POND,
    cost: 200, // Costs 50 tadpoles
    rate: 0, // Tadpoles per second
    for: INVENTORY_ENUM.TADPOLE, // Costs tadpoles
    qty: 0,
    multiplier: 0 // Cost multiplier
},
};

//export const SHOP: { [id: string]: ShopItem } = POND_SHOP;
export const SHOP: {
  [id: string]: {
    [id: string]: ShopItem
  }
} = {
  [SHOP_ITEM_TYPES.EVOLUTION]: {},
  [SHOP_ITEM_TYPES.LEVELUP]: {},
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


// Things that the user can purchase using tadpoles
// Each FROG Enum binds to all their related shop items (evolutions, level-ups, frogjuice)
/*
export const SHOP: { [id: string]: ShopItem } = {
  [EVOLUTION_ENUM.FROG]: {
      id: EVOLUTION_ENUM.FROG,
      name: 'Evolve tadpole into Frog',
      type: SHOP_ITEM_TYPES.EVOLUTION,
      cost: 20, // Costs 20 tadpoles
      rate: FROGS[EVOLUTION_ENUM.FROG].production_rate, // Tadpoles per second
      for: INVENTORY_ENUM.TADPOLE, // Costs tadpoles
      qty: 0,
      multiplier: 1.05 // Cost multiplier
  },
};

export const LEVELSHOP: { [id: string]: ShopItem } = {
  [EVOLUTION_ENUM.FROG]: {
      id: EVOLUTION_ENUM.FROG,
      name: 'Level up Frog',
      type: SHOP_ITEM_TYPES.LEVELUP,
      cost: 50,
      rate: 1, // 1 tadpoles per second
      for: INVENTORY_ENUM.TADPOLE, // Costs tadpoles
      qty: 0,
      multiplier: 1.05 // Cost multiplier
  },
};
*/

