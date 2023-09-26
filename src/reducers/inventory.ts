import { InventoryState } from '../models/states';
import { EVOLUTION_ENUM, DEFAULT_FROGS, FrogItem, CURRENCY_ENUM, PONDS, POND_ENUM, PondItem, DEFAULT_FROGPOWERUPS } from '../models/items'; // Inventory is initially empty

import { createReducer, on } from '@ngrx/store';
import { add, add_frog, evolve_frog, level_up_frog, power_down_frog, power_up_frog, remove, upgrade_pond } from '../app/inventory-actions';

export var INVENTORY_INITIAL_STATE: InventoryState = {
  tadpoles: 0,
  tadpolesPreviousState: 0,
  frogs: {}, //[], // Initially empty
  /*
  {
    [EVOLUTION_ENUM.FROG]: DEFAULT_FROGS[EVOLUTION_ENUM.FROG] // for testing, start with 1 frog
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
      tadpolesPreviousState: inventory_state.tadpoles,
      tadpoles: inventory_state.pond.tadpole_capacity < inventory_state.tadpoles + action.production_rate // If tadpole capacity is reached, max out tadpoles
        ? inventory_state.pond.tadpole_capacity
        : inventory_state.tadpoles + action.production_rate
    }
  }),
  on(remove, (inventory_state, action) => {
    // Reduce amount of tadpoles by cost
    return {
      ...inventory_state,
      tadpolesPreviousState: inventory_state.tadpoles,
      tadpoles: inventory_state.tadpoles - action.cost < 0 // If user can't afford, don't remove
        ? inventory_state.tadpoles
        : inventory_state.tadpoles - action.cost
    }
  }),
  on(add_frog, (inventory_state, action) => {
    // Put given frog evolution in inventory of frogs
    let new_frog = structuredClone(DEFAULT_FROGS[action.evolution])
    new_frog.id = crypto.randomUUID();
    return {
      ...inventory_state,
      frogs: {
        ...inventory_state.frogs,
        [new_frog.id]: new_frog
      }
    }
  }),
  on(power_up_frog, (inventory_state, action) => {
    // Get powerup from default powerups
    var powerup = DEFAULT_FROGPOWERUPS[action.powerUp];
    var powerExpiration = new Date();
    powerExpiration.setSeconds(powerExpiration.getSeconds() + powerup.duration);
    powerup.expiration = powerExpiration; //new Date(Date.now() + powerup.duration * 1000);
    //var test = powerup.expiration.toTimeString();
    //var test2 = powerExpiration.toTimeString();

    // Return inventory with given frog powered up
    return {
      ...inventory_state,
      frogs: {
        ...inventory_state.frogs,
        [action.frogId]: {
          ...inventory_state.frogs[action.frogId],
          power_ups: [
            ...inventory_state.frogs[action.frogId].power_ups,
            powerup
          ]
        }
      }
    }
  }),
  on(power_down_frog, (inventory_state, action) => {
    // Remove given powerup from frog
    // Return inventory with given powerup removed from given frog
    return {
      ...inventory_state,
      frogs: {
        ...inventory_state.frogs,
        [action.frogId]: {
          ...inventory_state.frogs[action.frogId],
          power_ups: inventory_state.frogs[action.frogId].power_ups.filter((power_up) => power_up.kind != action.powerUp)
        }
      }
    }


  }),
  on(level_up_frog, (inventory_state, action) => {
    // Return inventory with given frog leveled up
    return {
      ...inventory_state,
      frogs: {
        ...inventory_state.frogs,
        [action.frogId]: {
          ...inventory_state.frogs[action.frogId],
          level: inventory_state.frogs[action.frogId].level + 1,
          //production_rate: inventory_state.frogs[action.frogId].production_rate * (1 + inventory_state.frogs[action.frogId].level_multiplier)
        }
      }
    }
  }),
  on(evolve_frog, (inventory_state, action) => {
    // Return inventory with given frog evolved
    var new_frog = structuredClone(DEFAULT_FROGS[action.evolution])
    new_frog.id = action.frogId;
    return {
      ...inventory_state,
      frogs: {
        ...inventory_state.frogs,
        [action.frogId]: new_frog
      }
    }
  }),
  on(upgrade_pond, (inventory_state, action) => {

    // Set pond to given pond
    var new_pond = PONDS[action.shop_item.id];

    // Remove tadpoles from inventory
    remove({ cost: action.shop_item.cost });

    return {
      ...inventory_state,
      pond: new_pond
    }
  }),
);


