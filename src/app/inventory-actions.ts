import { createAction, props } from '@ngrx/store';
import { EVOLUTION_ENUM, POND_ENUM, PondItem } from 'src/models/items';
import { ShopItem } from 'src/models/shop-items';

export const add = createAction('[Tadpoles] Add', props<{ production_rate: number }>());

export const remove = createAction('[Tadpoles] Remove', props<{ cost: number }>());


export const add_frog = createAction('[Frog] Add', props<{ evolution: EVOLUTION_ENUM }>());
export const evolve_frog = createAction('[Frog] Evolve', props<{ evolution: EVOLUTION_ENUM }>());
export const upgrade_pond = createAction('[Pond] Upgrade', props<{ shop_item: ShopItem }>());
