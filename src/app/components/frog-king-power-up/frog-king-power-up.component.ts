import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  IKingPowerUpTooltip,
  TooltipPosition,
} from 'src/models/components/tooltips';
import { KingPowerUpItem } from 'src/models/items';

@Component({
  selector: 'app-frog-king-power-up',
  templateUrl: './frog-king-power-up.component.html',
  styleUrls: ['./frog-king-power-up.component.scss'],
})
export class FrogKingPowerUpComponent implements OnInit {
  @Input() power: KingPowerUpItem;

  tooltipData: IKingPowerUpTooltip;
  tooltipPosition = TooltipPosition;
  environment = environment;

  ngOnInit(): void {
    this.tooltipData = {
      name: this.power.name,
      type: 'kingPowerUp',
      body: this.power.description,
    };
  }
}
