import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TargetingService {
  private targetCoordinatesSubject = new Subject<{ x: number; y: number }>();
  private sourceCoordinatesSubject = new Subject<{ x: number; y: number }>();
  private vectorImageSubject = new Subject<string>();
  private targetActiveSubject = new Subject<boolean>();

  constructor() {}

  // Method to get an observable of target coordinates
  getTargetCoordinates() {
    return this.targetCoordinatesSubject.asObservable();
  }

  getSourceCoordinates() {
    return this.sourceCoordinatesSubject.asObservable();
  }

  getTargetImage() {
    return this.vectorImageSubject.asObservable();
  }

  getTargetActive() {
    return this.targetActiveSubject.asObservable();
  }

  // Method to set target coordinates
  setTargetCoordinates(x: number, y: number) {
    this.targetCoordinatesSubject.next({ x, y });
  }

  setSourceCoordinates(x: number, y: number) {
    console.log('set source x y ', x, y);
    this.sourceCoordinatesSubject.next({ x, y });
  }

  setTargetImage(image: string) {
    this.vectorImageSubject.next(image);
  }
  setTargetActive(active: boolean) {
    this.targetActiveSubject.next(active);
  }
}
