import { Component, Input } from '@angular/core';
import { FrogItem } from 'src/models/items';

@Component({
  selector: 'app-frog',
  templateUrl: './frog.component.html',
  styleUrls: ['./frog.component.scss']
})
export class FrogComponent {
  @Input() frog: FrogItem | null;


  constructor() {}
}
