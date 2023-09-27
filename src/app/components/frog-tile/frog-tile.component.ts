import { Component, Input, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { ShopService } from 'src/app/services/shop.service';
import { ITooltip, TooltipPosition } from 'src/models/components/tooltips';
import { FrogItem } from 'src/models/items';
import { LEVEL_SHOP, SHOP, SHOP_ITEM_TYPES } from 'src/models/shop-items';
@Component({
  selector: 'app-frog-tile',
  templateUrl: './frog-tile.component.html',
  styleUrls: ['./frog-tile.component.scss'],
})
export class FrogTileComponent implements OnInit {
  @Input() frogItem: FrogItem;
  frogTooltip: ITooltip;
  levelUpCost: number;
  TooltipPosition = TooltipPosition;
  productionRate: number;
  constructor(
    private gameService: GameService,
    private shopService: ShopService
  ) {}

  ngOnInit() {
    this.productionRate = this.gameService.calculateFrogProductionRate(
      this.frogItem
    );

    this.levelUpCost = this.gameService.calculateFrogLevelUpCost(this.frogItem);
  }
  levelUp() {
    var cost = this.levelUpCost;
    var levelUpShopItem = structuredClone(
      SHOP[SHOP_ITEM_TYPES.LEVELUP][this.frogItem.kind]
    );

    // Update levelup cost for this frog
    levelUpShopItem.cost = cost;
    this.shopService.buy(levelUpShopItem, this.frogItem.id);
  }
}
