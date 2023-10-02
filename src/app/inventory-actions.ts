import { createAction, props } from '@ngrx/store';
import {
  EVOLUTION_ENUM,
  FROG_ELEMENT_ENUM,
  FROG_POWERUP_ENUM,
  FrogItem,
  KING_POWERUP_ENUM,
  POND_ENUM,
  PondItem,
} from 'src/models/items';
import { ShopItem } from 'src/models/shop-items';

export const add = createAction(
  '[Tadpoles] Add',
  props<{ production_rate: number, frogId?: string }>()
);

export const remove = createAction(
  '[Tadpoles] Remove',
  props<{ cost: number }>()
);

export const level_up_king = createAction(
  '[King] Level Up'
);
export const power_up_king = createAction(
  '[King] Power Up',
  props<{ powerUp: KING_POWERUP_ENUM }>()
);
export const power_down_king = createAction(
  '[King] Power Down',
  props<{ powerUp: KING_POWERUP_ENUM }>()
);

export const add_frog = createAction(
  '[Frog] Add',
  props<{ evolution: EVOLUTION_ENUM }>()
);
export const remove_frog = createAction(
  '[Frog] Remove',
  props<{ frogId: string }>()
);

export const level_up_frog = createAction(
  '[Frog] Level Up',
  props<{ frogId: string }>()
);
export const level_down_frog = createAction(
  '[Frog] Level Down',
  props<{ frogId: string; levels: number }>()
);

export const evolve_frog = createAction(
  '[Frog] Evolve',
  props<{
    frogId: string;
    evolution: EVOLUTION_ENUM;
    newElement: FROG_ELEMENT_ENUM;
  }>()
);

export const power_up_frog = createAction(
  '[Frog] Power Up',
  props<{ frogId: string; powerUp: FROG_POWERUP_ENUM }>()
);
export const power_down_frog = createAction(
  '[Frog] Power Down',
  props<{ frogId: string; powerUp: FROG_POWERUP_ENUM }>()
);

export const upgrade_pond = createAction(
  '[Pond] Upgrade',
  props<{ shop_item: ShopItem }>()
);
