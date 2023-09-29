import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShopItemSummary, ShopService } from 'src/app/services/shop.service';
import { EVOLUTION_ENUM } from 'src/models/items';
import { SHOP_ITEM_TYPES } from 'src/models/shop-items';
import { SHOP } from 'src/models/default-shop-items';
import { InventoryState, ShopState } from 'src/models/states';
import { Store } from '@ngrx/store';
import { InventoryService } from 'src/app/services/inventory.service';
import { ITooltip, TooltipPosition } from 'src/models/components/tooltips';

@Component({
  selector: 'app-spawn-frog-tile',
  templateUrl: './spawn-frog-tile.component.html',
  styleUrls: ['./spawn-frog-tile.component.scss'],
})
export class SpawnFrogTileComponent implements OnInit {
  evolveTadpoleShopItem = SHOP[SHOP_ITEM_TYPES.EVOLUTION][EVOLUTION_ENUM.TIER1];
  inventory$: Observable<InventoryState>;
  inventory: InventoryState;
  frogsInInventory: number = 0;
  shop: ShopState;
  tooltipData: ITooltip;
  TooltipPosition = TooltipPosition;

  constructor(
    private shopService: ShopService,
    private store: Store<{ inventory: InventoryState; shop: ShopState }>,
    private inventoryService: InventoryService
  ) {
    this.inventory$ = store.select('inventory');
    this.inventory$.subscribe((inventory) => {
      this.inventory = inventory;
      this.frogsInInventory = Object.keys(this.inventory.frogs).length;
    });
    var shop_state = this.store.select('shop');
    shop_state.subscribe((shop) => {
      this.shop = shop;
    });
  }

  ngOnInit() {
    this.tooltipData = {
      header: "Can't afford!",
      positiveText: [],
      negativeText: [],
      body: '',
      price: 20,
      image: '../../../assets/images/frogs/frog1.png',
      itemId: 0,
    };
  }

  spawnFrog() {
    this.shopService.buy(this.evolveTadpoleShopItem);
  }
}
