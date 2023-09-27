import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InventoryState } from 'src/models/states';
import { Store } from '@ngrx/store';
import { add } from 'src/app/inventory-actions';
import { GameService } from '../../services/game.service';
import { ShopService } from 'src/app/services/shop.service';
import { InventoryService } from 'src/app/services/inventory.service';
import { SHOP, SHOP_ITEM_TYPES } from 'src/models/shop-items';
import { EVOLUTION_ENUM } from 'src/models/items';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  inventory$: Observable<InventoryState>
  inventory: InventoryState
  evolveTadpoleShopItem = SHOP[SHOP_ITEM_TYPES.EVOLUTION][EVOLUTION_ENUM.TIER1];

  frogsInInventory: number = 0;

  constructor(
    private store: Store<{ inventory: InventoryState }>,
    private gameService: GameService,
    private shopService: ShopService,
    private inventoryService: InventoryService) {
    this.inventory$ = store.select('inventory');
    this.inventory$.subscribe((inventory) => {
      this.inventory = inventory;
      this.frogsInInventory = Object.keys(this.inventory.frogs).length;
    });
  }

  ngOnInit() {
    this.gameService.init();
  }

  spawn() {
    console.log("Spawn")
    this.inventoryService.gainTadpoles(1);
  }

  evolveTadpole() {
    console.log("Evolve tadpole")
    this.shopService.buy(this.evolveTadpoleShopItem);
  }


}
