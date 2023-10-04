import { Component } from '@angular/core';
import {
  IKingPowerUpTooltip,
  TooltipPosition,
} from 'src/models/components/tooltips';

@Component({
  selector: 'app-king-power-up-tooltip',
  templateUrl: './king-power-up-tooltip.component.html',
  styleUrls: ['./king-power-up-tooltip.component.scss'],
})
export class KingPowerUpTooltipComponent {
  tooltip: IKingPowerUpTooltip;
  left: number;
  top: number;
  position: TooltipPosition = TooltipPosition.DYNAMICRIGHT;
}
