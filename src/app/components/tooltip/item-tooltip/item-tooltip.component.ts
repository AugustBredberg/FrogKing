import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { NumberParserService } from 'src/app/services/number-parser.service';
import {
  IFrogTooltip,
  IItemTooltip,
  ITooltip,
  TooltipPosition,
} from 'src/models/components/tooltips';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-item-tooltip',
  templateUrl: './item-tooltip.component.html',
  styleUrls: ['./item-tooltip.component.scss'],
})
export class ItemTooltipComponent {
  tooltip: IItemTooltip;
  left: number;
  top: number;
  position: TooltipPosition = TooltipPosition.DYNAMICLEFT;
  environment = environment;
  constructor(private numberParserService: NumberParserService) {}

  parseCost(cost: number): string {
    return this.numberParserService.convertToReadableNumber(cost);
  }
}
