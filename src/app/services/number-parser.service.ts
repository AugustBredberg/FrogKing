import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NumberParserService {
  constructor() {}

  convertToReadableNumber(number: number): string {
    if (number < 1000000) {
      return number.toString();
    } else if (number < 1000000000) {
      const millionValue = (number / 1000000).toFixed(3);
      return millionValue.endsWith('.000')
        ? millionValue.slice(0, -4) + ' million'
        : millionValue + ' million';
    } else if (number < 1000000000000) {
      const billionValue = (number / 1000000000).toFixed(3);
      return billionValue.endsWith('.000')
        ? billionValue.slice(0, -4) + ' billion'
        : billionValue + ' billion';
    } else if (number < 1000000000000000) {
      const trillionValue = (number / 1000000000000).toFixed(3);
      return trillionValue.endsWith('.000')
        ? trillionValue.slice(0, -4) + ' trillion'
        : trillionValue + ' trillion';
    } else if (number < 1000000000000000000) {
      const quadrillionValue = (number / 1000000000000000).toFixed(3);
      return quadrillionValue.endsWith('.000')
        ? quadrillionValue.slice(0, -4) + ' quadrillion'
        : quadrillionValue + ' quadrillion';
    } else if (number < 1000000000000000000000) {
      const pentillionValue = (number / 1000000000000000000).toFixed(3);
      return pentillionValue.endsWith('.000')
        ? pentillionValue.slice(0, -4) + ' pentillion'
        : pentillionValue + ' pentillion';
    } else if (number < 1000000000000000000000000) {
      const hexillionValue = (number / 1000000000000000000000).toFixed(3);
      return hexillionValue.endsWith('.000')
        ? hexillionValue.slice(0, -4) + ' hexillion'
        : hexillionValue + ' hexillion';
    } else {
      const septillionValue = (number / 1000000000000000000000).toFixed(3);
      return septillionValue.endsWith('.000')
        ? septillionValue.slice(0, -4) + ' septillion'
        : septillionValue + ' septillion';
    }
  }
}
