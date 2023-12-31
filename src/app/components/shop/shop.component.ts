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
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
  @Input() inventoryState: InventoryState;
  shop: ShopState;
  SHOP_ITEM_TYPES = SHOP_ITEM_TYPES;
  currentlyAvailablePowerUpShopItems: ShopItem[] = [];

  constructor(
    private store: Store<{ shop: ShopState }>,
    private shopService: ShopService,
    private inventoryService: InventoryService
  ) {
    var shop_state = this.store.select('shop');
    shop_state.subscribe((shop) => {
      this.shop = shop;
      // Extract all shop items, filter by shopType "test," flatten them into an array, and sort them by cost
      this.currentlyAvailablePowerUpShopItems = Object.values(this.shop.items)
        .flatMap((shopType) => Object.values(shopType).filter(item =>
          item.type === SHOP_ITEM_TYPES.FROGPOWERUP ||
          item.type === SHOP_ITEM_TYPES.KINGPOWERUP ||
          item.type === SHOP_ITEM_TYPES.ELEMENTPOWERUP))
        .sort((a, b) => a.cost - b.cost)
        .slice(0, 12); // Limit the array length to 15 items with shopType FROGPOWERUP
    });
  }
}
