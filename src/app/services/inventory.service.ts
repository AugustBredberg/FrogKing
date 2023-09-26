import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShopState } from 'src/models/states';
import { add, add_frog, evolve_frog, level_up_frog, power_up_frog, remove, upgrade_pond } from '../inventory-actions';
import { SHOP_ITEM_TYPES, ShopItem } from 'src/models/shop-items';
import { EVOLUTION_ENUM } from 'src/models/items';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private store: Store<{ shop: ShopState }>) { }

  // User can add items that are tied to a specific frog etc. Frog is found using uniqueId
  add(item: ShopItem, uniqueId: string = "") {
    var item_type = item.type; // Example: SHOP_ITEM_TYPES.POND
    var product = item.id; // Example: POND_ENUM.FANCY_POND

    switch (item_type) {
      case SHOP_ITEM_TYPES.POND:
        console.log("Adding new pond")
        this.store.dispatch(upgrade_pond({
          shop_item: item
        }));
        break;

      case SHOP_ITEM_TYPES.EVOLUTION:
        // Check if evolving frog or tadpole
        if(item.id == EVOLUTION_ENUM.FROG){
          // Evolve tadpole
          // Add the evolved frog to the inventory
          this.store.dispatch(add_frog({
            evolution: EVOLUTION_ENUM.FROG
          }));
        }else{
          // Evolve frog
          this.store.dispatch(evolve_frog({
            frogId: uniqueId,
            evolution: product
          }));
        }
        break;

      case SHOP_ITEM_TYPES.FROGPOWERUP:
        console.log("Applying powerup " + product + " " + item_type)
        this.store.dispatch(power_up_frog({
            frogId: uniqueId,
            powerUp: product
          }));
        break;

      case SHOP_ITEM_TYPES.LEVELUP:
        console.log("Leveling up frog: " + uniqueId)
        // Level up frog
        this.store.dispatch(level_up_frog({
          frogId: uniqueId
        }));
        break;
    }

  }

  gainTadpoles(tadpoles: number) {
    console.log("Adding " + tadpoles + " tadpoles")
    // Remove item from shop
    this.store.dispatch(add({
      production_rate: tadpoles
    }));
  }

  spendTadpoles(tadpoles: number) {
    console.log("Spending " + tadpoles + " tadpoles")
    // Remove item from shop
    this.store.dispatch(remove({
      cost: tadpoles
    }));
  }
}
