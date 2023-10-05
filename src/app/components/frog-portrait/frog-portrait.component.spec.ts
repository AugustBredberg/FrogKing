import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrogPortraitComponent } from './frog-portrait.component';

describe('FrogPortraitComponent', () => {
  let component: FrogPortraitComponent;
  let fixture: ComponentFixture<FrogPortraitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrogPortraitComponent]
    });
    fixture = TestBed.createComponent(FrogPortraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
