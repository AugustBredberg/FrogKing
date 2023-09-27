import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipDirective } from './tooltip-dir.component';

describe('TooltipDirComponent', () => {
  let component: TooltipDirective;
  let fixture: ComponentFixture<TooltipDirective>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TooltipDirective],
    });
    fixture = TestBed.createComponent(TooltipDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
