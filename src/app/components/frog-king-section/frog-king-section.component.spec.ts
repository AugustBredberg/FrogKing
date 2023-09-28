import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrogKingSectionComponent } from './frog-king-section.component';

describe('FrogKingSectionComponent', () => {
  let component: FrogKingSectionComponent;
  let fixture: ComponentFixture<FrogKingSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrogKingSectionComponent],
    });
    fixture = TestBed.createComponent(FrogKingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
