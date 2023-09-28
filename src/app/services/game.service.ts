import { Injectable } from '@angular/core';
import { add, power_down_frog } from 'src/app/inventory-actions';
import { Store } from '@ngrx/store';
import { InventoryState } from 'src/models/states';
import { FROG_POWERUP_SIDE_EFFECT_ENUM, FrogItem } from 'src/models/items';
import { SHOP_ITEM_TYPES } from 'src/models/shop-items';
import { InventoryService } from './inventory.service';
import { DEFAULT_FROGPOWERUPS_SIDE_EFFECTS } from 'src/models/default-items';
import { SHOP } from 'src/models/default-shop-items';
@Injectable({
  providedIn: 'root',
})
export class GameService {
  inventory: InventoryState;

  constructor(private store: Store<{ inventory: InventoryState }>, private inventoryService: InventoryService) {
    var inventory_state = this.store.select('inventory');
    inventory_state.subscribe((inventory) => {
      this.inventory = inventory;
    });
  }

  init() {
    console.log('GameService init');
    setInterval(() => this.calculate(), 1000);
  }

  private calculate() {
    var frogs = this.inventory.frogs;
    var store = this.store;
    var frogKeys = Object.keys(frogs);

    // Only make one dispatch with the accumulated tadpole rate
    var totalTadpoleRate = 0;
    frogKeys.forEach((frogKey: string) => {
      var frogItem = frogs[frogKey];

      // Find tadpole rate for frog
      var tadpole_rate = this.calculateFrogProductionRate(frogItem);
      totalTadpoleRate += tadpole_rate;
      store.dispatch(
      add({
        production_rate: totalTadpoleRate,
        frogId: frogItem.id,
      })
    );
    });
  }

  public calculateTotalProductionRate() {
    var totalTadpoleRate = 0;
    Object.keys(this.inventory.frogs).forEach((frogId: string) => {
      var frogItem = this.inventory.frogs[frogId];
      var tadpole_rate = this.calculateFrogProductionRate(frogItem);
      totalTadpoleRate += tadpole_rate;
    });
    return totalTadpoleRate;
  }

  public calculateFrogProductionRate(frogItem: FrogItem) {
    // Find tadpole rate for frog
    var bonus_production_level =
      (frogItem.level - 1) *
      frogItem.level_multiplier *
      frogItem.production_rate;
    var tadpole_rate = frogItem.production_rate + bonus_production_level;

    // Find new production rate after applying powerups
    if (frogItem.power_ups.length > 0) {
      var power_up_production = this.calculateFrogPowerUpProduction(frogItem, tadpole_rate);
      tadpole_rate = power_up_production;
    }
    return +tadpole_rate.toFixed(2);
  }
  public calculateFrogLevelUpCost(frogItem: FrogItem) {
    var frog_shop_item = SHOP[SHOP_ITEM_TYPES.LEVELUP][frogItem.kind];
    var cost = frog_shop_item.cost;
    cost += cost * frogItem.level * frog_shop_item.cost_multiplier;
    return +cost.toFixed(2);
  }

  public calculateFrogPowerUpProduction(frogItem: FrogItem, currentTadpoleRate: number) {
    var power_ups = frogItem.power_ups;
    //var power_up_production = 0;
    power_ups.forEach( (power_up) => {
      // Remove power-up if expired
      if (new Date() > power_up.expiration) {
        // Remove power-up
        this.store.dispatch(power_down_frog({
          frogId: frogItem.id,
          powerUp: power_up.kind
        }));
        // Handle power up side effects
        power_up.sideEffects.forEach((sideEffect) => {
          var sideEffectItem = DEFAULT_FROGPOWERUPS_SIDE_EFFECTS[sideEffect];
          this.inventoryService.handleFrogSideEffect(frogItem.id, sideEffectItem);
        });
        return;
      }

      currentTadpoleRate *= power_up.productionRateMultiplier;
    });
    return currentTadpoleRate;
  }
}
