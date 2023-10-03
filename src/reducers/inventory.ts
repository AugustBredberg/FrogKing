import { InventoryState } from '../models/states';
import {
  EVOLUTION_ENUM,
  FrogItem,
  CURRENCY_ENUM,
  POND_ENUM,
  PondItem,
  FROG_ELEMENT_ENUM,
} from '../models/items'; // Inventory is initially empty

import {
  DEFAULT_FROGPOWERUPS,
  DEFAULT_FROGS,
  DEFAULT_FROG_KING_POWERUPS,
  DEFAULT_PONDS,
} from '../models/default-items';

import { createReducer, on } from '@ngrx/store';
import {
  add,
  add_frog,
  evolve_frog,
  level_down_frog,
  level_up_frog,
  level_up_king,
  power_down_frog,
  power_down_king,
  power_up_frog,
  power_up_king,
  remove,
  remove_frog,
  upgrade_pond,
} from '../app/inventory-actions';

export var INVENTORY_INITIAL_STATE: InventoryState = {
  tadpoles: 50,
  tadpolesPreviousState: 0,
  frogKing: {
    tadpolesPerClick: 1,
    level: 1,
    powerUps: [],
  },
  frogs: {},
  pond: DEFAULT_PONDS[POND_ENUM.WATER_GLASS],
};

// Reduces all inventory actions and automatic updates to inventory
export const inventoryReducer = createReducer(
  INVENTORY_INITIAL_STATE,
  on(add, (inventory_state, action) => {
    // If we recieved a frog ID, add tadpoles to that frog's lifetime production AND the inventory

    // Return inventory updated tadpoles and with given frog's lifetime production increased
    return {
      ...inventory_state,
      tadpolesPreviousState: inventory_state.tadpoles,
      tadpoles: inventory_state.tadpoles + action.production_rate,
      frogs: action.frogId
        ? {
            ...inventory_state.frogs,
            [action.frogId]: {
              ...inventory_state.frogs[action.frogId],
              lifetime_tadpoles_produced:
                inventory_state.frogs[action.frogId]
                  ?.lifetime_tadpoles_produced + action.production_rate,
            },
          }
        : inventory_state.frogs,
    };
  }),
  on(remove, (inventory_state, action) => {
    // Reduce amount of tadpoles by cost
    return {
      ...inventory_state,
      tadpolesPreviousState: inventory_state.tadpoles,
      tadpoles:
        inventory_state.tadpoles - action.cost < 0 // If user can't afford, don't remove
          ? inventory_state.tadpoles
          : inventory_state.tadpoles - action.cost,
    };
  }),
  on(level_up_king, (inventory_state, action) => {
    // Return inventory with king level increased by 1
    return {
      ...inventory_state,
      frogKing: {
        ...inventory_state.frogKing,
        level: inventory_state.frogKing.level + 1,
      },
    };
  }),
  on(power_up_king, (inventory_state, action) => {
    // Get powerup from default powerups
    var powerup = structuredClone(DEFAULT_FROG_KING_POWERUPS[action.powerUp]);
    var powerExpiration = new Date();
    powerExpiration.setSeconds(powerExpiration.getSeconds() + powerup.duration);
    powerup.expiration = powerExpiration;

    // Return inventory with given frog powered up
    return {
      ...inventory_state,
      frogKing: {
        ...inventory_state.frogKing,
        powerUps: [...inventory_state.frogKing.powerUps, powerup],
      },
    };
  }),
  on(power_down_king, (inventory_state, action) => {
    // Remove given powerup from frog
    // Return inventory with given powerup removed from given frog
    return {
      ...inventory_state,
      frogKing: {
        ...inventory_state.frogKing,
        powerUps: inventory_state.frogKing.powerUps.filter(
          (power_up) => power_up.kind != action.powerUp
        ),
      },
    };
  }),
  on(add_frog, (inventory_state, action) => {
    // Put given frog evolution in inventory of frogs
    let new_frog = structuredClone(DEFAULT_FROGS[action.evolution]);
    new_frog.id = crypto.randomUUID();

    // Set next possible element choices for frog (all elements, shuffled)
    new_frog.next_possible_element_choices = Object.values(
      FROG_ELEMENT_ENUM
    ).filter(
      (element) => element != FROG_ELEMENT_ENUM.NONE
    ) as FROG_ELEMENT_ENUM[];
    new_frog.next_possible_element_choices.sort(() => Math.random() - 0.5);

    return {
      ...inventory_state,
      frogs: {
        ...inventory_state.frogs,
        [new_frog.id]: new_frog,
      },
    };
  }),
  on(remove_frog, (inventory_state, action) => {
    // Remove given frog from inventory of frogs
    let new_frogs = structuredClone(inventory_state.frogs);
    delete new_frogs[action.frogId];
    return {
      ...inventory_state,
      frogs: new_frogs,
    };
  }),
  on(power_up_frog, (inventory_state, action) => {
    // Get powerup from default powerups
    var powerup = structuredClone(DEFAULT_FROGPOWERUPS[action.powerUp]);
    var powerExpiration = new Date();
    powerExpiration.setSeconds(powerExpiration.getSeconds() + powerup.duration);
    powerup.expiration = powerExpiration;

    // Return inventory with given frog powered up
    return {
      ...inventory_state,
      frogs: {
        ...inventory_state.frogs,
        [action.frogId]: {
          ...inventory_state.frogs[action.frogId],
          power_ups: [
            ...inventory_state.frogs[action.frogId].power_ups,
            powerup,
          ],
        },
      },
    };
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
          power_ups: inventory_state.frogs[action.frogId].power_ups.filter(
            (power_up) => power_up.kind != action.powerUp
          ),
        },
      },
    };
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
        },
      },
    };
  }),
  on(level_down_frog, (inventory_state, action) => {
    // Does frog exist?
    if (!inventory_state.frogs[action.frogId]) {
      return inventory_state;
    }

    // Return inventory with given frog leveled down by given levels
    var new_level = inventory_state.frogs[action.frogId].level - action.levels;
    if (new_level < 1) {
      new_level = 1;
    }
    return {
      ...inventory_state,
      frogs: {
        ...inventory_state.frogs,
        [action.frogId]: {
          ...inventory_state.frogs[action.frogId],
          level: new_level,
        },
      },
    };
  }),
  on(evolve_frog, (inventory_state, action) => {
    var new_frog = structuredClone(DEFAULT_FROGS[action.evolution]);
    new_frog.id = action.frogId;
    new_frog.element_type = structuredClone(
      inventory_state.frogs[action.frogId].element_type
    );

    // Set total produced to previous frog's total produced
    new_frog.lifetime_tadpoles_produced =
      inventory_state.frogs[action.frogId].lifetime_tadpoles_produced;

    // If we recieved a new element, add the new element to the frog
    var newElement = action.newElement;
    if (newElement != FROG_ELEMENT_ENUM.NONE) {
      new_frog.element_type[newElement] += 1;
    }

    // Set next possible element choices for frog
    // Check if the frog already has 4 different elements
    var elementCount = 0;
    Object.keys(new_frog.element_type).forEach((element) => {
      if (new_frog.element_type[element] > 0) {
        elementCount += 1;
      }
    });
    // Case 1: Frog has 4 different elements.
    if (elementCount == 4) {
      // Set next possible element choices to the 4 elements the frog has
      new_frog.next_possible_element_choices = Object.keys(
        new_frog.element_type
      ).filter(
        (element) => new_frog.element_type[element as FROG_ELEMENT_ENUM] > 0
      ) as FROG_ELEMENT_ENUM[];

      // Shuffle the elements
      new_frog.next_possible_element_choices.sort(() => Math.random() - 0.5);
      // Append the rest of the elements (except NONE)
      Object.values(FROG_ELEMENT_ENUM).forEach((element) => {
        if (
          !new_frog.next_possible_element_choices.includes(
            element as FROG_ELEMENT_ENUM
          ) &&
          element != FROG_ELEMENT_ENUM.NONE
        ) {
          new_frog.next_possible_element_choices.push(
            element as FROG_ELEMENT_ENUM
          );
        }
      });
    }
    // Case 2: Frog has less than 4 different elements. Set next possible element choices to all elements (except NONE)
    else {
      new_frog.next_possible_element_choices = Object.values(
        FROG_ELEMENT_ENUM
      ).filter(
        (element) => element != FROG_ELEMENT_ENUM.NONE
      ) as FROG_ELEMENT_ENUM[];
    }

    // Return inventory with given frog evolved and new element if applicable
    return {
      ...inventory_state,
      frogs: {
        ...inventory_state.frogs,
        [action.frogId]: new_frog,
      },
    };
  }),
  on(upgrade_pond, (inventory_state, action) => {
    // Set pond to given pond
    var new_pond = DEFAULT_PONDS[action.shop_item.defaultItemId];

    // Remove tadpoles from inventory
    remove({ cost: action.shop_item.cost });

    return {
      ...inventory_state,
      pond: new_pond,
    };
  })
);
