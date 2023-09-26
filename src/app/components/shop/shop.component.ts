import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { upgrade_pond } from 'src/app/inventory-actions';
import { InventoryService } from 'src/app/services/inventory.service';
import { ShopService } from 'src/app/services/shop.service';
import { add, remove } from 'src/app/shop-actions';
import { POND_ENUM } from 'src/models/items';
import { SHOP_ITEM_TYPES, ShopItem } from 'src/models/shop-items';
import { InventoryState, ShopState } from 'src/models/states';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  @Input() inventoryState: InventoryState;
  shop: ShopState;
  SHOP_ITEM_TYPES = SHOP_ITEM_TYPES;

  constructor(private store: Store<{ shop: ShopState }>, private shopService: ShopService, private inventoryService: InventoryService) {
    var shop_state = this.store.select('shop');
    shop_state.subscribe((shop) => {
      this.shop = shop;
    });
   }

   upgradePond(shop_item: ShopItem ) {
    this.shopService.buy(shop_item);
    this.inventoryService.add(shop_item)
  }
}
