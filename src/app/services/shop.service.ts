import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { SHOP_ITEM_TYPES, ShopItem } from 'src/models/shop-items';
import { ShopState } from 'src/models/states';
import { add, remove } from '../shop-actions';
import { PONDS } from 'src/models/items';
import { InventoryService } from './inventory.service';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private store: Store<{ shop: ShopState }>, private invService: InventoryService) { }

  buy(item: ShopItem) {
    switch (item.type) {
      case SHOP_ITEM_TYPES.POND:
        console.log("Buying pond")
        // Withdraw cost from inventory
        this.invService.spendTadpoles(item.cost);

        // Remove item from shop
        this.store.dispatch(remove({
          item_type: SHOP_ITEM_TYPES.POND,
          product: item.id
        }));

        // Add next pond upgrade to shop
        if(PONDS[item.id].next_pond == -1) break;
        var next_pond = PONDS[item.id].next_pond;
        this.store.dispatch(add({
          item_type: SHOP_ITEM_TYPES.POND,
          product: next_pond
        }));
        break;

      case SHOP_ITEM_TYPES.EVOLUTION:
        console.log("Buying frog")
        break;

      case SHOP_ITEM_TYPES.FROGJUICE:
        console.log("Buying frog juice")
        break;

      case SHOP_ITEM_TYPES.LEVELUP:
        console.log("Buying level up")
        break;

    }

    // Spend tadpoles
    // TODO call spend tadpoles in inventory service
  }
}
