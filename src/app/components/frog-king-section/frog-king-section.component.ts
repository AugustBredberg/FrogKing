import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { InventoryService } from 'src/app/services/inventory.service';
import { InventoryState } from 'src/models/states';

@Component({
  selector: 'app-frog-king-section',
  templateUrl: './frog-king-section.component.html',
  styleUrls: ['./frog-king-section.component.scss'],
})
export class FrogKingSectionComponent {
  inventory$: Observable<InventoryState>;
  inventory: InventoryState;
  constructor(
    private store: Store<{ inventory: InventoryState }>,
    private inventoryService: InventoryService
  ) {
    this.inventory$ = store.select('inventory');
    this.inventory$.subscribe((inventory) => {
      this.inventory = inventory;
    });
  }

  spawn() {
    console.log('Spawn');
    this.inventoryService.gainTadpoles(1);
  }
}
