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
    name: 'Evolve tadpole into Frog',
    type: SHOP_ITEM_TYPES.EVOLUTION,
    cost: 20, // Costs 20 tadpoles
    rate: DEFAULT_FROGS[EVOLUTION_ENUM.TIER1].production_rate, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0, // Cost multiplier
  },
  [EVOLUTION_ENUM.TIER2]: {
    id: EVOLUTION_ENUM.TIER2,
    defaultItemId: EVOLUTION_ENUM.TIER2,
    name: 'Evolve Frog into Toad',
    type: SHOP_ITEM_TYPES.EVOLUTION,
    cost: 100, // Costs 100 tadpoles
    rate: DEFAULT_FROGS[EVOLUTION_ENUM.TIER2].production_rate, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0, // Cost multiplier
  },
  [EVOLUTION_ENUM.TIER3]: {
    id: EVOLUTION_ENUM.TIER3,
    defaultItemId: EVOLUTION_ENUM.TIER3,
    name: 'Evolve Frog into Gecko',
    type: SHOP_ITEM_TYPES.EVOLUTION,
    cost: 100, // Costs 100 tadpoles
    rate: DEFAULT_FROGS[EVOLUTION_ENUM.TIER3].production_rate, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0, // Cost multiplier
  },
};
export const LEVEL_SHOP: { [id: string]: ShopItem } = {
  [EVOLUTION_ENUM.TIER1]: {
    id: EVOLUTION_ENUM.TIER1,
    defaultItemId: EVOLUTION_ENUM.TIER1,
    name: 'Level up Frog',
    type: SHOP_ITEM_TYPES.LEVELUP,
    cost: 30,
    rate: 0, // 0 tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0.05, // Cost multiplier
  },
  [EVOLUTION_ENUM.TIER2]: {
    id: EVOLUTION_ENUM.TIER2,
    defaultItemId: EVOLUTION_ENUM.TIER2,
    name: 'Level up Toad',
    type: SHOP_ITEM_TYPES.LEVELUP,
    cost: 100,
    rate: 0, // 0 tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0.05, // Cost multiplier
  },
  [EVOLUTION_ENUM.TIER3]: {
    id: EVOLUTION_ENUM.TIER3,
    defaultItemId: EVOLUTION_ENUM.TIER3,
    name: 'Level up Gecko',
    type: SHOP_ITEM_TYPES.LEVELUP,
    cost: 80,
    rate: 0, // 0 tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0.05, // Cost multiplier
  },
};

// Automatically populate FROGPOWERUP_SHOP with every DEFAULT_FROGPOWERUP for every SHOP_ITEM_TIER
export const FROGPOWERUP_SHOP: { [id: string]: ShopItem } = {};
// Loop through all shop tiers (1-12)
Object.keys(SHOP_ITEM_TIER).forEach((tier) => {
  var tierNumber = parseInt(tier);
  if(isNaN(tierNumber)) {
    return;
  }
  // Loop through all powerups (frogroids, frodka, frabies, etc)
  Object.keys(FROG_POWERUP_ENUM).forEach((powerup) => {
    // Don't create shop item if powerup is a negative value (negative powerup effect)
    if (parseInt(powerup) < 0) {
      return;
    }

    // Create a powerup id by concatenating the powerup enum and the tier enum
    var powerUpId = powerup.toString() + tier.toString();
    var powerUpIdNum = parseInt(powerUpId);
    console.log('Creating powerup id: ', powerUpIdNum);

    //var defaultPowerUp = DEFAULT_FROGPOWERUPS[powerup];
    if (!isNaN(powerUpIdNum) && powerUpIdNum > 0) {
      FROGPOWERUP_SHOP[powerUpIdNum] = {
        id: parseInt(powerup),
        defaultItemId: parseInt(powerup),
        name: DEFAULT_FROGPOWERUPS[powerup].name + ' tier: ' + tierNumber,
        type: SHOP_ITEM_TYPES.FROGPOWERUP,
        cost: 20 * tierNumber, // Costs 20 tadpoles
        rate: 0, // Tadpoles per second
        for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
        cost_multiplier: 0, // Cost multiplier
      };
    }
  });
});
/*
export const FROGPOWERUP_SHOP: { [id: string]: ShopItem } = {
  [FROG_POWERUP_ENUM.FROGROIDS]: {
    id: FROG_POWERUP_ENUM.FROGROIDS,
    name: DEFAULT_FROGPOWERUPS[FROG_POWERUP_ENUM.FROGROIDS].name,
    type: SHOP_ITEM_TYPES.FROGPOWERUP,
    cost: 20, // Costs 20 tadpoles
    rate: 0, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0, // Cost multiplier
  },
  [FROG_POWERUP_ENUM.FRODKA]: {
    id: FROG_POWERUP_ENUM.FRODKA,
    name: DEFAULT_FROGPOWERUPS[FROG_POWERUP_ENUM.FRODKA].name,
    type: SHOP_ITEM_TYPES.FROGPOWERUP,
    cost: 10, // Costs 20 tadpoles
    rate: 0, // Tadpoles per second
    for: CURRENCY_ENUM.TADPOLE, // Costs tadpoles
    cost_multiplier: 0, // Cost multiplier
  },
  [FROG_POWERUP_ENUM.FRABIES]: {
    id: FROG_POWERUP_ENUM.FRABIES,
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
  [SHOP_ITEM_TYPES.EVOLUTION]: {},
  [SHOP_ITEM_TYPES.LEVELUP]: {},
  [SHOP_ITEM_TYPES.FROGPOWERUP]: FROGPOWERUP_SHOP,
  /* {
    [FROG_POWERUP_ENUM.FROGROIDS]: FROGPOWERUP_SHOP[FROG_POWERUP_ENUM.FROGROIDS]
  },*/
  [SHOP_ITEM_TYPES.POND]: {
    [POND_ENUM.TOILET]: POND_SHOP[POND_ENUM.TOILET],
  },
};
