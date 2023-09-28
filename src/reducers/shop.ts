import { ShopState } from '../models/states';

import { createReducer, on } from '@ngrx/store';
import { INITIAL_SHOP, SHOP} from '../models/default-shop-items';
import { add, remove } from 'src/app/shop-actions';
import { upgrade_pond } from 'src/app/inventory-actions';

export var SHOP_INITIAL_STATE: ShopState = {
  items: INITIAL_SHOP
};


// Reduces all inventory actions and automatic updates to inventory
export const shopReducer = createReducer(
  SHOP_INITIAL_STATE,
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
      items: new_items
    }
  }),
  on(remove, (shop_state, action) => {
    // Get item type
    let item_type = action.item_type;
    // Get product
    let product = action.product;
    debugger
    // Remove product from shop
    let new_items = structuredClone(shop_state.items);
    delete new_items[item_type][product];
    return {
      ...shop_state,
      items: new_items
    }
  }),

);


