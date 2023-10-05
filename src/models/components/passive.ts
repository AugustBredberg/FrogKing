import { FROG_ELEMENT_ENUM } from "../items";

export interface IPassive {
  element: FROG_ELEMENT_ENUM;
  description: string;
  amount: number;
  //obtained: number;
  //bonus?: { [level: number]: { required: number; text: string } };
}
