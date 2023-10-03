import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ITooltip, TooltipPosition } from 'src/models/components/tooltips';
@Component({
  selector: 'tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})

export class TooltipComponent {
  tooltip: ITooltip;
  left: number = 0;
  top: number = 0;
  position: TooltipPosition = TooltipPosition.DEFAULT;
  environment?: any = environment;
}
