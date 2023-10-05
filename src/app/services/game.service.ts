import { Injectable } from '@angular/core';
import { add, power_down_frog, power_down_king } from 'src/app/inventory-actions';
import { Store } from '@ngrx/store';
import { InventoryState, ShopState } from 'src/models/states';
import { ElementPowerUpItem, FROG_POWERUP_SIDE_EFFECT_ENUM, FrogItem, KING_ACTIONS } from 'src/models/items';
import { SHOP_ITEM_TYPES } from 'src/models/shop-items';
import { InventoryService } from './inventory.service';
import { DEFAULT_FROGPOWERUPS_SIDE_EFFECTS } from 'src/models/default-items';
import { SHOP } from 'src/models/default-shop-items';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  inventory: InventoryState;
  shop: ShopState;

  constructor(
    private store: Store<{ inventory: InventoryState, shop: ShopState }>,
    private inventoryService: InventoryService
  ) {
    var inventory_state = this.store.select('inventory');
    inventory_state.subscribe((inventory) => {
      this.inventory = inventory;
    });

    var shop_state = this.store.select('shop');
    shop_state.subscribe((shop) => {
      this.shop = shop;
    });
  }

  init() {
    console.log('GameService init');
    setInterval(() => this.calculate(), 1000);

    // Cache game state every 5 seconds
    setInterval(() => this.save(), 5000);
  }

  private save() {
    // Save inventory state
    localStorage.setItem('inventory_state', JSON.stringify(this.inventory));

    // Save shop state
    localStorage.setItem('shop_state', JSON.stringify(this.shop));
    console.log("cached gamestate")
  }

  private calculate() {
    var frogs = this.inventory.frogs;
    var store = this.store;
    var frogKeys = Object.keys(frogs);

    var totalTadpoleRate = 0;
    frogKeys.forEach((frogKey: string) => {
      var frogItem = frogs[frogKey];

      // Find tadpole rate for frog
      var tadpole_rate = this.calculateFrogProductionRate(frogItem);
      totalTadpoleRate += tadpole_rate;

      // Make one dispatch with this frog's accumulated tadpole rate
      store.dispatch(
        add({
          production_rate: tadpole_rate,
          frogId: frogItem.id,
        })
      );
    });
  }

  public calculateKingLevelUpCost() {
    var king_levelup_shop_item = SHOP[SHOP_ITEM_TYPES.KINGLEVELUP][KING_ACTIONS.LEVELUP];
    var king = this.inventory.frogKing;
    var cost = king_levelup_shop_item.cost;
    cost += cost * king.level * king_levelup_shop_item.cost_multiplier;
    return +cost.toFixed(2);
  }

  public calculateKingProductionRate() {
    var king = this.inventory.frogKing;
    var tadpole_rate = king.level * king.tadpolesPerClick;

    // Find new production rate after applying powerups
    if (king.powerUps.length > 0) {
      var power_up_production = this.calculateKingPowerUpProduction(tadpole_rate);
      tadpole_rate = power_up_production;
    }
    return +tadpole_rate.toFixed(2);
  }
  public calculateKingPowerUpProduction(tadpole_rate: number){
    var king = this.inventory.frogKing;
    var power_ups = king.powerUps;
    var power_up_production = tadpole_rate;
    power_ups.forEach( (power_up) => {
      // Remove power-up if expired
      if (new Date() > power_up.expiration) {
        // Remove power-up
        this.store.dispatch(power_down_king({
          powerUp: power_up.kind
        }));
        return;
      }

      power_up_production *= power_up.productionRateMultiplier;
    });
    return power_up_production;
  }

  public calculateTotalProductionRate() {
    let totalTadpoleRate = 0;

    Object.keys(this.inventory.frogs).forEach((frogId: string) => {
      const frogItem = this.inventory.frogs[frogId];
      const tadpoleRate = this.calculateFrogProductionRate(frogItem);
      totalTadpoleRate += tadpoleRate;
    });

    // Check if the totalTadpoleRate is greater than 1000
    if (totalTadpoleRate > 1000) {
      // Remove the decimal point
      totalTadpoleRate = Math.floor(totalTadpoleRate);
    } else {
      // Limit to one decimal point
      totalTadpoleRate = parseFloat(totalTadpoleRate.toFixed(1));
    }

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
    if (frogItem.power_ups?.length > 0) {
      var power_up_production = this.calculateFrogPowerUpProduction(
        frogItem,
        tadpole_rate
      );
      tadpole_rate = power_up_production;
    }

    // Check if user has any element powerups
    if (Object.values(this.inventory.elementPowerUps).length > 0) {
      // Find new frog production rate after applying element powerups
        tadpole_rate = this.calculateElementPowerUpProduction(
          frogItem,
          tadpole_rate // 100
        );
    }


    return +tadpole_rate.toFixed(2);
  }
  public calculateFrogLevelUpCost(frogItem: FrogItem) {
    var frog_shop_item = SHOP[SHOP_ITEM_TYPES.FROGLEVELUP][frogItem.kind];
    var cost = frog_shop_item.cost;
    cost += cost * frogItem.level * frog_shop_item.cost_multiplier;
    return +cost.toFixed(2);
  }

  public calculateFrogPowerUpProduction(
    frogItem: FrogItem,
    currentTadpoleRate: number
  ) {
    var power_ups = frogItem.power_ups;
    //var power_up_production = 0;
    power_ups.forEach((power_up) => {
      // Remove power-up if expired
      if (new Date() > power_up.expiration) {
        // Remove power-up
        this.store.dispatch(
          power_down_frog({
            frogId: frogItem.id,
            powerUp: power_up.kind,
          })
        );
        // Handle power up side effects
        power_up.sideEffects.forEach((sideEffect) => {
          var sideEffectItem = DEFAULT_FROGPOWERUPS_SIDE_EFFECTS[sideEffect];
          this.inventoryService.handleFrogSideEffect(
            frogItem.id,
            sideEffectItem
          );
        });
        return;
      }

      currentTadpoleRate *= power_up.productionRateMultiplier;
    });
    return currentTadpoleRate;
  }

  public calculateElementPowerUpProduction(frogItem: FrogItem, tadpole_rate: number) {
    var accumulated_element_power_up_percent = 0;

    // Loop through frog's elements
    var frogElementsObj = frogItem.element_type;
    Object.keys(frogElementsObj).forEach((element) => {
      // Get list of powerups for current element
      var current_element_power_ups = this.inventory.elementPowerUps[element];

      // Check if frog has an element that the current powerup affects
      var frog_current_element_count = frogElementsObj[element];
      if (frog_current_element_count > 0 && current_element_power_ups?.length > 0) {
        // Add powerup bonus to accumulated_element_power_up_percent
        current_element_power_ups.forEach((element_power_up) => {
          var total_current_element_count = this.inventory.allElementCount[element];
          accumulated_element_power_up_percent += element_power_up.productionRatePercent * total_current_element_count;
        });
      }
    });

    // Convert percent to multiplier
    accumulated_element_power_up_percent /= 100;

    // Apply element powerup bonus
    tadpole_rate += tadpole_rate * accumulated_element_power_up_percent;

    return tadpole_rate;
  }

  public getFrogTotalProduced(frogId: string) {
    var frog = this.inventory.frogs[frogId];
    var totalProduced = frog.lifetime_tadpoles_produced;
    return totalProduced;
  }
}
