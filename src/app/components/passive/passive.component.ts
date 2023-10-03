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
      element: this.passive.element,
      description: this.passive.description,
      amount: this.passive.amount,
      image: '../../../assets/images/elements/element'+this.passive.element+ '.png', //'../../../sr' + this.passive.element + '.png',
    };
  }
}
