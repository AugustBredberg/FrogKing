import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ShopItem } from 'src/models/shop-items';

@Injectable({
  providedIn: 'root',
})
export class TargetingService {
  private targetCoordinatesSubject = new Subject<{ x: number; y: number }>();
  private sourceCoordinatesSubject = new Subject<{ x: number; y: number }>();
  private vectorImageSubject = new Subject<string>();
  private vectorItemSubject = new Subject<ShopItem>();
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

  getTargetItem() {
    return this.vectorItemSubject.asObservable();
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

  setTargetItem(item: ShopItem) {
    this.vectorItemSubject.next(item);
  }

  setTargetActive(active: boolean) {
    this.targetActiveSubject.next(active);
  }

  // Method to check if targeting is active
  isTargetingActive(): boolean {
    console.log('called');
    let isActive = false;
    this.targetActiveSubject.subscribe((active) => {
      console.log('active', active);
      isActive = active;
    });
    return isActive;
  }
}
