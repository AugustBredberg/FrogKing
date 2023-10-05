import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingPowerUpTooltipComponent } from './king-power-up-tooltip.component';

describe('KingPowerUpTooltipComponent', () => {
  let component: KingPowerUpTooltipComponent;
  let fixture: ComponentFixture<KingPowerUpTooltipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KingPowerUpTooltipComponent]
    });
    fixture = TestBed.createComponent(KingPowerUpTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
