import { Component, OnInit } from '@angular/core';
import { TargetingService } from 'src/app/services/targeting.service';
import { environment } from 'src/environments/environment';
import {
  ITargetTooltip,
  TooltipPosition,
} from 'src/models/components/tooltips';

@Component({
  selector: 'app-target-tooltip',
  templateUrl: './target-tooltip.component.html',
  styleUrls: ['./target-tooltip.component.scss'],
})
export class TargetTooltipComponent {
  tooltip: ITargetTooltip;
  left: number;
  top: number;
  position: TooltipPosition = TooltipPosition.DYNAMICRIGHT;
}
