import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { SHOP_ITEM_TYPES, ShopItem } from 'src/models/shop-items';
import { ShopState } from 'src/models/states';
import { add, remove } from '../shop-actions';
import { EVOLUTION_ENUM, FROG_ELEMENT_ENUM, POND_ENUM } from 'src/models/items';
import { DEFAULT_FROGS, DEFAULT_FROGPOWERUPS, DEFAULT_FROGPOWERUPS_SIDE_EFFECTS, DEFAULT_PONDS, DEFAULT_FROG_KING_POWERUPS } from 'src/models/default-items';
import { InventoryService } from './inventory.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  production: boolean = environment.production;

  constructor(private store: Store<{ shop: ShopState }>, private invService: InventoryService) { }

  // User can buy items that are tied to a specific item.
  // Examples: Frog can be found using uniqueId
  buy(item: ShopItem, uniqueId: string = "", newFrogElement: FROG_ELEMENT_ENUM = FROG_ELEMENT_ENUM.NONE) {
    var cost = this.production ? item.cost : 0;
    switch (item.type) {
      case SHOP_ITEM_TYPES.KINGLEVELUP:
        console.log("Buying level up king")
        // Withdraw cost from inventory
        this.invService.spendTadpoles(cost);

        // Level up king
        this.invService.add(item);
        break;

      case SHOP_ITEM_TYPES.KINGPOWERUP:
        console.log("Buying king powerup")
        // Withdraw cost from inventory
        this.invService.spendTadpoles(cost);

        // Add powerup to frog in inventory
        this.invService.add(item);

        // Remove item from shop
        this.store.dispatch(remove({
          item_type: SHOP_ITEM_TYPES.KINGPOWERUP,
          product: item.id
        }));
        break;

      case SHOP_ITEM_TYPES.POND:
        console.log("Buying pond")
        // Withdraw cost from inventory
        this.invService.spendTadpoles(cost);

        // Remove item from shop
        this.store.dispatch(remove({
          item_type: SHOP_ITEM_TYPES.POND,
          product: item.defaultItemId // Use unique shop item id to remove item from shop
        }));

        // Add next pond upgrade to shop
        if(DEFAULT_PONDS[item.defaultItemId].next_pond == -1) break;
        var next_pond = DEFAULT_PONDS[item.id].next_pond;
        this.store.dispatch(add({
          item_type: SHOP_ITEM_TYPES.POND,
          product: next_pond
        }));
        break;

      case SHOP_ITEM_TYPES.EVOLUTION:
        console.log("Buying frog")
        // Withdraw cost from inventory
        this.invService.spendTadpoles(cost);

        // Add evolution to inventory
        this.invService.add(item, uniqueId, newFrogElement);
        break;

      case SHOP_ITEM_TYPES.FROGPOWERUP:
        console.log("Buying frog juice")
        // Withdraw cost from inventory
        this.invService.spendTadpoles(cost);

        // Add powerup to frog in inventory
        this.invService.add(item, uniqueId, newFrogElement);

        // Remove item from shop
        this.store.dispatch(remove({
          item_type: SHOP_ITEM_TYPES.FROGPOWERUP,
          product: item.id
        }));
        break;

      case SHOP_ITEM_TYPES.FROGLEVELUP:
        console.log("Buying level up frog")
        // Withdraw cost from inventory
        this.invService.spendTadpoles(cost);

        // Withdraw cost from inventory
        this.invService.add(item, uniqueId);

        // Level up frog in inventory

        break;

    }

    // Spend tadpoles
    // TODO call spend tadpoles in inventory service
  }

  lookupShopItem(shopItem: ShopItem): ShopItemSummary {
    var item_type = shopItem.type;
    var product = shopItem.defaultItemId;
    var cost = shopItem.cost; //this.production ? shopItem.cost : 0;
    switch (item_type) {
      ////////////////////////
      /// KING POWERUPS ///
      ////////////////////////
      case SHOP_ITEM_TYPES.KINGPOWERUP:
        var kingPowerup = DEFAULT_FROG_KING_POWERUPS[product];
        var negativeEffectsList: string[] = [];

        // Convert multiplier to string percentage
        var multiplier = kingPowerup.productionRateMultiplier;
        var itemSummary = {
          name: kingPowerup.name,
          description: kingPowerup.description,
          positiveEffects: ["Increases king production rate by " + multiplier + "x for " + kingPowerup.duration + " seconds"],
          negativeEffects: [],
          cost: cost
        };
        return itemSummary

      //////////////////
      /// POND ITEMS ///
      //////////////////
      case SHOP_ITEM_TYPES.POND:
        var pond = DEFAULT_PONDS[product];
        var itemSummary = {
          name: pond.name,
          description: pond.description,
          positiveEffects: ["Increases frog capacity to " + pond.frog_capacity],
          negativeEffects: [],
          cost: cost
        };
        return itemSummary;

      ////////////////////////
      /// FROG POWERUPS ///
      ////////////////////////
      case SHOP_ITEM_TYPES.FROGPOWERUP:
        var powerup = DEFAULT_FROGPOWERUPS[product];
        var negativeEffectsList: string[] = [];
        // Loop through side effects and add them to the item summary
        powerup.sideEffects.forEach((sideEffect) => {
          var sideEffectItem = DEFAULT_FROGPOWERUPS_SIDE_EFFECTS[sideEffect];
          // Convert risk to string percentage
          var risk = sideEffectItem.risk * 100 + " % ";
          negativeEffectsList.push(risk + sideEffectItem.description);
        });
        // Convert multiplier to string percentage
        var multiplierInPercent = powerup.productionRateMultiplier * 100 + " % ";
        var itemSummary = {
          name: powerup.name,
          description: powerup.description,
          positiveEffects: ["Increases frog production rate by " + multiplierInPercent + "for " + powerup.duration + " seconds"],
          negativeEffects: negativeEffectsList,
          cost: cost
        };
        return itemSummary


      ///////////////////////
      /// FROG EVOLUTIONS ///
      ///////////////////////
      case SHOP_ITEM_TYPES.EVOLUTION:
        return {
          name: "",
          description: "",
          positiveEffects: [],
          negativeEffects: [],
          cost: cost
        }

      default:
        return {
          name: "",
          description: "",
          positiveEffects: [],
          negativeEffects: [],
          cost: cost
        }
    }
  }
}

export interface ShopItemSummary{
  name: string;
  description: string;
  positiveEffects: string[];
  negativeEffects: string[];
  cost: number;
}
