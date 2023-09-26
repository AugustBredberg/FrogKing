import { createAction, props } from '@ngrx/store';
import { EVOLUTION_ENUM, FROG_POWERUP_ENUM, FrogItem, POND_ENUM, PondItem } from 'src/models/items';
import { ShopItem } from 'src/models/shop-items';

export const add = createAction('[Tadpoles] Add', props<{ production_rate: number }>());

export const remove = createAction('[Tadpoles] Remove', props<{ cost: number }>());


export const add_frog = createAction('[Frog] Add', props<{ evolution: EVOLUTION_ENUM }>());
export const remove_frog = createAction('[Frog] Remove', props<{ frogId: string }>());
export const level_up_frog = createAction('[Frog] Level Up', props<{ frogId: string }>());
export const evolve_frog = createAction('[Frog] Evolve', props<{ frogId: string, evolution: EVOLUTION_ENUM }>());
export const power_up_frog = createAction('[Frog] Power Up', props<{ frogId: string, powerUp: FROG_POWERUP_ENUM }>());
export const power_down_frog = createAction('[Frog] Power Down', props<{ frogId: string, powerUp: FROG_POWERUP_ENUM }>());

export const upgrade_pond = createAction('[Pond] Upgrade', props<{ shop_item: ShopItem }>());
