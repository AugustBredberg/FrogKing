export interface IPassive {
  name?: string;
  element?: string;
  id?: string;
  levels: number[];
  obtained: number;
  bonus?: { [level: number]: string };
}
