import { Component, Input, OnInit } from '@angular/core';
import { IPassive } from 'src/models/components/passive';
import {
  IPassiveTooltip,
  TooltipPosition,
} from 'src/models/components/tooltips';

@Component({
  selector: 'app-passive',
  templateUrl: './passive.component.html',
  styleUrls: ['./passive.component.scss'],
})
export class PassiveComponent implements OnInit {
  @Input() passive: IPassive;
  tooltipData: IPassiveTooltip;
  TooltipPosition = TooltipPosition;
  ngOnInit(): void {
    this.tooltipData = {
      name: this.passive.name,
      description: this.passive.description,
      bonus: this.passive.bonus,
      levels: this.passive.levels,
      obtained: this.passive.obtained,
      type: 'passive',
    };
  }
}
