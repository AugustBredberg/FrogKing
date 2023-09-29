import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassiveTooltipComponent } from './passive-tooltip.component';

describe('PassiveTooltipComponent', () => {
  let component: PassiveTooltipComponent;
  let fixture: ComponentFixture<PassiveTooltipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassiveTooltipComponent]
    });
    fixture = TestBed.createComponent(PassiveTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
