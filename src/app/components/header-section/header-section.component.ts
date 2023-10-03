import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { InventoryState } from 'src/models/states';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss'],
})
export class HeaderSectionComponent {
  inventory: InventoryState;
  environment = environment;

  constructor(private store: Store<{ inventory: InventoryState }>) {
    var inventory_state = this.store.select('inventory');
    inventory_state.subscribe((inventory) => {
      this.inventory = inventory;
    });
  }
}
