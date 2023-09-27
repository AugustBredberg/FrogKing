import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ShopService } from 'src/app/services/shop.service';
import { EVOLUTION_ENUM } from 'src/models/items';
import { SHOP, SHOP_ITEM_TYPES } from 'src/models/shop-items';
import { InventoryState } from 'src/models/states';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-pond-full-tile',
  templateUrl: './pond-full-tile.component.html',
  styleUrls: ['./pond-full-tile.component.scss'],
})
export class PondFullTileComponent {
  evolveTadpoleShopItem = SHOP[SHOP_ITEM_TYPES.EVOLUTION][EVOLUTION_ENUM.TIER1];
  inventory$: Observable<InventoryState>;
  inventory: InventoryState;
  frogsInInventory: number = 0;

  constructor(
    private shopService: ShopService,
    private store: Store<{ inventory: InventoryState }>
  ) {
    this.inventory$ = store.select('inventory');
    this.inventory$.subscribe((inventory) => {
      this.inventory = inventory;
      this.frogsInInventory = Object.keys(this.inventory.frogs).length;
    });
  }

  spawnFrog() {
    console.log('Evolve tadpole');
    this.shopService.buy(this.evolveTadpoleShopItem);
  }
}
