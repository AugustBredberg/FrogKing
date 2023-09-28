import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrogTooltipComponent } from './frog-tooltip.component';

describe('FrogTooltipComponent', () => {
  let component: FrogTooltipComponent;
  let fixture: ComponentFixture<FrogTooltipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrogTooltipComponent]
    });
    fixture = TestBed.createComponent(FrogTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
