import { createAction, props } from '@ngrx/store';
import { FROG_ELEMENT_ENUM, POND_ENUM } from 'src/models/items';
import { SHOP_ITEM_TYPES } from 'src/models/shop-items';

export const add = createAction(
  '[Shop] Add',
  props<{ item_type: SHOP_ITEM_TYPES; product: number }>()
); // Example: SHOP_ITEM_TYPES.POND, POND_ENUM.FANCY_POND

export const remove = createAction(
  '[Shop] Remove',
  props<{ item_type: SHOP_ITEM_TYPES; product: number }>()
); // Example: SHOP_ITEM_TYPES.POND, POND_ENUM.FANCY_POND

export const elements_changed = createAction(
  '[Shop] Elements changed',
  props<{
    element: FROG_ELEMENT_ENUM;
    newCount: number;
  }>()
);

//export const evolve = createAction('Evolve');
