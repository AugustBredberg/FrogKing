import {
  Item,
  CURRENCY_ENUM,
} from './items';

export enum SHOP_ITEM_TYPES {
  EVOLUTION, // Evolves a specific frog
  LEVELUP, // Levels up a specific frog
  FROGPOWERUP, // Powers up the frog type that it is applied on (e.g. Runners shoes, FrogRoids, etc.)
  POND, // Increases the capacity of the pond
}

export interface ShopItem extends Item {
  id: number;
  type: SHOP_ITEM_TYPES;
  tier?: SHOP_ITEM_TIER;
  rate: number;
  for: CURRENCY_ENUM;
  cost_multiplier: number;
  cost: number;
}

export enum SHOP_ITEM_TIER {
  TIER1,
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
  TIER12,
}
