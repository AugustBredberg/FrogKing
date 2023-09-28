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
  @Inject(MAT_DIALOG_DATA) public data: { frogItem: FrogItem };

  frogTexts: { [key: string]: string } = {
    [FROG_ELEMENT_ENUM.HOLY]: 'Holy frog text',
    [FROG_ELEMENT_ENUM.DARK]: 'Dark frog text',
    [FROG_ELEMENT_ENUM.UNDEAD]: 'Undead frog text',
  };

  selectOption(option: string): void {
    this.selectedOption = option;
  }
}
