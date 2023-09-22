import { InventoryState } from '../models/states';
import { EVOLUTION_ENUM, FROGS, FrogItem, INVENTORY_ENUM, PONDS, POND_ENUM, PondItem } from '../models/items'; // Inventory is initially empty

import { createReducer, on } from '@ngrx/store';
import { add, add_frog, evolve_frog, remove } from '../app/inventory-actions';

export var INVENTORY_INITIAL_STATE: InventoryState = {
  tadpoles: 0,
  frogs: {}, // Initially empty
  /*
  {
    [EVOLUTION_ENUM.FROG]: FROGS[EVOLUTION_ENUM.FROG] // for testing, start with 1 frog
  },*/
  pond: PONDS[POND_ENUM.SIMPLE_POND]
};


// Reduces all inventory actions and automatic updates to inventory
export const inventoryReducer = createReducer(
  INVENTORY_INITIAL_STATE,
  on(add, (inventory_state, action) => {
    // Increase amount of tadpoles by production rate
    return {
      ...inventory_state,
      tadpoles: inventory_state.pond.tadpole_capacity < inventory_state.tadpoles + action.production_rate // If tadpole capacity is reached, max out tadpoles
        ? inventory_state.pond.tadpole_capacity
        : inventory_state.tadpoles + action.production_rate
    }
  }),
  on(remove, (inventory_state, action) => {
    // Reduce amount of tadpoles by cost
    return {
      ...inventory_state,
      tadpoles: inventory_state.tadpoles - action.cost < 0 // If user can't afford, don't remove
        ? inventory_state.tadpoles
        : inventory_state.tadpoles - action.cost
    }
  }),
  on(add_frog, (inventory_state, action) => {
    // Put given frog evolution in inventory of frogs
    let current_frogs = { ...inventory_state.frogs };

    // Check if frog evolution is already in inventory
    if (current_frogs[action.evolution]) {
      // If so, increase count
      //current_frogs[action.evolution].count++;
      return {
        ...inventory_state,
        frogs: {
          ...inventory_state.frogs,
          [action.evolution]: inventory_state.frogs[action.evolution].count + 1
        }
      }
    }
    // If not, add frog evolution to inventory
    let new_frogs = { ...inventory_state.frogs };
    let new_frog = { ...FROGS[action.evolution] };
    new_frog.count++;
    new_frog.level = 1;
    new_frogs[action.evolution] = new_frog;
    return {
      ...inventory_state,
      frogs: new_frogs
    }
  }),
  on(evolve_frog, (inventory_state, action) => {
    // Put given frog evolution in inventory of frogs
    let new_frogs = { ...inventory_state.frogs };

    // Get the frog evolution
    let new_frog = FROGS[action.evolution]

    //let new_frog = { ...new_frogs[action.evolution] };
    //new_frog.count++;
    //new_frog.level = 1;
    new_frogs[action.evolution] = new_frog;
    return {
      ...inventory_state,
      frogs: {
        ...inventory_state.frogs,
        [action.evolution]: new_frog
      }
    }
  }),
);


