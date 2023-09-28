import { Component, Input, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory.service';
import { ShopItemSummary, ShopService } from 'src/app/services/shop.service';
import { InventoryState, ShopState } from 'src/models/states';
import { SHOP_ITEM_TYPES, ShopItem } from 'src/models/shop-items';
import { Store } from '@ngrx/store';
import { ITooltip, TooltipPosition } from 'src/models/components/tooltips';
import { DEFAULT_FROGPOWERUPS } from 'src/models/default-items';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss'],
})
export class ShopItemComponent implements OnInit {
  @Input() item: ShopItem;
  @Input() inventoryState: InventoryState;
  SHOP_ITEM_TYPES = SHOP_ITEM_TYPES;
  shop: ShopState;
  TooltipPosition = TooltipPosition;
  tooltipData: ITooltip;

  constructor(
    private store: Store<{ shop: ShopState }>,
    private shopService: ShopService,
    private inventoryService: InventoryService
  ) {
    var shop_state = this.store.select('shop');
    shop_state.subscribe((shop) => {
      this.shop = shop;
    });
  }

  ngOnInit() {
    const shopItemSummary: ShopItemSummary = this.shopService.lookupShopItem(
      this.item
    );

    this.tooltipData = {
      header: this.item.name,
      positiveText: shopItemSummary.positiveEffects,
      negativeText: shopItemSummary.negativeEffects,
      body: shopItemSummary.description,
      price: shopItemSummary.cost,
      image:
        '../../../assets/images/items/item-image-' +
        this.item.defaultItemId +
        '.png',
      itemId: this.item.defaultItemId,
    };
  }
  buyPowerUp(shop_item: ShopItem) {
    // TODO let the user pick a frog to apply the powerup to
    // For now, apply to first frog in inventory
    var frogId = Object.keys(this.inventoryState.frogs)[0];
    this.shopService.buy(shop_item);
    this.inventoryService.add(shop_item, frogId);
  }
}
