import { KeyValue } from '@angular/common';
import { Component } from '@angular/core';
import {
  IPassiveTooltip,
  TooltipPosition,
} from 'src/models/components/tooltips';

@Component({
  selector: 'app-passive-tooltip',
  templateUrl: './passive-tooltip.component.html',
  styleUrls: ['./passive-tooltip.component.scss'],
})
export class PassiveTooltipComponent {
  tooltip: IPassiveTooltip;
  left: number;
  top: number;
  position: TooltipPosition = TooltipPosition.DYNAMICRIGHT;
}
