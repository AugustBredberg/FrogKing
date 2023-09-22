import { Injectable } from '@angular/core';
import { add } from 'src/app/inventory-actions';
import { Store } from '@ngrx/store';
import { InventoryState } from 'src/models/states';

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
    // TODO: Call add() with the production rate of each frog in the inventory
    var frogs = this.inventory.frogs;
    var store = this.store;
    Object.keys(frogs).forEach(function(frog : string){
      var frogItem = frogs[frog];

      // Find tadpole rate for frog
      var bonus_production_level = (frogItem.level - 1) * frogItem.level_multiplier * frogItem.production_rate;
      var tadpole_rate = frogItem.production_rate + bonus_production_level;
      store.dispatch(add({
        production_rate: tadpole_rate
      }));
    });
  }
}
