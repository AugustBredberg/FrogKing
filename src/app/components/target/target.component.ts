import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';
import { combineLatest } from 'rxjs';
import { ShopService } from 'src/app/services/shop.service';
import { TargetingService } from 'src/app/services/targeting.service';
import { ShopItem } from 'src/models/shop-items';

interface Coordinates {
  x: number;
  y: number;
}
@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.scss'],
})
export class TargetComponent implements OnInit {
  targetActive: boolean = false;
  targetItem: ShopItem;
  targetElementStyle: { [key: string]: any } = {}; // Initialize an empty object

  constructor(
    private targetingService: TargetingService,
    private el: ElementRef,
    private shopService: ShopService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    // Create an observable that combines both source and target coordinates
    this.targetActive = this.targetingService.getTargetActive();
    combineLatest([
      this.targetingService.getSourceCoordinates(),
      this.targetingService.getTargetCoordinates(),
      this.targetingService.getTargetImage(),
      this.targetingService.getTargetItem(),
    ]).subscribe(
      ([sourceCoordinates, targetCoordinates, targetImage, targetItem]) => {
        if (this.targetActive) {
          // Calculate the distance between the two points
          const distance = this.calculateDistance(
            sourceCoordinates,
            targetCoordinates
          );

          // Update the DOM elements with the calculated values
          this.updateTargetSourceElement(sourceCoordinates);
          this.updateTargetElement(targetCoordinates, targetImage);
          this.updateVectorElement(
            sourceCoordinates,
            targetCoordinates,
            distance
          );
          this.setTargetVisible(this.targetActive);

          this.targetItem = targetItem;

          // Now you can use the 'distance' variable as needed.
        } else {
          this.setTargetVisible(this.targetActive);
        }
      }
    );
  }

  calculateDistance(
    sourceCoords: Coordinates,
    targetCoords: Coordinates
  ): { height: number; width: number } {
    // Add your distance calculation logic here
    return {
      height: Math.abs(targetCoords.y + sourceCoords.y),
      width: Math.abs(targetCoords.x + sourceCoords.x),
    };
  }

  updateTargetSourceElement(sourceCoords: Coordinates): void {
    this.renderer.setStyle(
      document.getElementById('targetSource'),
      'top',
      `${sourceCoords.y}px`
    );
    this.renderer.setStyle(
      document.getElementById('targetSource'),
      'left',
      `${sourceCoords.x}px`
    );
  }

  updateTargetElement(targetCoords: Coordinates, targetImage: string): void {
    this.renderer.setStyle(
      document.getElementById('targetElement'),
      'top',
      `${targetCoords.y - 50}px`
    );
    this.renderer.setStyle(
      document.getElementById('targetElement'),
      'left',
      `${targetCoords.x - 50}px`
    );
    this.renderer.setStyle(
      document.getElementById('targetElement'),
      'background-image',
      `url(${targetImage})`
    );
  }
  updateVectorElement(
    targetCoordinates: Coordinates,
    sourceCoordinates: Coordinates,
    distance: { height: number; width: number }
  ) {
    this.renderer.setStyle(
      document.getElementById('targetLineSvg'),
      'width',
      `${distance.width}px`
    );
    this.renderer.setStyle(
      document.getElementById('targetLineSvg'),
      'height',
      `${distance.height}px`
    );

    const lineElement = document.getElementById('targetLine');

    // Check if the line element exists
    if (lineElement) {
      // Set the x1, x2, y1, and y2 attributes
      lineElement.setAttribute('x1', (targetCoordinates.x + 50).toString());
      lineElement.setAttribute('x2', sourceCoordinates.x.toString());
      lineElement.setAttribute('y1', (targetCoordinates.y + 50).toString());
      lineElement.setAttribute('y2', sourceCoordinates.y.toString());
    }
  }
  setTargetVisible(active: boolean) {
    this.targetActive = active;
  }

  onMouseClick(): void {
    this.targetingService.setTargetActive(false);
  }

  onEscKey() {
    // Implement your logic here
    console.log('ESC key pressed');
    this.targetActive = false;
    this.targetingService.setTargetActive(false);
  }

  @HostListener('document:keydown.escape', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.onEscKey();
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    this.targetActive = this.targetingService.getTargetActive();
    console.log('click', this.targetActive);
    if (this.targetActive) {
      const target = event.target as HTMLElement;

      // Check if the target element or any of its ancestors has the ID "frogTile"
      if (target.closest('#frogTile')) {
        const frogTileElement = target.closest('#frogTile') as HTMLElement;
        const frogChild = frogTileElement.firstElementChild as HTMLElement;

        if (frogChild) {
          console.log('Target is a child of #frogTile', frogChild.id);

          this.shopService.buy(this.targetItem, frogChild.id);

          this.targetingService.setTargetActive(false);
          this.targetActive = false;
        } else {
          console.log(
            'Target is a child of #frogTile, but no first child element found'
          );
        }
      } else {
        console.log('Target is NOT a child of #frogTile');

        if (!target.closest('#shopItem')) {
          const targetTooltipText = 'Invalid target!';
          this.targetingService.setTargetTooltipText(targetTooltipText);
          this.targetActive = false;
          this.targetingService.setTargetActive(false);
        }
      }
    }
  }
}
