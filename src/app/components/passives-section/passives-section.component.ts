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
        1: { required: 1, text: 'bonus for having 1 Undead frog' },
        2: { required: 2, text: 'bonus for having 2 Undead frogs' },
        3: { required: 4, text: 'bonus for having 4 Undead frogs' },
      },
    },
    {
      name: 'Holy',
      element: 'Holy',
      levels: [1, 2, 3],
      obtained: 0,
      bonus: {
        1: { required: 1, text: 'bonus for having 1 Holy frog' },
        2: { required: 3, text: 'bonus for having 3 Holy frogs' },
        3: { required: 5, text: 'bonus for having 5 Holy frogs' },
      },
    },
    {
      name: 'Dark',
      element: 'Dark',
      levels: [1, 2, 3],
      obtained: 1,
      bonus: {
        1: { required: 1, text: 'bonus for having 1 Dark frog' },
        2: { required: 3, text: 'bonus for having 3 Dark frogs' },
        3: { required: 5, text: 'bonus for having 5 Dark frogs' },
      },
    },
    {
      name: 'Spirit',
      element: 'Spirit',
      levels: [1, 2, 3],
      obtained: 0,
      bonus: {
        1: { required: 1, text: 'bonus for having 1 Spirit frog' },
        2: { required: 3, text: 'bonus for having 3 Spirit frogs' },
        3: { required: 5, text: 'bonus for having 5 Spirit frogs' },
      },
    },
    {
      name: 'Worker',
      element: 'Worker',
      levels: [1, 2, 3],
      obtained: 0,
      bonus: {
        1: { required: 1, text: 'bonus for having 1 Worker frog' },
        2: { required: 3, text: 'bonus for having 3 Worker frogs' },
        3: { required: 5, text: 'bonus for having 5 Worker frogs' },
      },
    },
    {
      name: 'Paladin',
      element: 'Paladin',
      levels: [1, 2, 3],
      obtained: 0,
      bonus: {
        1: { required: 1, text: 'bonus for having 1 Paladin frog' },
        2: { required: 3, text: 'bonus for having 3 Paladin frogs' },
        3: { required: 5, text: 'bonus for having 5 Paladin frogs' },
      },
    },
  ];
}
