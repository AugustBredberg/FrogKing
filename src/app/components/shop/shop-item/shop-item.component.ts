import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { InventoryService } from 'src/app/services/inventory.service';
import { ShopItemSummary, ShopService } from 'src/app/services/shop.service';
import { InventoryState, ShopState } from 'src/models/states';
import { SHOP_ITEM_TYPES, ShopItem } from 'src/models/shop-items';
import { Store } from '@ngrx/store';
import { ITooltip, TooltipPosition } from 'src/models/components/tooltips';
import { DEFAULT_FROGPOWERUPS } from 'src/models/default-items';
import { TargetingService } from 'src/app/services/targeting.service';

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

  frogCount: number;
  constructor(
    private el: ElementRef,
    private store: Store<{ shop: ShopState }>,
    private shopService: ShopService,
    private inventoryService: InventoryService,
    private targetingService: TargetingService
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
    console.log(this.item.cost, this.inventoryState.tadpoles);
    this.frogCount = Object.keys(this.inventoryState.frogs).length;
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
    // Calculate the center of the component
    const component = this.el.nativeElement; // Replace 'yourComponentId' with your component's actual id
    const componentRect = component.getBoundingClientRect();
    const centerX = componentRect.left - componentRect.width / 6;
    const centerY = componentRect.top - componentRect.height / 3;

    // Set the center coordinates using targetingService
    this.targetingService.setSourceCoordinates(centerX, centerY);
    this.targetingService.setTargetImage(
      '../../../assets/images/items/item-image-' +
        this.item.defaultItemId +
        '.png'
    );
    this.targetingService.setTargetActive(true);

    // Rest of your code
    console.log('buy');
    // var frogId = Object.keys(this.inventoryState.frogs)[0];
    // this.shopService.buy(shop_item);
    // this.inventoryService.add(shop_item, frogId);
  }
}
