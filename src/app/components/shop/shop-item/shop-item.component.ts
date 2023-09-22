import { Component, Input } from '@angular/core';
import { ShopItem } from 'src/models/shop-items';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss']
})
export class ShopItemComponent {
  @Input() item: ShopItem;

}
