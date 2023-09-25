import { Component, Input } from '@angular/core';
import { InventoryState } from 'src/models/states';
import { Store } from '@ngrx/store';

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
}
