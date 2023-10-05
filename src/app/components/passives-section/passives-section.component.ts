import { Component, Input, OnInit } from '@angular/core';
import { IPassive } from 'src/models/components/passive';
import { InventoryState } from 'src/models/states';
import { FROG_ELEMENT_ENUM, FrogItem } from 'src/models/items';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-passives-section',
  templateUrl: './passives-section.component.html',
  styleUrls: ['./passives-section.component.scss'],
})
export class PassivesSectionComponent {
  inventory$: Observable<InventoryState>;
  inventory: InventoryState;
  passives: IPassive[] = [];

  constructor(private store: Store<{ inventory: InventoryState }>) {
    this.inventory$ = store.select('inventory');
    this.inventory$.subscribe((inventory) => {
      this.inventory = inventory;

      // Loop through frogs and count how many of each element we have
      // Then set the obtained property of each passive
      this.passives = [];
      Object.values(this.inventory.frogs).forEach((frog) => {
        // Loop through each frog's elements and add them to the passives array
        Object.keys(frog.element_type).forEach((element: string) => {
          var currentPassive = this.passives?.find(
            (p) => p.element === element
          );
          // If first time seeing passive, create a new passive object
          if (!currentPassive) {
            const passive: IPassive = {
              element: element as FROG_ELEMENT_ENUM,
              amount: frog.element_type[element],
              description: this.calculateElementProductionPercentIncrease(element),
            };
            this.passives?.push(passive);
          }
          // If the element is already in the passives array, add to the amount
          else {
            currentPassive.amount += frog.element_type[element];
          }
        });
      });
      // If all passives are 0, set the array to empty
      if (this.passives.every((p) => p.amount === 0)) {
        this.passives = [];
      }
    });
  }

  private calculateElementProductionPercentIncrease(element: string){
    var totalPercentIncrease = 0;
    this.inventory.elementPowerUps[element]?.forEach((powerUp) => {
      totalPercentIncrease += powerUp.productionRatePercent * this.inventory.allElementCount[element];
    });

    var desc = element + "  frogs have " + totalPercentIncrease + " % increased production rate";

    return desc
  }

  trackElement(index: number, passive: IPassive) {
    return passive ? passive.amount + passive.description  : undefined;
  }
}
