import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { environment } from 'src/environments/environment';
import { FrogItem } from 'src/models/items';

@Component({
  selector: 'app-frog-portrait',
  templateUrl: './frog-portrait.component.html',
  styleUrls: ['./frog-portrait.component.scss'],
})
export class FrogPortraitComponent implements OnInit {
  @Input() frogItem: FrogItem;
  environment = environment;
  randomTop: string;
  randomLeft: string;

  elementPositions: { top: string; left: string }[] = [];

  constructor() {}

  ngOnInit(): void {
    this.elementPositions = [
      { top: '5%', left: '10%' },
      { top: '70%', left: '70%' },
      { top: '60%', left: '5%' },
      { top: '5%', left: '70%' },
    ];

    console.log(this.elementPositions);
  }

  getElementsWithValue(elements: { [id: string]: number }): {
    [id: string]: number;
  } {
    // Use Object.keys to iterate over object keys and filter elements where the value is not 0
    const filteredElements: { [id: string]: number } = {};

    Object.keys(elements).forEach((key) => {
      if (elements[key] !== 0) {
        filteredElements[key] = elements[key];
      }
    });

    return filteredElements;
  }

  getImageScaling(element: any) {
    // Calculate the scaling factor based on element.value
    const scalingFactor = 1 + ((element.value - 1) / 11) * 3;

    // Apply the scaling as a transform
    return {
      transform: `scale(${scalingFactor})`,
    };
  }

  trackElement(index: number, element: any) {
    return element ? element.amount : undefined;
  }
}
