import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrogSectionComponent } from './frog-section.component';

describe('FrogSectionComponent', () => {
  let component: FrogSectionComponent;
  let fixture: ComponentFixture<FrogSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrogSectionComponent]
    });
    fixture = TestBed.createComponent(FrogSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
