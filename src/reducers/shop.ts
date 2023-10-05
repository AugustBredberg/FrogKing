import { ShopState } from '../models/states';

import { createReducer, on } from '@ngrx/store';
import { INITIAL_SHOP, SHOP, generateElementPowerupShopItem } from '../models/default-shop-items';
import { add, elements_changed, remove } from 'src/app/shop-actions';
import { upgrade_pond } from 'src/app/inventory-actions';

export var SHOP_INITIAL_STATE: ShopState = {
  items: INITIAL_SHOP,
  previouslyGeneratedElementPowerupsCount: 0,
};

function getShopState() {
  // Try to gave state from cache
  var cached_state = localStorage.getItem('shop_state');
  console.log('getting cached shop state', cached_state);
  if (cached_state) {
    SHOP_INITIAL_STATE = JSON.parse(cached_state);
  }
  return SHOP_INITIAL_STATE;
}

// Reduces all inventory actions and automatic updates to inventory
export const shopReducer = createReducer(
  getShopState(),
  on(add, (shop_state, action) => {
    // Get item type
    let item_type = action.item_type;
    // Get product
    let product = action.product;

    // Add product to shop
    let new_items = structuredClone(shop_state.items);
    new_items[item_type][product] = SHOP[item_type][product];
    return {
      ...shop_state,
      items: new_items,
    };
  }),
  on(remove, (shop_state, action) => {
    // Get item type
    let item_type = action.item_type;
    // Get product
    let product = action.product;

    // Remove product from shop
    let new_items = structuredClone(shop_state.items);
    delete new_items[item_type][product];
    return {
      ...shop_state,
      items: new_items,
    };
  }),
  on(elements_changed, (shop_state, action) => {
    var newElementCount = action.newCount;
    var previouslyGeneratedPowerupsCount = shop_state.previouslyGeneratedElementPowerupsCount;

    // Check if newCurrentElementCount is a threshold
    // If it is, we should add element powerup to shop
    var elementPowerUpThresholds = [1, 2, 3, 5, 7, 9, 11, 13, 15];
    var previouslyGeneratedPowerupsCount = shop_state.previouslyGeneratedElementPowerupsCount;
    if (elementPowerUpThresholds.includes(newElementCount)) {
      // Generate a new element powerup
      var elementPowerupshopItem = generateElementPowerupShopItem(action.element, newElementCount, previouslyGeneratedPowerupsCount);

      // Add element powerup to shop and increment previouslyGeneratedElementPowerupsCount
      var new_items = structuredClone(shop_state.items);
      new_items[elementPowerupshopItem.type][elementPowerupshopItem.id] = elementPowerupshopItem;
      return {
        ...shop_state,
        items: new_items,
        previouslyGeneratedElementPowerupsCount: previouslyGeneratedPowerupsCount + 1,
      };
    }
    return shop_state;
  })
);
