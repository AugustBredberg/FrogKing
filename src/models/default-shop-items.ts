import {
  CURRENCY_ENUM,
  EVOLUTION_ENUM,
  POND_ENUM,
  FROG_POWERUP_ENUM,
  KING_ACTIONS,
  KING_POWERUP_ENUM,
  FROG_ELEMENT_ENUM,
} from './items';
import { DEFAULT_ELEMENTPOWERUPS, DEFAULT_FROGPOWERUPS, DEFAULT_FROGS } from './default-items';
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
    name:
      'Evolve ' +
      DEFAULT_FROGS[EVOLUTION_ENUM.TIER1].name +
      ' into ' +
      DEFAULT_FROGS[EVOLUTION_ENUM.TIER2].name,
    type: SHOP_ITEM_TYPES.EVOLUTION,
    cost: 200,
    rate: DEFAULT_FROGS[EVOLUTION_ENUM.TIER2].production_rate, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0, // Cost multiplier
  },
  [EVOLUTION_ENUM.TIER3]: {
    id: EVOLUTION_ENUM.TIER3,
    defaultItemId: EVOLUTION_ENUM.TIER3,
    name:
      'Evolve ' +
      DEFAULT_FROGS[EVOLUTION_ENUM.TIER2].name +
      ' into ' +
      DEFAULT_FROGS[EVOLUTION_ENUM.TIER3].name,
    type: SHOP_ITEM_TYPES.EVOLUTION,
    cost: 800,
    rate: DEFAULT_FROGS[EVOLUTION_ENUM.TIER3].production_rate, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0, // Cost multiplier
  },
  [EVOLUTION_ENUM.TIER4]: {
    id: EVOLUTION_ENUM.TIER4,
    defaultItemId: EVOLUTION_ENUM.TIER4,
    name:
      'Evolve ' +
      DEFAULT_FROGS[EVOLUTION_ENUM.TIER3].name +
      ' into ' +
      DEFAULT_FROGS[EVOLUTION_ENUM.TIER4].name,
    type: SHOP_ITEM_TYPES.EVOLUTION,
    cost: 3600,
    rate: DEFAULT_FROGS[EVOLUTION_ENUM.TIER4].production_rate, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0, // Cost multiplier
  },
  [EVOLUTION_ENUM.TIER5]: {
    id: EVOLUTION_ENUM.TIER5,
    defaultItemId: EVOLUTION_ENUM.TIER5,
    name:
      'Evolve ' +
      DEFAULT_FROGS[EVOLUTION_ENUM.TIER4].name +
      ' into ' +
      DEFAULT_FROGS[EVOLUTION_ENUM.TIER5].name,
    type: SHOP_ITEM_TYPES.EVOLUTION,
    cost: 14400,
    rate: DEFAULT_FROGS[EVOLUTION_ENUM.TIER5].production_rate, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0, // Cost multiplier
  },
  [EVOLUTION_ENUM.TIER6]: {
    id: EVOLUTION_ENUM.TIER6,
    defaultItemId: EVOLUTION_ENUM.TIER6,
    name:
      'Evolve ' +
      DEFAULT_FROGS[EVOLUTION_ENUM.TIER5].name +
      ' into ' +
      DEFAULT_FROGS[EVOLUTION_ENUM.TIER6].name,
    type: SHOP_ITEM_TYPES.EVOLUTION,
    cost: 57600,
    rate: DEFAULT_FROGS[EVOLUTION_ENUM.TIER6].production_rate, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0, // Cost multiplier
  },
  [EVOLUTION_ENUM.TIER7]: {
    id: EVOLUTION_ENUM.TIER7,
    defaultItemId: EVOLUTION_ENUM.TIER7,
    name:
      'Evolve ' +
      DEFAULT_FROGS[EVOLUTION_ENUM.TIER6].name +
      ' into ' +
      DEFAULT_FROGS[EVOLUTION_ENUM.TIER7].name,
    type: SHOP_ITEM_TYPES.EVOLUTION,
    cost: 230400,
    rate: DEFAULT_FROGS[EVOLUTION_ENUM.TIER7].production_rate, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0, // Cost multiplier
  },
  [EVOLUTION_ENUM.TIER8]: {
    id: EVOLUTION_ENUM.TIER8,
    defaultItemId: EVOLUTION_ENUM.TIER8,
    name:
      'Evolve ' +
      DEFAULT_FROGS[EVOLUTION_ENUM.TIER7].name +
      ' into ' +
      DEFAULT_FROGS[EVOLUTION_ENUM.TIER8].name,
    type: SHOP_ITEM_TYPES.EVOLUTION,
    cost: 921600,
    rate: DEFAULT_FROGS[EVOLUTION_ENUM.TIER8].production_rate, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0, // Cost multiplier
  },
  [EVOLUTION_ENUM.TIER9]: {
    id: EVOLUTION_ENUM.TIER9,
    defaultItemId: EVOLUTION_ENUM.TIER9,
    name:
      'Evolve ' +
      DEFAULT_FROGS[EVOLUTION_ENUM.TIER8].name +
      ' into ' +
      DEFAULT_FROGS[EVOLUTION_ENUM.TIER9].name,
    type: SHOP_ITEM_TYPES.EVOLUTION,
    cost: 3686400,
    rate: DEFAULT_FROGS[EVOLUTION_ENUM.TIER9].production_rate, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0, // Cost multiplier
  },
  [EVOLUTION_ENUM.TIER10]: {
    id: EVOLUTION_ENUM.TIER10,
    defaultItemId: EVOLUTION_ENUM.TIER10,
    name:
      'Evolve ' +
      DEFAULT_FROGS[EVOLUTION_ENUM.TIER9].name +
      ' into ' +
      DEFAULT_FROGS[EVOLUTION_ENUM.TIER10].name,
    type: SHOP_ITEM_TYPES.EVOLUTION,
    cost: 14745600,
    rate: DEFAULT_FROGS[EVOLUTION_ENUM.TIER10].production_rate, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0, // Cost multiplier
  },
  [EVOLUTION_ENUM.TIER11]: {
    id: EVOLUTION_ENUM.TIER11,
    defaultItemId: EVOLUTION_ENUM.TIER11,
    name:
      'Evolve ' +
      DEFAULT_FROGS[EVOLUTION_ENUM.TIER10].name +
      ' into ' +
      DEFAULT_FROGS[EVOLUTION_ENUM.TIER11].name,
    type: SHOP_ITEM_TYPES.EVOLUTION,
    cost: 58982400,
    rate: DEFAULT_FROGS[EVOLUTION_ENUM.TIER11].production_rate, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0.0, // Cost multiplier
  },
};

export const KING_LEVEL_SHOP: { [id: string]: ShopItem } = {
  [KING_ACTIONS.LEVELUP]: {
    id: KING_ACTIONS.LEVELUP,
    defaultItemId: KING_ACTIONS.LEVELUP,
    name: 'Level up the king',
    type: SHOP_ITEM_TYPES.KINGLEVELUP,
    cost: 35, // Costs 35 tadpoles
    rate: 0, // 0 tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0.1, // Cost multiplier
  },
};
export const KING_POWERUP_SHOP: { [id: string]: ShopItem } = {};
// Create 10 ROYAL_RAGE powerups for the king, each with a different cost
for (let i = 0; i < 10; i++) {
  KING_POWERUP_SHOP[i] = {
    id: i,
    defaultItemId: KING_POWERUP_ENUM.ROYAL_RAGE,
    name: 'Royal Rage',
    type: SHOP_ITEM_TYPES.KINGPOWERUP,
    cost: 100 * Math.pow(10, i), // Costs 100, 1000, 10000, etc.
    rate: 0, // 0 tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0, // Cost multiplier
  };
}

export const LEVEL_SHOP: { [id: string]: ShopItem } = {
  [EVOLUTION_ENUM.TIER1]: {
    id: EVOLUTION_ENUM.TIER1,
    defaultItemId: EVOLUTION_ENUM.TIER1,
    name: 'Level up ' + DEFAULT_FROGS[EVOLUTION_ENUM.TIER1].name,
    type: SHOP_ITEM_TYPES.FROGLEVELUP,
    cost: 30,
    rate: 0, // 0 tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0.05, // Cost multiplier
  },
  [EVOLUTION_ENUM.TIER2]: {
    id: EVOLUTION_ENUM.TIER2,
    defaultItemId: EVOLUTION_ENUM.TIER2,
    name: 'Level up ' + DEFAULT_FROGS[EVOLUTION_ENUM.TIER2].name,
    type: SHOP_ITEM_TYPES.FROGLEVELUP,
    cost: 100,
    rate: 0, // 0 tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0.05, // Cost multiplier
  },
  [EVOLUTION_ENUM.TIER3]: {
    id: EVOLUTION_ENUM.TIER3,
    defaultItemId: EVOLUTION_ENUM.TIER3,
    name: 'Level up ' + DEFAULT_FROGS[EVOLUTION_ENUM.TIER3].name,
    type: SHOP_ITEM_TYPES.FROGLEVELUP,
    cost: EVOLUTION_SHOP[EVOLUTION_ENUM.TIER3].cost * 0.6, // Evolution costs 800 tadpoles, so level up costs 480 (60%)
    rate: 0, // 0 tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0.05, // Cost multiplier
  },
  [EVOLUTION_ENUM.TIER4]: {
    id: EVOLUTION_ENUM.TIER4,
    defaultItemId: EVOLUTION_ENUM.TIER4,
    name: 'Level up ' + DEFAULT_FROGS[EVOLUTION_ENUM.TIER4].name,
    type: SHOP_ITEM_TYPES.FROGLEVELUP,
    cost: EVOLUTION_SHOP[EVOLUTION_ENUM.TIER4].cost * 0.6, // Evolution costs 3600 tadpoles, so level up costs 2160 (60%)
    rate: 0, // 0 tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0.05, // Cost multiplier
  },
  [EVOLUTION_ENUM.TIER5]: {
    id: EVOLUTION_ENUM.TIER5,
    defaultItemId: EVOLUTION_ENUM.TIER5,
    name: 'Level up ' + DEFAULT_FROGS[EVOLUTION_ENUM.TIER5].name,
    type: SHOP_ITEM_TYPES.FROGLEVELUP,
    cost: EVOLUTION_SHOP[EVOLUTION_ENUM.TIER5].cost * 0.6, // Evolution costs 14400 tadpoles, so level up costs 8640 (60%)
    rate: 0, // 0 tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0.05, // Cost multiplier
  },
  [EVOLUTION_ENUM.TIER6]: {
    id: EVOLUTION_ENUM.TIER6,
    defaultItemId: EVOLUTION_ENUM.TIER6,
    name: 'Level up ' + DEFAULT_FROGS[EVOLUTION_ENUM.TIER6].name,
    type: SHOP_ITEM_TYPES.FROGLEVELUP,
    cost: EVOLUTION_SHOP[EVOLUTION_ENUM.TIER6].cost * 0.6, // Evolution costs 57600 tadpoles, so level up costs 34560 (60%)
    rate: 0, // 0 tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0.05, // Cost multiplier
  },
  [EVOLUTION_ENUM.TIER7]: {
    id: EVOLUTION_ENUM.TIER7,
    defaultItemId: EVOLUTION_ENUM.TIER7,
    name: 'Level up ' + DEFAULT_FROGS[EVOLUTION_ENUM.TIER7].name,
    type: SHOP_ITEM_TYPES.FROGLEVELUP,
    cost: EVOLUTION_SHOP[EVOLUTION_ENUM.TIER7].cost * 0.6, // Evolution costs 230400 tadpoles, so level up costs 138240 (60%)
    rate: 0, // 0 tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0.05, // Cost multiplier
  },
  [EVOLUTION_ENUM.TIER8]: {
    id: EVOLUTION_ENUM.TIER8,
    defaultItemId: EVOLUTION_ENUM.TIER8,
    name: 'Level up ' + DEFAULT_FROGS[EVOLUTION_ENUM.TIER8].name,
    type: SHOP_ITEM_TYPES.FROGLEVELUP,
    cost: EVOLUTION_SHOP[EVOLUTION_ENUM.TIER8].cost * 0.6, // Evolution costs 921600 tadpoles, so level up costs 552960 (60%)
    rate: 0, // 0 tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0.05, // Cost multiplier
  },
  [EVOLUTION_ENUM.TIER9]: {
    id: EVOLUTION_ENUM.TIER9,
    defaultItemId: EVOLUTION_ENUM.TIER9,
    name: 'Level up ' + DEFAULT_FROGS[EVOLUTION_ENUM.TIER9].name,
    type: SHOP_ITEM_TYPES.FROGLEVELUP,
    cost: EVOLUTION_SHOP[EVOLUTION_ENUM.TIER9].cost * 0.6, // Evolution costs 3686400 tadpoles, so level up costs 2211840 (60%)
    rate: 0,
    for: CURRENCY_ENUM.TADPOLE,
    cost_multiplier: 0.05,
  },
  [EVOLUTION_ENUM.TIER10]: {
    id: EVOLUTION_ENUM.TIER10,
    defaultItemId: EVOLUTION_ENUM.TIER10,
    name: 'Level up ' + DEFAULT_FROGS[EVOLUTION_ENUM.TIER10].name,
    type: SHOP_ITEM_TYPES.FROGLEVELUP,
    cost: EVOLUTION_SHOP[EVOLUTION_ENUM.TIER10].cost * 0.6, // Evolution costs 14745600 tadpoles, so level up costs 8847360 (60%)
    rate: 0,
    for: CURRENCY_ENUM.TADPOLE,
    cost_multiplier: 0.05,
  },
  [EVOLUTION_ENUM.TIER11]: {
    id: EVOLUTION_ENUM.TIER11,
    defaultItemId: EVOLUTION_ENUM.TIER11,
    name: 'Level up ' + DEFAULT_FROGS[EVOLUTION_ENUM.TIER11].name,
    type: SHOP_ITEM_TYPES.FROGLEVELUP,
    cost: EVOLUTION_SHOP[EVOLUTION_ENUM.TIER11].cost * 0.6, // Evolution costs 58982400 tadpoles, so level up costs 35389440 (60%)
    rate: 0,
    for: CURRENCY_ENUM.TADPOLE,
    cost_multiplier: 0.05,
  },
};


export const ELEMENT_POWERUP_SHOP: { [id: string]: ShopItem }  = {};

export function generateElementPowerupShopItem(
  element: FROG_ELEMENT_ENUM, // Which element this powerup is for
  amountOfElements: number, // How many 'Dark..' elements the user has gathered
  previouslyGeneratedPowerups: number, // How many powerups have been generated for any element
) {
  var elementIndex: number = Object.keys(FROG_ELEMENT_ENUM).indexOf(element.toUpperCase()); // 1, 2 etc
  var uniqueElementIndex = elementIndex + amountOfElements * 1000; // 1001, 1002 etc
  return {
    id: uniqueElementIndex,
    defaultItemId: elementIndex,
    name: DEFAULT_ELEMENTPOWERUPS[element].name,
    type: SHOP_ITEM_TYPES.ELEMENTPOWERUP,
    cost: previouslyGeneratedPowerups ? 1000 : Math.pow(100, previouslyGeneratedPowerups + 1) ,
    // Costs 1000, 10 000, 1 000 000, 100 000 000 tadpoles
    rate: 0, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0, // Cost multiplier
  } as ShopItem;
}

// Automatically populate FROGPOWERUP_SHOP with every DEFAULT_FROGPOWERUP for every SHOP_ITEM_TIER
export const FROG_POWERUP_SHOP: { [id: string]: ShopItem } = {};
// Loop through all shop tiers (1-12)
var tierKeys = Object.keys(SHOP_ITEM_TIER)
  .filter((v) => !isNaN(Number(v)))
  .map((v) => parseInt(v));
var powerupKeys = Object.keys(FROG_POWERUP_ENUM)
  .filter((v) => !isNaN(Number(v)))
  .map((v) => parseInt(v));
tierKeys.forEach((tier) => {
  powerupKeys.forEach((powerup) => {
    // If negative effect, don't generate item
    if (powerup < 0) return;

    var powerUpId = powerup + tier * 1000;
    FROG_POWERUP_SHOP[powerUpId] = {
      id: powerUpId,
      defaultItemId: powerup,
      name: DEFAULT_FROGPOWERUPS[powerup].name + ' tier: ' + tier,
      tier: tier,
      type: SHOP_ITEM_TYPES.FROGPOWERUP,
      cost: 2 * Math.pow(10, tier), // Costs 20 tadpoles
      rate: 0, // Tadpoles per second
      for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
      cost_multiplier: 0, // Cost multiplier
    };
  });
});


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
  [POND_ENUM.GUPPY_BOWL]: {
    id: POND_ENUM.GUPPY_BOWL,
    defaultItemId: POND_ENUM.GUPPY_BOWL,
    name: 'Guppy Bowl',
    type: SHOP_ITEM_TYPES.POND,
    cost: 2500, // Costs 50 tadpoles
    rate: 0, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0, // Cost multiplier
  },
  [POND_ENUM.AQUARIUM]: {
    id: POND_ENUM.AQUARIUM,
    defaultItemId: POND_ENUM.AQUARIUM,
    name: 'Aquarium',
    type: SHOP_ITEM_TYPES.POND,
    cost: 50000, // Costs 50 tadpoles
    rate: 0, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0, // Cost multiplier
  },
  [POND_ENUM.SWIMMING_POOL]: {
    id: POND_ENUM.SWIMMING_POOL,
    defaultItemId: POND_ENUM.SWIMMING_POOL,
    name: 'Swimming Pool',
    type: SHOP_ITEM_TYPES.POND,
    cost: 1000000, // Costs 50 tadpoles
    rate: 0, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0, // Cost multiplier
  },
  [POND_ENUM.HOT_SPRING]: {
    id: POND_ENUM.HOT_SPRING,
    defaultItemId: POND_ENUM.HOT_SPRING,
    name: 'Hot Spring',
    type: SHOP_ITEM_TYPES.POND,
    cost: 25000000, // Costs 50 tadpoles
    rate: 0, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0, // Cost multiplier
  },
  [POND_ENUM.WATERFALL]: {
    id: POND_ENUM.WATERFALL,
    defaultItemId: POND_ENUM.WATERFALL,
    name: 'Waterfall',
    type: SHOP_ITEM_TYPES.POND,
    cost: 300000000, // Costs 50 tadpoles
    rate: 0, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0, // Cost multiplier
  },
  [POND_ENUM.DESERT_ISLAND]: {
    id: POND_ENUM.DESERT_ISLAND,
    defaultItemId: POND_ENUM.DESERT_ISLAND,
    name: 'Deserted Island',
    type: SHOP_ITEM_TYPES.POND,
    cost: 5000000000, // Costs 50 tadpoles
    rate: 0, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0, // Cost multiplier
  },
  [POND_ENUM.COASTLINE]: {
    id: POND_ENUM.COASTLINE,
    defaultItemId: POND_ENUM.COASTLINE,
    name: 'Coastline',
    type: SHOP_ITEM_TYPES.POND,
    cost: 25000000000, // Costs 50 tadpoles
    rate: 0, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0, // Cost multiplier
  },
  [POND_ENUM.SIMPLE_POND]: {
    id: POND_ENUM.SIMPLE_POND,
    defaultItemId: POND_ENUM.SIMPLE_POND,
    name: 'Normal Pond',
    type: SHOP_ITEM_TYPES.POND,
    cost: 250000000000, // Costs 50 tadpoles
    rate: 0, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0, // Cost multiplier
  },
  [POND_ENUM.LAKE]: {
    id: POND_ENUM.LAKE,
    defaultItemId: POND_ENUM.LAKE,
    name: 'Lake',
    type: SHOP_ITEM_TYPES.POND,
    cost: 5000000000000, // Costs 50 tadpoles
    rate: 0, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0, // Cost multiplier
  },
  [POND_ENUM.SEA]: {
    id: POND_ENUM.SEA,
    defaultItemId: POND_ENUM.SEA,
    name: 'Sea',
    type: SHOP_ITEM_TYPES.POND,
    cost: 25000000000000, // Costs 50 tadpoles
    rate: 0, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0, // Cost multiplier
  },
  [POND_ENUM.OCEAN]: {
    id: POND_ENUM.OCEAN,
    defaultItemId: POND_ENUM.OCEAN,
    name: 'Ocean',
    type: SHOP_ITEM_TYPES.POND,
    cost: 7000000000000, // Costs 50 tadpoles
    rate: 0, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0, // Cost multiplier
  },
  [POND_ENUM.NEPTUNE]: {
    id: POND_ENUM.NEPTUNE,
    defaultItemId: POND_ENUM.NEPTUNE,
    name: 'Neptune',
    type: SHOP_ITEM_TYPES.POND,
    cost: 30000000000000, // Costs 50 tadpoles
    rate: 0, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0, // Cost multiplier
  },
  [POND_ENUM.FROG_GALAXY]: {
    id: POND_ENUM.FROG_GALAXY,
    defaultItemId: POND_ENUM.FROG_GALAXY,
    name: 'Frog Galaxy',
    type: SHOP_ITEM_TYPES.POND,
    cost: 900000000000000, // Costs 50 tadpoles
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
  [SHOP_ITEM_TYPES.KINGLEVELUP]: KING_LEVEL_SHOP,
  [SHOP_ITEM_TYPES.KINGPOWERUP]: KING_POWERUP_SHOP,
  [SHOP_ITEM_TYPES.EVOLUTION]: EVOLUTION_SHOP,
  [SHOP_ITEM_TYPES.FROGLEVELUP]: LEVEL_SHOP,
  [SHOP_ITEM_TYPES.FROGPOWERUP]: FROG_POWERUP_SHOP,
  [SHOP_ITEM_TYPES.ELEMENTPOWERUP]: ELEMENT_POWERUP_SHOP,
  [SHOP_ITEM_TYPES.POND]: POND_SHOP,
};

export const INITIAL_SHOP: {
  [id: string]: {
    [id: string]: ShopItem;
  };
} = {
  [SHOP_ITEM_TYPES.KINGLEVELUP]: KING_LEVEL_SHOP,
  [SHOP_ITEM_TYPES.KINGPOWERUP]: KING_POWERUP_SHOP,
  [SHOP_ITEM_TYPES.EVOLUTION]: EVOLUTION_SHOP,
  [SHOP_ITEM_TYPES.FROGLEVELUP]: {},
  [SHOP_ITEM_TYPES.FROGPOWERUP]: FROG_POWERUP_SHOP,
  [SHOP_ITEM_TYPES.ELEMENTPOWERUP]: ELEMENT_POWERUP_SHOP,
  [SHOP_ITEM_TYPES.POND]: {
    [POND_ENUM.TOILET]: POND_SHOP[POND_ENUM.TOILET],
  },
};
