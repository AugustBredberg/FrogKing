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
import {
  IItemTooltip,
  ITooltip,
  TooltipPosition,
} from 'src/models/components/tooltips';
import { DEFAULT_FROGPOWERUPS } from 'src/models/default-items';
import { TargetingService } from 'src/app/services/targeting.service';
import { environment } from 'src/environments/environment';
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

  environment = environment;
  tooltipData: IItemTooltip;

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
      type: 'item',
      image:
        this.environment.assetsPath +
        'images/items/' +
        this.item.type +
        '/' +
        'item-image-' +
        this.item.defaultItemId +
        '.png',
      itemId: this.item.defaultItemId,
    };
  }

  buyItem(shop_item: ShopItem) {
    switch (shop_item.type) {
      case SHOP_ITEM_TYPES.FROGPOWERUP:
        this.buyPowerUp(shop_item);
        break;
      case SHOP_ITEM_TYPES.KINGPOWERUP:
        this.buyKingPowerUp(shop_item);
        break;
      case SHOP_ITEM_TYPES.ELEMENTPOWERUP:
        this.buyElementPowerUp(shop_item);
        break;
    }
  }
  buyKingPowerUp(shop_item: ShopItem) {
    this.shopService.buy(shop_item);
  }
  buyElementPowerUp(shop_item: ShopItem) {
    this.shopService.buy(shop_item);
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
      this.environment.assetsPath +
        'images/items/' +
        this.item.type +
        '/item-image-' +
        this.item.defaultItemId +
        '.png'
    );
    this.targetingService.setTargetItem(shop_item);
    this.targetingService.setTargetActive(true);

    // Rest of your code
    console.log('buy');
    // var frogId = Object.keys(this.inventoryState.frogs)[0];
    // this.shopService.buy(shop_item);
    // this.inventoryService.add(shop_item, frogId);
  }
}
