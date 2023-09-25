import { FrogItem, PondItem, PONDS } from './items';
import { SHOP_ITEM_TYPES, ShopItem,  } from './shop-items';


export interface InventoryState {
  tadpoles: number;
  frogs: FrogItem[];//{ [itemName: string]: FrogItem };
  pond: PondItem;
}
/*
export interface FrogState {
  frogs: { [itemName: string]: FrogItem };
}

export interface PondState {
  pond: PondItem;
}
*/

export interface ShopState {
  items: { [itemName: string]: { [itemName: string]: ShopItem } };
}
