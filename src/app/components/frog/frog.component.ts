import { Component, Input } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { ShopService } from 'src/app/services/shop.service';
import { EVOLUTION_ENUM, FROG_ELEMENT_ENUM, FrogItem } from 'src/models/items';
import { SHOP_ITEM_TYPES } from 'src/models/shop-items';
import { InventoryState } from 'src/models/states';
import { DEFAULT_FROGS } from 'src/models/default-items';
import { SHOP } from 'src/models/default-shop-items';

@Component({
  selector: 'app-frog',
  templateUrl: './frog.component.html',
  styleUrls: ['./frog.component.scss']
})
export class FrogComponent {
  @Input() frog: FrogItem;
  @Input() inventory: InventoryState;
  levelUpCost: number;
  productionRate: number;

  constructor(private shopService: ShopService, private gameService: GameService) {}

  ngOnInit() {
    //this.levelUpCost = this.getLevelUpCost();
    this.productionRate = this.gameService.calculateFrogProductionRate(this.frog);
    this.levelUpCost = this.gameService.calculateFrogLevelUpCost(this.frog);
  }

  levelUp(){
    var cost = this.levelUpCost;
    var levelUpShopItem = structuredClone(SHOP[SHOP_ITEM_TYPES.LEVELUP][this.frog.kind]);

    // Update levelup cost for this frog
    levelUpShopItem.cost = cost;
    this.shopService.buy(levelUpShopItem, this.frog.id);
  }

  evolve(evolution: EVOLUTION_ENUM) {
    var evolutionShopItem = structuredClone(SHOP[SHOP_ITEM_TYPES.EVOLUTION][evolution]);
    this.shopService.buy(evolutionShopItem, this.frog.id, FROG_ELEMENT_ENUM.DARK);
  }

  getEvolutionCost(evolution: EVOLUTION_ENUM) {
    return SHOP[SHOP_ITEM_TYPES.EVOLUTION][evolution].cost;
  }

  getEvolutionName(evolution: EVOLUTION_ENUM){
    return DEFAULT_FROGS[evolution].name;
  }
}
