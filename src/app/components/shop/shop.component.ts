import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShopState } from 'src/models/states';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  shop: ShopState;

  constructor(private store: Store<{ shop: ShopState }>) {
    var shop_state = this.store.select('shop');
    shop_state.subscribe((shop) => {
      this.shop = shop;
    });
   }


}
