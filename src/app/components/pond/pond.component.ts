import { Component, Input } from '@angular/core';
import { InventoryState } from 'src/models/states';
import { Store } from '@ngrx/store';
import { add_frog, evolve_frog, remove } from 'src/app/inventory-actions';
import { EVOLUTION_ENUM } from 'src/models/items';
//import { evolve } from 'src/app/actions';

@Component({
  selector: 'app-pond',
  templateUrl: './pond.component.html',
  styleUrls: ['./pond.component.scss']
})
export class PondComponent {
  inventory: InventoryState;

  //
  constructor(private store: Store<{ inventory: InventoryState }>) {
    var inventory_state = this.store.select('inventory');
    inventory_state.subscribe((inventory) => {
      this.inventory = inventory;
    });
  }


  evolveTadpole() {
    console.log("Evolve tadpole")
    // TODO: Dispatch an evolve action

    // Withdraw the cost of evolving from the inventory
    this.store.dispatch(remove({
      cost: 15
    }));
    // Add the evolved frog to the inventory
    this.store.dispatch(add_frog({
      evolution: EVOLUTION_ENUM.FROG
    }));
  }
}
