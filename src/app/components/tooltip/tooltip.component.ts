import { Component, OnInit } from '@angular/core';
import { ITooltip, TooltipPosition } from 'src/models/components/tooltips';
@Component({
  selector: 'tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent implements OnInit {
  tooltip: ITooltip;
  left: number = 0;
  top: number = 0;
  position: TooltipPosition = TooltipPosition.DEFAULT;

  constructor() {}

  ngOnInit(): void {}
}
