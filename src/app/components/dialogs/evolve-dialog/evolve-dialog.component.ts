import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FROG_ELEMENT_ENUM, FrogItem } from 'src/models/items';

@Component({
  selector: 'app-evolve-dialog',
  templateUrl: './evolve-dialog.component.html',
  styleUrls: ['./evolve-dialog.component.scss'],
})
export class EvolveDialogComponent {
  selectedOption: string | null = null;
  elements = FROG_ELEMENT_ENUM;
  frogItem: FrogItem;
  //@Inject(MAT_DIALOG_DATA) public data: { frogItem: FrogItem };

  constructor(@Inject(MAT_DIALOG_DATA) public data: { frogItem: FrogItem }) {
    // You can access this.data here
    this.frogItem = this.data.frogItem;
  }
  frogTexts: { [key: string]: string } = {
    [FROG_ELEMENT_ENUM.UNDEAD]: 'Undead frog text',
    [FROG_ELEMENT_ENUM.HOLY]: 'Holy frog text',
    [FROG_ELEMENT_ENUM.DARK]: 'Dark frog text',
    [FROG_ELEMENT_ENUM.SPIRIT]: 'Spirit frog text',
    [FROG_ELEMENT_ENUM.PSYCHIC]: 'Psychic frog text',
    [FROG_ELEMENT_ENUM.MIGHTY]: 'Mighty frog text',
  };

  selectOption(option: string): void {
    this.selectedOption = option;
  }
}
