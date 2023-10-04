import { Component, Input, OnInit } from '@angular/core';
import { IPassive } from 'src/models/components/passive';
import {
  IPassiveTooltip,
  TooltipPosition,
} from 'src/models/components/tooltips';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-passive',
  templateUrl: './passive.component.html',
  styleUrls: ['./passive.component.scss'],
})
export class PassiveComponent implements OnInit {
  @Input() passive: IPassive;
  tooltipData: IPassiveTooltip;
  TooltipPosition = TooltipPosition;
  environment = environment;
  ngOnInit(): void {
    this.tooltipData = {
      element: this.passive.element,
      description: this.passive.description,
      amount: this.passive.amount,
      image:
        environment.assetsPath +
        'images/elements/element' +
        this.passive.element +
        '.png',
    };
  }
}
