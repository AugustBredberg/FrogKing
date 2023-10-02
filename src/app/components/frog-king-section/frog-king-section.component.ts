import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GameService } from 'src/app/services/game.service';
import { InventoryService } from 'src/app/services/inventory.service';
import { InventoryState } from 'src/models/states';

@Component({
  selector: 'app-frog-king-section',
  templateUrl: './frog-king-section.component.html',
  styleUrls: ['./frog-king-section.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('500ms', style({ opacity: 0 }))]),
    ]),
    trigger('moveUp', [
      transition(':enter', [
        style({ bottom: 100 }),
        animate('3000ms', style({ bottom: 0 })),
      ]),
    ]),
  ],
})
export class FrogKingSectionComponent {
  inventory$: Observable<InventoryState>;
  inventory: InventoryState;

  hitmarks: { tp: number; x: number; y: number; visible: boolean }[] = [];
  productionRate: number = 0;
  constructor(
    private store: Store<{ inventory: InventoryState }>,
    private inventoryService: InventoryService,
    private elementRef: ElementRef,
    public gameService: GameService
  ) {
    this.inventory$ = store.select('inventory');
    this.inventory$.subscribe((inventory) => {
      this.inventory = inventory;
    });
  }

  removeHitmarkAfterDelay(index: number) {
    setTimeout(() => {
      if (this.hitmarks[index]) {
        this.hitmarks[index].visible = false;
      }
    }, 2000); // Hide after 2 seconds
  }

  spawn(event: MouseEvent) {
    // Capture the mouse coordinates
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Generate random numbers between -15 and 15 for x and y offsets
    const xOffset = Math.floor(Math.random() * 61) - 60; // Generates random number between -15 and 15
    const yOffset = Math.floor(Math.random() * 31) - 30; // Generates random number between -15 and 15

    // Add the offsets to the mouse coordinates
    const newX = mouseX + xOffset;
    const newY = mouseY + yOffset;

    // Push the hitmark object into the hitmarks array with the updated coordinates
    this.hitmarks.push({ tp: 1, x: newX, y: newY, visible: true }); // Call your inventoryService method
    if (this.hitmarks.length > 250) {
      this.hitmarks = [];
    }
    this.removeHitmarkAfterDelay(this.hitmarks.length - 1);

    this.inventoryService.kingClicked(1);
  }
}
