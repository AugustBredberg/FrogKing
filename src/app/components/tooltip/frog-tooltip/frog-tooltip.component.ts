import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    console.log('renderinfg');
  }
}
