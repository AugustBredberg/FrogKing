import { Component, Input, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { ShopService } from 'src/app/services/shop.service';
import { ITooltip, TooltipPosition } from 'src/models/components/tooltips';
import { FrogItem } from 'src/models/items';
import { SHOP_ITEM_TYPES } from 'src/models/shop-items';
import { SHOP, LEVEL_SHOP } from 'src/models/default-shop-items';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { EvolveDialogComponent } from '../dialogs/evolve-dialog/evolve-dialog.component';

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
    private shopService: ShopService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.productionRate = this.gameService.calculateFrogProductionRate(
      this.frogItem
    );

    this.levelUpCost = Math.round(
      this.gameService.calculateFrogLevelUpCost(this.frogItem)
    );
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

  openDialog() {
    let dialogRef = this.dialog.open(EvolveDialogComponent, {
      height: '400px',
      width: '600px',
      panelClass: 'evolve-dialog-class',
    });
    dialogRef.afterClosed().subscribe((evolution) => {
      console.log(`Dialog closed`, evolution);
    });
  }
}
