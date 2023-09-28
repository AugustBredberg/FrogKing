import { Component, Input, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { ShopService } from 'src/app/services/shop.service';
import {
  IFrogTooltip,
  ITooltip,
  TooltipPosition,
} from 'src/models/components/tooltips';
import { FROG_ELEMENT_ENUM, FrogItem, FrogPowerUpItem } from 'src/models/items';
import { SHOP_ITEM_TYPES } from 'src/models/shop-items';
import {
  SHOP,
  LEVEL_SHOP,
  EVOLUTION_SHOP,
} from 'src/models/default-shop-items';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { EvolveDialogComponent } from '../dialogs/evolve-dialog/evolve-dialog.component';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-frog-tile',
  templateUrl: './frog-tile.component.html',
  styleUrls: ['./frog-tile.component.scss'],
})
export class FrogTileComponent implements OnInit {
  @Input() frogItem: FrogItem;
  tooltipData: IFrogTooltip;
  levelUpCost: number;
  TooltipPosition = TooltipPosition;
  productionRate: number;
  nextEvolution: string;

  constructor(
    private inventoryService: InventoryService,
    private gameService: GameService,
    private shopService: ShopService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.productionRate = this.gameService.calculateFrogProductionRate(
      this.frogItem
    );
    this.nextEvolution = EVOLUTION_SHOP[this.frogItem.evolves_into]?.name;

    this.levelUpCost = Math.round(
      this.gameService.calculateFrogLevelUpCost(this.frogItem)
    );

    this.tooltipData = {
      name: this.frogItem.name,
      description: this.frogItem.description,
      image: '../../../../assets/images/frogs/default_frog.png',
      level: this.frogItem.level,
      negativeText: this.getNegativePowerupTexts(this.frogItem.power_ups),
      positiveText: this.getPositivePowerupTexts(this.frogItem.power_ups),
      evolveStage: this.frogItem.evolves_into,
      evolveCost: EVOLUTION_SHOP[this.frogItem.evolves_into]?.cost,
      evolvesInto: EVOLUTION_SHOP[this.frogItem.evolves_into]?.name,
      tps: this.productionRate,
      tadpolesProduced: this.frogItem.lifetime_tadpoles_produced,
      elements: this.frogItem.elementType,
      type: 'frog',
    };
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

  getPositivePowerupTexts(powerUpItems: FrogPowerUpItem[]): string[] {
    return powerUpItems
      .filter((item) => item.effectIsPositive)
      .map((item) => item.description);
  }
  getNegativePowerupTexts(powerUpItems: FrogPowerUpItem[]): string[] {
    return powerUpItems
      .filter((item) => !item.effectIsPositive)
      .map((item) => item.description);
  }

  openDialog() {
    let dialogRef = this.dialog.open(EvolveDialogComponent, {
      height: '400px',
      width: '600px',
      panelClass: 'evolve-dialog-class',
      data: { frogItem: this.frogItem },
    });
    dialogRef.afterClosed().subscribe((evolutionElement: FROG_ELEMENT_ENUM) => {
      if (evolutionElement) {
        var evolveShopItem = structuredClone(
          SHOP[SHOP_ITEM_TYPES.EVOLUTION][this.frogItem.evolves_into]
        );
        this.inventoryService.add(
          evolveShopItem,
          this.frogItem.id,
          evolutionElement
        );
      }
    });
  }
}
