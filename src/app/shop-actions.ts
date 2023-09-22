import { createAction, props } from '@ngrx/store';
import { POND_ENUM } from 'src/models/items';

export const add = createAction('[Shop] Add', props<{ product: string }>());

export const remove = createAction('[Shop] Remove', props<{ product: string }>());



//export const evolve = createAction('Evolve');
