import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { upgrade_pond } from 'src/app/inventory-actions';
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

  constructor(private store: Store<{ shop: ShopState }>, private shopService: ShopService) {
    var shop_state = this.store.select('shop');
    shop_state.subscribe((shop) => {
      this.shop = shop;
    });
   }

   buy(item: ShopItem) {
    this.shopService.buy(item);
  }

   upgradePond(shop_item: ShopItem ) {
    this.buy(shop_item)
    // TODO: Dispatch an evolve action

    /*
    this.store.dispatch(upgrade_pond({
      shop_item: shop_item
    }));
    */
  }
}
