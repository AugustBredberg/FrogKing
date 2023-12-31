import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { environment } from 'src/environments/environment';
import { NumberParserService } from 'src/app/services/number-parser.service';
import {
  IFrogTooltip,
  ITooltip,
  TooltipPosition,
} from 'src/models/components/tooltips';

@Component({
  selector: 'app-frog-tooltip',
  templateUrl: './frog-tooltip.component.html',
  styleUrls: ['./frog-tooltip.component.scss'],
})
export class FrogTooltipComponent implements OnInit {
  tooltip: IFrogTooltip;
  left: number = 0;
  top: number = 0;
  position: TooltipPosition = TooltipPosition.DEFAULT;
  tadpolesProduced: number;
  environment = environment;

  constructor(
    private gameService: GameService,
    private numberParserService: NumberParserService
  ) {}

  parseCost(cost: number): string {
    return this.numberParserService.convertToReadableNumber(cost);
  }
  ngOnInit(): void {
    var totalProduced = this.gameService.getFrogTotalProduced(
      this.tooltip.frogId as string
    );
    this.tadpolesProduced = Math.round(totalProduced);
  }
}
