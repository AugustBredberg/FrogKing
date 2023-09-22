import { ShopState } from '../models/states';

import { createReducer, on } from '@ngrx/store';
import { INITIAL_SHOP, SHOP} from '../models/shop-items';
import { add, remove } from 'src/app/shop-actions';

export var SHOP_INITIAL_STATE: ShopState = {
  items: INITIAL_SHOP
};


// Reduces all inventory actions and automatic updates to inventory
export const shopReducer = createReducer(
  SHOP_INITIAL_STATE,
  on(add, (shop_state, action) => {
    // Add product to shop
    let new_items = { ...shop_state.items };
    new_items[action.product] = SHOP[action.product];
    return {
      ...shop_state,
      items: new_items
    }
  }),
  on(remove, (shop_state, action) => {
    // Remove product from shop
    let new_items = { ...shop_state.items };
    delete new_items[action.product];
    return {
      ...shop_state,
      items: new_items
    }
  }),

);


