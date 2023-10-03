import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InventoryState } from 'src/models/states';
import { Store } from '@ngrx/store';
import { add } from 'src/app/inventory-actions';
import { GameService } from '../../services/game.service';
import { ShopService } from 'src/app/services/shop.service';
import { InventoryService } from 'src/app/services/inventory.service';
import { SHOP_ITEM_TYPES } from 'src/models/shop-items';
import { EVOLUTION_ENUM, FrogItem } from 'src/models/items';
import { SHOP } from 'src/models/default-shop-items';
import { TargetingService } from 'src/app/services/targeting.service';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  inventory$: Observable<InventoryState>;
  inventory: InventoryState;
  evolveTadpoleShopItem = SHOP[SHOP_ITEM_TYPES.EVOLUTION][EVOLUTION_ENUM.TIER1];

  frogsInInventory: number = 0;

  constructor(
    private store: Store<{ inventory: InventoryState }>,
    private gameService: GameService,
    private shopService: ShopService,
    private inventoryService: InventoryService,
    private targetingService: TargetingService
  ) {
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
    console.log('Spawn');
    this.inventoryService.kingClicked(1);
  }

  evolveTadpole() {
    console.log('Evolve tadpole');
    this.shopService.buy(this.evolveTadpoleShopItem);
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove($event: MouseEvent): void {
    this.targetingService.setTargetCoordinates($event.clientX, $event.clientY);
  } // Use nativeElement to access the DOM element directly

  trackFrog(index: number, frog: KeyValue<string, FrogItem>) {
    // Check for changes to frog level and evolution
    return frog.value ? frog.value.level + frog.value.evolves_into : undefined;
  }
}
