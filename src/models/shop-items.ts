import {
  Item,
  CURRENCY_ENUM,
} from './items';

export enum SHOP_ITEM_TYPES {
  EVOLUTION, // Evolves a specific frog
  KINGLEVELUP, // Levels up the king
  KINGPOWERUP, // Levels up the king
  FROGLEVELUP, // Levels up a specific frog
  FROGPOWERUP, // Powers up the frog type that it is applied on (e.g. Runners shoes, FrogRoids, etc.)
  POND, // Increases the capacity of the pond
}

export interface ShopItem extends Item {
  id: number; // Unique id for item in shop
  defaultItemId: number; // Id that this shop item maps to in the items.ts file
  type: SHOP_ITEM_TYPES;
  tier?: SHOP_ITEM_TIER;
  rate: number;
  for: CURRENCY_ENUM;
  cost_multiplier: number;
  cost: number;
}

export enum SHOP_ITEM_TIER {
  TIER1 = 1,
  TIER2 = 2,
  TIER3 = 3,
  TIER4 = 4,
  TIER5 = 5,
  TIER6 = 6,
  TIER7 = 7,
  TIER8 = 8,
  TIER9 = 9,
  TIER10 = 10,
  //TIER11 = 11,
  //TIER12 = 12,
}
