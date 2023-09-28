import { Component } from '@angular/core';
import { IPassive } from 'src/models/components/passive';

@Component({
  selector: 'app-passives-section',
  templateUrl: './passives-section.component.html',
  styleUrls: ['./passives-section.component.scss'],
})
export class PassivesSectionComponent {
  passives: IPassive[] = [
    {
      name: 'Undead',
      element: 'Undead',
      levels: [1, 2, 3],
      obtained: 2,
      bonus: {
        1: 'bonus for having 1 Undead frog',
        2: 'bonus for having 2 Undead frogs',
        3: 'bonus for having 3 Undead frogs',
      },
    },
    {
      name: 'Holy',
      element: 'Holy',
      levels: [1, 2, 3],
      obtained: 0,
      bonus: {
        1: 'bonus for having 1 Holy frog',
        2: 'bonus for having 2 Holy frogs',
        3: 'bonus for having 3 Holy frogs',
      },
    },
    {
      name: 'Dark',
      element: 'Dark',
      levels: [1, 2, 3],
      obtained: 1,
      bonus: {
        1: 'bonus for having 1 Dark frog',
        2: 'bonus for having 2 Dark frogs',
        3: 'bonus for having 3 Dark frogs',
      },
    },
    {
      name: 'Spirit',
      element: 'Spirit',
      levels: [1, 2, 3],
      obtained: 0,
      bonus: {
        1: 'bonus for having 1 Spirit frog',
        2: 'bonus for having 2 Spirit frogs',
        3: 'bonus for having 3 Spirit frogs',
      },
    },
    {
      name: 'Worker',
      element: 'Worker',
      levels: [1, 2, 3],
      obtained: 0,
      bonus: {
        1: 'bonus for having 1 Worker frog',
        2: 'bonus for having 2 Worker frogs',
        3: 'bonus for having 3 Worker frogs',
      },
    },
    {
      name: 'Paladin',
      element: 'Paladin',
      levels: [1, 2, 3],
      obtained: 0,
      bonus: {
        1: 'bonus for having 1 Paladin frog',
        2: 'bonus for having 2 Paladin frogs',
        3: 'bonus for having 3 Paladin frogs',
      },
    },
  ];
}
