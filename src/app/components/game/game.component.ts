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
import { SoundService } from 'src/app/services/sound.service';
import { environment } from 'src/environments/environment';
import { SettingsDialogComponent } from '../settings-dialog/settings-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  inventory$: Observable<InventoryState>;
  inventory: InventoryState;
  evolveTadpoleShopItem = SHOP[SHOP_ITEM_TYPES.EVOLUTION][EVOLUTION_ENUM.TIER1];
  soundMuted: boolean = true;
  musicMuted: boolean = true;
  frogsInInventory: number = 0;
  environment = environment;
  constructor(
    private store: Store<{ inventory: InventoryState }>,
    private gameService: GameService,
    private shopService: ShopService,
    private inventoryService: InventoryService,
    private targetingService: TargetingService,
    private soundService: SoundService,
    public dialog: MatDialog
  ) {
    this.inventory$ = store.select('inventory');
    this.inventory$.subscribe((inventory) => {
      this.inventory = inventory;
      this.frogsInInventory = Object.keys(this.inventory.frogs).length;
    });
  }

  ngOnInit() {
    this.gameService.init();
    this.openSettings();
  }

  spawn() {
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

  trackFrog(
    inventory: InventoryState,
    index: number,
    frog: KeyValue<string, FrogItem>
  ) {
    // Check for changes to frog level and evolution

    var frogPowerupChanges = frog.value.power_ups
      .map((powerup) => powerup.kind)
      .join('');

    var elementPowerupChanges = Object.values(this.inventory.elementPowerUps)
      .map((powerups) => powerups.map((powerup) => powerup.kind).join(''))
      .join('');

    return frog.value
      ? frog.value.level +
          frog.value.evolves_into +
          frogPowerupChanges +
          elementPowerupChanges
      : undefined;
  }

  openSettings() {
    if (this.targetingService.getTargetActive()) {
      return;
    }
    let dialogRef = this.dialog.open(SettingsDialogComponent, {
      height: '600px',
      width: '600px',
      panelClass: 'evolve-dialog-class',
    });
  }
}
