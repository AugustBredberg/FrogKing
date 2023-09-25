import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShopState } from 'src/models/states';
import { remove } from '../inventory-actions';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private store: Store<{ shop: ShopState }>) { }

  add(item_type: string, product: number) {
    console.log("Adding " + product + " " + item_type)
  }
  remove(item_type: string, product: number) {
    console.log("Removing " + product + " " + item_type)
  }

  spendTadpoles(tadpoles: number) {
    console.log("Spending " + tadpoles + " tadpoles")
    // Remove item from shop
    this.store.dispatch(remove({
      cost: tadpoles
    }));
  }
}
