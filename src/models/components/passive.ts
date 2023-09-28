export interface IPassive {
  name?: string;
  description?: string;
  element?: string;
  id?: string;
  levels: number[];
  obtained: number;
  bonus?: { [level: number]: { required: number; text: string } };
}
