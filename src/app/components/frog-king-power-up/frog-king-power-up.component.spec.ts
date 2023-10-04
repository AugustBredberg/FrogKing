import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrogKingPowerUpComponent } from './frog-king-power-up.component';

describe('FrogKingPowerUpComponent', () => {
  let component: FrogKingPowerUpComponent;
  let fixture: ComponentFixture<FrogKingPowerUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrogKingPowerUpComponent]
    });
    fixture = TestBed.createComponent(FrogKingPowerUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
