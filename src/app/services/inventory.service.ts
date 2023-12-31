import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShopState } from 'src/models/states';
import {
  add,
  add_element_powerup,
  add_frog,
  evolve_frog,
  level_down_frog,
  level_up_frog,
  level_up_king,
  power_up_frog,
  power_up_king,
  remove,
  remove_frog,
  upgrade_pond,
} from '../inventory-actions';
import { SHOP_ITEM_TYPES, ShopItem } from 'src/models/shop-items';
import {
  EVOLUTION_ENUM,
  FROG_ELEMENT_ENUM,
  FROG_POWERUP_ENUM,
  FROG_POWERUP_SIDE_EFFECT_ENUM,
  FrogPowerUpSideEffect,
} from 'src/models/items';
import { DEFAULT_ELEMENTPOWERUPS, DEFAULT_FROGPOWERUPS, DEFAULT_FROGPOWERUPS_SIDE_EFFECTS } from 'src/models/default-items';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  constructor(private store: Store<{ shop: ShopState }>) {}


  // User can add items that are tied to a specific frog etc. Frog is found using uniqueId
  add(item: ShopItem, uniqueId: string = '', newFrogElement: FROG_ELEMENT_ENUM = FROG_ELEMENT_ENUM.NONE) {
    var item_type = item.type; // Example: SHOP_ITEM_TYPES.POND
    var product = item.defaultItemId; // Example: POND_ENUM.FANCY_POND

    switch (item_type) {
      case SHOP_ITEM_TYPES.KINGLEVELUP:
        // Level up king
        this.store.dispatch(
          level_up_king()
        );
        break;
      case SHOP_ITEM_TYPES.KINGPOWERUP:

        this.store.dispatch(
          power_up_king({
            powerUp: product,
          })
        );
        break;

      case SHOP_ITEM_TYPES.POND:
        this.store.dispatch(
          upgrade_pond({
            shop_item: item,
          })
        );
        break;

      case SHOP_ITEM_TYPES.EVOLUTION:
        // Check if evolving frog or tadpole
        if (item.defaultItemId == EVOLUTION_ENUM.TIER1) {
          // Evolve tadpole
          // Add the evolved frog to the inventory
          this.store.dispatch(
            add_frog({
              evolution: EVOLUTION_ENUM.TIER1
            })
          );
        } else {
          // Evolve frog
          this.store.dispatch(
            evolve_frog({
              frogId: uniqueId,
              evolution: product,
              newElement: newFrogElement,
            })
          );
        }
        break;

      case SHOP_ITEM_TYPES.FROGPOWERUP:
        this.store.dispatch(
          power_up_frog({
            frogId: uniqueId,
            powerUp: product,
          })
        );
        break;

      case SHOP_ITEM_TYPES.FROGLEVELUP:
        // Level up frog
        this.store.dispatch(
          level_up_frog({
            frogId: uniqueId,
          })
        );
        break;

      ////////////////////////
      /// ELEMENT POWERUPS ///
      ////////////////////////
      case SHOP_ITEM_TYPES.ELEMENTPOWERUP:
        // get element string (Undead etc) using product int 0,1,2,3 etc
        var elementstring: string = "";
        Object.values(FROG_ELEMENT_ENUM).forEach(
          (element, index) => {
            if (index == product) {
              elementstring = element;
            }
          }
        );

        var elementPowerup = DEFAULT_ELEMENTPOWERUPS[elementstring];

        // Add element powerup to inventory
        this.store.dispatch(
          add_element_powerup({
            elementPowerup: elementPowerup,
          })
        );
    }
  }

  handleFrogSideEffect(
    frogId: string,
    sideEffectItem: FrogPowerUpSideEffect
  ) {
    var sideEffect = sideEffectItem.kind;
    switch (sideEffect) {
      case FROG_POWERUP_SIDE_EFFECT_ENUM.DIE:
        var sideEffectOccurs = this.willFrogSideEffectOccur(sideEffectItem.risk);
        if (!sideEffectOccurs) return;
        // Kill frog
        this.store.dispatch(
          remove_frog({
            frogId: frogId,
          })
        );
        break;
      case FROG_POWERUP_SIDE_EFFECT_ENUM.LOSE_ALL_LEVELS:
        var sideEffectOccurs = this.willFrogSideEffectOccur(sideEffectItem.risk);
        if (!sideEffectOccurs) return;
        // Level down frog
        this.store.dispatch(
          level_down_frog({
            frogId: frogId,
            levels: 1000,
          })
        );
        break;

      case FROG_POWERUP_SIDE_EFFECT_ENUM.SLEEP:
        var sideEffectOccurs = this.willFrogSideEffectOccur(sideEffectItem.risk);
        if (!sideEffectOccurs) return;
        // Put frog to sleep (apply SLEEPING power up)
        this.store.dispatch(
          power_up_frog({
            frogId: frogId,
            powerUp: FROG_POWERUP_ENUM.SLEEPING,
          })
        );
        break;
      case FROG_POWERUP_SIDE_EFFECT_ENUM.REDUCE_PRODUCTION_RATE:
        var sideEffectOccurs = this.willFrogSideEffectOccur(sideEffectItem.risk);
        if (!sideEffectOccurs) return;
        // Make frog weak (apply WEAK power up)
        this.store.dispatch(
          power_up_frog({
            frogId: frogId,
            powerUp: FROG_POWERUP_ENUM.WEAK,
          })
        );
        break;
    }
  }

  kingClicked(tadpoles: number) {
    // Remove item from shop
    this.store.dispatch(
      add({
        production_rate: tadpoles,
      })
    );
  }

  spendTadpoles(tadpoles: number) {
    // Remove item from shop
    this.store.dispatch(
      remove({
        cost: tadpoles,
      })
    );
  }


  private willFrogSideEffectOccur(risk: number) {
    // Determine if frog dies depending on side effect risk
    var roll = Math.random();
    if (roll < risk) {
      // Kill frog
      return true;
    }
    return false;
  }
}
