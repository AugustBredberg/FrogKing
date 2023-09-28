import { Component, Input } from '@angular/core';
import { IPassive } from 'src/models/components/passive';

@Component({
  selector: 'app-passive',
  templateUrl: './passive.component.html',
  styleUrls: ['./passive.component.scss'],
})
export class PassiveComponent {
  @Input() passive: IPassive;
}
