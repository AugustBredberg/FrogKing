import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetTooltipComponent } from './target-tooltip.component';

describe('TargetTooltipComponent', () => {
  let component: TargetTooltipComponent;
  let fixture: ComponentFixture<TargetTooltipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TargetTooltipComponent]
    });
    fixture = TestBed.createComponent(TargetTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
