import { Component } from '@angular/core';

@Component({
  selector: 'app-evolve-dialog',
  templateUrl: './evolve-dialog.component.html',
  styleUrls: ['./evolve-dialog.component.scss'],
})
export class EvolveDialogComponent {
  selectedOption: number | null = null;

  frogTexts: { [key: number]: string } = {
    1: 'Holy frog text',
    2: 'Dark frog text',
    3: 'Undead frog text',
  };

  selectOption(option: number): void {
    this.selectedOption = option;
  }
}
