import {
  CURRENCY_ENUM,
  EVOLUTION_ENUM,
  POND_ENUM,
  FROG_POWERUP_ENUM,
} from './items';
import { DEFAULT_FROGPOWERUPS, DEFAULT_FROGS } from './default-items';
import { SHOP_ITEM_TIER, SHOP_ITEM_TYPES, ShopItem } from './shop-items';

// Each FROG Enum binds to all their related shop items (evolutions, level-ups, frogjuice)
export const EVOLUTION_SHOP: { [id: string]: ShopItem } = {
  [EVOLUTION_ENUM.TIER1]: {
    id: EVOLUTION_ENUM.TIER1,
    defaultItemId: EVOLUTION_ENUM.TIER1,
    name: 'Evolve tadpole into ' + DEFAULT_FROGS[EVOLUTION_ENUM.TIER1].name,
    type: SHOP_ITEM_TYPES.EVOLUTION,
    cost: 20, // Costs 20 tadpoles
    rate: DEFAULT_FROGS[EVOLUTION_ENUM.TIER1].production_rate, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0, // Cost multiplier
  },
  [EVOLUTION_ENUM.TIER2]: {
    id: EVOLUTION_ENUM.TIER2,
    defaultItemId: EVOLUTION_ENUM.TIER2,
    name: 'Evolve ' + DEFAULT_FROGS[EVOLUTION_ENUM.TIER1].name + ' into ' + DEFAULT_FROGS[EVOLUTION_ENUM.TIER2].name,
    type: SHOP_ITEM_TYPES.EVOLUTION,
    cost: 200,
    rate: DEFAULT_FROGS[EVOLUTION_ENUM.TIER2].production_rate, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0, // Cost multiplier
  },
  [EVOLUTION_ENUM.TIER3]: {
    id: EVOLUTION_ENUM.TIER3,
    defaultItemId: EVOLUTION_ENUM.TIER3,
    name: 'Evolve ' + DEFAULT_FROGS[EVOLUTION_ENUM.TIER2].name + ' into ' + DEFAULT_FROGS[EVOLUTION_ENUM.TIER3].name,
    type: SHOP_ITEM_TYPES.EVOLUTION,
    cost: 800,
    rate: DEFAULT_FROGS[EVOLUTION_ENUM.TIER3].production_rate, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0, // Cost multiplier
  },
  [EVOLUTION_ENUM.TIER4]: {
    id: EVOLUTION_ENUM.TIER4,
    defaultItemId: EVOLUTION_ENUM.TIER4,
    name: 'Evolve ' + DEFAULT_FROGS[EVOLUTION_ENUM.TIER3].name + ' into ' + DEFAULT_FROGS[EVOLUTION_ENUM.TIER4].name,
    type: SHOP_ITEM_TYPES.EVOLUTION,
    cost: 3600,
    rate: DEFAULT_FROGS[EVOLUTION_ENUM.TIER4].production_rate, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0, // Cost multiplier
  },
  [EVOLUTION_ENUM.TIER5]: {
    id: EVOLUTION_ENUM.TIER5,
    defaultItemId: EVOLUTION_ENUM.TIER5,
    name: 'Evolve ' + DEFAULT_FROGS[EVOLUTION_ENUM.TIER4].name + ' into ' + DEFAULT_FROGS[EVOLUTION_ENUM.TIER5].name,
    type: SHOP_ITEM_TYPES.EVOLUTION,
    cost: 14400,
    rate: DEFAULT_FROGS[EVOLUTION_ENUM.TIER5].production_rate, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0, // Cost multiplier
  },
  [EVOLUTION_ENUM.TIER6]: {
    id: EVOLUTION_ENUM.TIER6,
    defaultItemId: EVOLUTION_ENUM.TIER6,
    name: 'Evolve ' + DEFAULT_FROGS[EVOLUTION_ENUM.TIER5].name + ' into ' + DEFAULT_FROGS[EVOLUTION_ENUM.TIER6].name,
    type: SHOP_ITEM_TYPES.EVOLUTION,
    cost: 57600,
    rate: DEFAULT_FROGS[EVOLUTION_ENUM.TIER6].production_rate, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0, // Cost multiplier
  },
  [EVOLUTION_ENUM.TIER7]: {
    id: EVOLUTION_ENUM.TIER7,
    defaultItemId: EVOLUTION_ENUM.TIER7,
    name: 'Evolve ' + DEFAULT_FROGS[EVOLUTION_ENUM.TIER6].name + ' into ' + DEFAULT_FROGS[EVOLUTION_ENUM.TIER7].name,
    type: SHOP_ITEM_TYPES.EVOLUTION,
    cost: 230400,
    rate: DEFAULT_FROGS[EVOLUTION_ENUM.TIER7].production_rate, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0, // Cost multiplier
  },
  [EVOLUTION_ENUM.TIER8]: {
    id: EVOLUTION_ENUM.TIER8,
    defaultItemId: EVOLUTION_ENUM.TIER8,
    name: 'Evolve ' + DEFAULT_FROGS[EVOLUTION_ENUM.TIER7].name + ' into ' + DEFAULT_FROGS[EVOLUTION_ENUM.TIER8].name,
    type: SHOP_ITEM_TYPES.EVOLUTION,
    cost: 921600,
    rate: DEFAULT_FROGS[EVOLUTION_ENUM.TIER8].production_rate, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0, // Cost multiplier
  },
  [EVOLUTION_ENUM.TIER9]: {
    id: EVOLUTION_ENUM.TIER9,
    defaultItemId: EVOLUTION_ENUM.TIER9,
    name: 'Evolve ' + DEFAULT_FROGS[EVOLUTION_ENUM.TIER8].name + ' into ' + DEFAULT_FROGS[EVOLUTION_ENUM.TIER9].name,
    type: SHOP_ITEM_TYPES.EVOLUTION,
    cost: 3686400,
    rate: DEFAULT_FROGS[EVOLUTION_ENUM.TIER9].production_rate, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0, // Cost multiplier
  },
  [EVOLUTION_ENUM.TIER10]: {
    id: EVOLUTION_ENUM.TIER10,
    defaultItemId: EVOLUTION_ENUM.TIER10,
    name: 'Evolve ' + DEFAULT_FROGS[EVOLUTION_ENUM.TIER9].name + ' into ' + DEFAULT_FROGS[EVOLUTION_ENUM.TIER10].name,
    type: SHOP_ITEM_TYPES.EVOLUTION,
    cost: 14745600,
    rate: DEFAULT_FROGS[EVOLUTION_ENUM.TIER10].production_rate, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0, // Cost multiplier
  },
  [EVOLUTION_ENUM.TIER11]: {
    id: EVOLUTION_ENUM.TIER11,
    defaultItemId: EVOLUTION_ENUM.TIER11,
    name: 'Evolve ' + DEFAULT_FROGS[EVOLUTION_ENUM.TIER10].name + ' into ' + DEFAULT_FROGS[EVOLUTION_ENUM.TIER11].name,
    type: SHOP_ITEM_TYPES.EVOLUTION,
    cost: 58982400,
    rate: DEFAULT_FROGS[EVOLUTION_ENUM.TIER11].production_rate, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0.0, // Cost multiplier
  },
};
export const LEVEL_SHOP: { [id: string]: ShopItem } = {
  [EVOLUTION_ENUM.TIER1]: {
    id: EVOLUTION_ENUM.TIER1,
    defaultItemId: EVOLUTION_ENUM.TIER1,
    name: 'Level up ' + DEFAULT_FROGS[EVOLUTION_ENUM.TIER1].name,
    type: SHOP_ITEM_TYPES.LEVELUP,
    cost: 30,
    rate: 0, // 0 tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0.05, // Cost multiplier
  },
  [EVOLUTION_ENUM.TIER2]: {
    id: EVOLUTION_ENUM.TIER2,
    defaultItemId: EVOLUTION_ENUM.TIER2,
    name: 'Level up ' + DEFAULT_FROGS[EVOLUTION_ENUM.TIER2].name,
    type: SHOP_ITEM_TYPES.LEVELUP,
    cost: 100,
    rate: 0, // 0 tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0.05, // Cost multiplier
  },
  [EVOLUTION_ENUM.TIER3]: {
    id: EVOLUTION_ENUM.TIER3,
    defaultItemId: EVOLUTION_ENUM.TIER3,
    name: 'Level up ' + DEFAULT_FROGS[EVOLUTION_ENUM.TIER3].name,
    type: SHOP_ITEM_TYPES.LEVELUP,
    cost: EVOLUTION_SHOP[EVOLUTION_ENUM.TIER3].cost * 0.6, // Evolution costs 800 tadpoles, so level up costs 480 (60%)
    rate: 0, // 0 tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0.05, // Cost multiplier
  },
  [EVOLUTION_ENUM.TIER4]: {
    id: EVOLUTION_ENUM.TIER4,
    defaultItemId: EVOLUTION_ENUM.TIER4,
    name: 'Level up ' + DEFAULT_FROGS[EVOLUTION_ENUM.TIER4].name,
    type: SHOP_ITEM_TYPES.LEVELUP,
    cost: EVOLUTION_SHOP[EVOLUTION_ENUM.TIER4].cost * 0.6, // Evolution costs 3600 tadpoles, so level up costs 2160 (60%)
    rate: 0, // 0 tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0.05, // Cost multiplier
  },
  [EVOLUTION_ENUM.TIER5]: {
    id: EVOLUTION_ENUM.TIER5,
    defaultItemId: EVOLUTION_ENUM.TIER5,
    name: 'Level up ' + DEFAULT_FROGS[EVOLUTION_ENUM.TIER5].name,
    type: SHOP_ITEM_TYPES.LEVELUP,
    cost: EVOLUTION_SHOP[EVOLUTION_ENUM.TIER5].cost * 0.6, // Evolution costs 14400 tadpoles, so level up costs 8640 (60%)
    rate: 0, // 0 tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0.05, // Cost multiplier
  },
  [EVOLUTION_ENUM.TIER6]: {
    id: EVOLUTION_ENUM.TIER6,
    defaultItemId: EVOLUTION_ENUM.TIER6,
    name: 'Level up ' + DEFAULT_FROGS[EVOLUTION_ENUM.TIER6].name,
    type: SHOP_ITEM_TYPES.LEVELUP,
    cost: EVOLUTION_SHOP[EVOLUTION_ENUM.TIER6].cost * 0.6, // Evolution costs 57600 tadpoles, so level up costs 34560 (60%)
    rate: 0, // 0 tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0.05, // Cost multiplier
  },
  [EVOLUTION_ENUM.TIER7]: {
    id: EVOLUTION_ENUM.TIER7,
    defaultItemId: EVOLUTION_ENUM.TIER7,
    name: 'Level up ' + DEFAULT_FROGS[EVOLUTION_ENUM.TIER7].name,
    type: SHOP_ITEM_TYPES.LEVELUP,
    cost: EVOLUTION_SHOP[EVOLUTION_ENUM.TIER7].cost * 0.6, // Evolution costs 230400 tadpoles, so level up costs 138240 (60%)
    rate: 0, // 0 tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0.05, // Cost multiplier
  },
  [EVOLUTION_ENUM.TIER8]: {
    id: EVOLUTION_ENUM.TIER8,
    defaultItemId: EVOLUTION_ENUM.TIER8,
    name: 'Level up ' + DEFAULT_FROGS[EVOLUTION_ENUM.TIER8].name,
    type: SHOP_ITEM_TYPES.LEVELUP,
    cost: EVOLUTION_SHOP[EVOLUTION_ENUM.TIER8].cost * 0.6, // Evolution costs 921600 tadpoles, so level up costs 552960 (60%)
    rate: 0, // 0 tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0.05, // Cost multiplier

  },
  [EVOLUTION_ENUM.TIER9]: {
    id: EVOLUTION_ENUM.TIER9,
    defaultItemId: EVOLUTION_ENUM.TIER9,
    name: 'Level up ' + DEFAULT_FROGS[EVOLUTION_ENUM.TIER9].name,
    type: SHOP_ITEM_TYPES.LEVELUP,
    cost: EVOLUTION_SHOP[EVOLUTION_ENUM.TIER9].cost * 0.6, // Evolution costs 3686400 tadpoles, so level up costs 2211840 (60%)
    rate: 0,
    for: CURRENCY_ENUM.TADPOLE,
    cost_multiplier: 0.05,
  },
  [EVOLUTION_ENUM.TIER10]: {
    id: EVOLUTION_ENUM.TIER10,
    defaultItemId: EVOLUTION_ENUM.TIER10,
    name: 'Level up ' + DEFAULT_FROGS[EVOLUTION_ENUM.TIER10].name,
    type: SHOP_ITEM_TYPES.LEVELUP,
    cost: EVOLUTION_SHOP[EVOLUTION_ENUM.TIER10].cost * 0.6, // Evolution costs 14745600 tadpoles, so level up costs 8847360 (60%)
    rate: 0,
    for: CURRENCY_ENUM.TADPOLE,
    cost_multiplier: 0.05,
  },
  [EVOLUTION_ENUM.TIER11]: {
    id: EVOLUTION_ENUM.TIER11,
    defaultItemId: EVOLUTION_ENUM.TIER11,
    name: 'Level up ' + DEFAULT_FROGS[EVOLUTION_ENUM.TIER11].name,
    type: SHOP_ITEM_TYPES.LEVELUP,
    cost: EVOLUTION_SHOP[EVOLUTION_ENUM.TIER11].cost * 0.6, // Evolution costs 58982400 tadpoles, so level up costs 35389440 (60%)
    rate: 0,
    for: CURRENCY_ENUM.TADPOLE,
    cost_multiplier: 0.05,
  },
};

// Automatically populate FROGPOWERUP_SHOP with every DEFAULT_FROGPOWERUP for every SHOP_ITEM_TIER

export const FROGPOWERUP_SHOP: { [id: string]: ShopItem } = {};
// Loop through all shop tiers (1-12)
var tierKeys = Object.keys(SHOP_ITEM_TIER).filter((v) => !isNaN(Number(v))).map((v) => parseInt(v));
var powerupKeys = Object.keys(FROG_POWERUP_ENUM).filter((v) => !isNaN(Number(v))).map((v) => parseInt(v));
tierKeys.forEach((tier) => {
  powerupKeys.forEach((powerup) => {
    // If negative effect, don't generate item
    if(powerup < 0) return;

    var powerUpId = powerup + tier * 1000;
    FROGPOWERUP_SHOP[powerUpId] = {
        id: powerUpId,
        defaultItemId: powerup,
        name: DEFAULT_FROGPOWERUPS[powerup].name + ' tier: ' + tier,
        type: SHOP_ITEM_TYPES.FROGPOWERUP,
        cost: 2 * Math.pow(10, tier), // Costs 20 tadpoles
        rate: 0, // Tadpoles per second
        for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
        cost_multiplier: 0, // Cost multiplier
      };
    console.log("Created powerUp: ", powerUpId)
  });
});

console.log(tierKeys)
console.log(powerupKeys)

/*
export const FROGPOWERUP_SHOP: { [id: string]: ShopItem } = {
  [FROG_POWERUP_ENUM.FROGROIDS]: {
    id: FROG_POWERUP_ENUM.FROGROIDS,
    defaultItemId: FROG_POWERUP_ENUM.FROGROIDS,
    name: DEFAULT_FROGPOWERUPS[FROG_POWERUP_ENUM.FROGROIDS].name,
    type: SHOP_ITEM_TYPES.FROGPOWERUP,
    cost: 20, // Costs 20 tadpoles
    rate: 0, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0, // Cost multiplier
  },
  [FROG_POWERUP_ENUM.FRODKA]: {
    id: FROG_POWERUP_ENUM.FRODKA,
    defaultItemId: FROG_POWERUP_ENUM.FRODKA,
    name: DEFAULT_FROGPOWERUPS[FROG_POWERUP_ENUM.FRODKA].name,
    type: SHOP_ITEM_TYPES.FROGPOWERUP,
    cost: 10, // Costs 20 tadpoles
    rate: 0, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0, // Cost multiplier
  },
  [FROG_POWERUP_ENUM.FRABIES]: {
    id: FROG_POWERUP_ENUM.FRABIES,
    defaultItemId: FROG_POWERUP_ENUM.FRABIES,
    name: DEFAULT_FROGPOWERUPS[FROG_POWERUP_ENUM.FRABIES].name,
    type: SHOP_ITEM_TYPES.FROGPOWERUP,
    cost: 15, // Costs 20 tadpoles
    rate: 0, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0, // Cost multiplier
  },
};
*/

export const POND_SHOP: { [id: string]: ShopItem } = {
  [POND_ENUM.TOILET]: {
    id: POND_ENUM.TOILET,
    defaultItemId: POND_ENUM.TOILET,
    name: 'A Toilet',
    type: SHOP_ITEM_TYPES.POND,
    cost: 50, // Costs 50 tadpoles
    rate: 0, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0, // Cost multiplier
  },

  [POND_ENUM.SIMPLE_POND]: {
    id: POND_ENUM.SIMPLE_POND,
    defaultItemId: POND_ENUM.SIMPLE_POND,
    name: 'Simple pond',
    type: SHOP_ITEM_TYPES.POND,
    cost: 200, // Costs 50 tadpoles
    rate: 0, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0, // Cost multiplier
  },
  [POND_ENUM.FANCY_POND]: {
    id: POND_ENUM.FANCY_POND,
    defaultItemId: POND_ENUM.FANCY_POND,
    name: 'Fancy pond',
    type: SHOP_ITEM_TYPES.POND,
    cost: 50, // Costs 50 tadpoles
    rate: 0, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0, // Cost multiplier
  },
  [POND_ENUM.SPECTACULAR_POND]: {
    id: POND_ENUM.SPECTACULAR_POND,
    defaultItemId: POND_ENUM.SPECTACULAR_POND,
    name: 'Spectacular pond',
    type: SHOP_ITEM_TYPES.POND,
    cost: 200, // Costs 50 tadpoles
    rate: 0, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0, // Cost multiplier
  },
};

export const SHOP: {
  [id: string]: {
    [id: string]: ShopItem;
  };
} = {
  [SHOP_ITEM_TYPES.EVOLUTION]: EVOLUTION_SHOP,
  [SHOP_ITEM_TYPES.LEVELUP]: LEVEL_SHOP,
  [SHOP_ITEM_TYPES.FROGPOWERUP]: FROGPOWERUP_SHOP,
  [SHOP_ITEM_TYPES.POND]: POND_SHOP,
};

export const INITIAL_SHOP: {
  [id: string]: {
    [id: string]: ShopItem;
  };
} = {
  [SHOP_ITEM_TYPES.EVOLUTION]: EVOLUTION_SHOP,
  [SHOP_ITEM_TYPES.LEVELUP]: {},
  [SHOP_ITEM_TYPES.FROGPOWERUP]: FROGPOWERUP_SHOP,
  /* {
    [FROG_POWERUP_ENUM.FROGROIDS]: FROGPOWERUP_SHOP[FROG_POWERUP_ENUM.FROGROIDS]
  },*/
  [SHOP_ITEM_TYPES.POND]: {
    [POND_ENUM.TOILET]: POND_SHOP[POND_ENUM.TOILET],
  },
};
