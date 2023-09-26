import { Injectable } from '@angular/core';
import { add } from 'src/app/inventory-actions';
import { Store } from '@ngrx/store';
import { InventoryState } from 'src/models/states';
import { FrogItem } from 'src/models/items';
import { SHOP, SHOP_ITEM_TYPES } from 'src/models/shop-items';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  inventory: InventoryState

  constructor(private store: Store<{ inventory: InventoryState }>) {
    var inventory_state = this.store.select('inventory');
    inventory_state.subscribe((inventory) => {
      this.inventory = inventory;
    });
  }

  init(){
    console.log("GameService init")
    setInterval(() => this.calculate(), 1000);
  }

  private calculate(){
    var frogs = this.inventory.frogs;
    var store = this.store;
    var frogKeys = Object.keys(frogs)
    var calculateFrogProductionRate = this.calculateFrogProductionRate;

    // Only make one dispatch with the accumulated tadpole rate
    var totalTadpoleRate = 0;
    frogKeys.forEach(function(frogKey : string){
      var frogItem = frogs[frogKey];

      // Find tadpole rate for frog
      var tadpole_rate = calculateFrogProductionRate(frogItem);
      totalTadpoleRate += tadpole_rate;

    });
    store.dispatch(add({
      production_rate: totalTadpoleRate
    }));
  }

  public calculateFrogProductionRate(frogItem: FrogItem){
    // Find tadpole rate for frog
    var bonus_production_level = (frogItem.level - 1) * frogItem.level_multiplier * frogItem.production_rate;
    var tadpole_rate = frogItem.production_rate + bonus_production_level;
    return +tadpole_rate.toFixed(2);
  }
  public calculateFrogLevelUpCost(frogItem: FrogItem){
    var frog_shop_item = SHOP[SHOP_ITEM_TYPES.LEVELUP][frogItem.kind];
    var cost = frog_shop_item.cost;
    cost += cost * frogItem.level * frog_shop_item.cost_multiplier;
    return +cost.toFixed(2);
  }
}
