import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassivesSectionComponent } from './passives-section.component';

describe('PassivesSectionComponent', () => {
  let component: PassivesSectionComponent;
  let fixture: ComponentFixture<PassivesSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassivesSectionComponent]
    });
    fixture = TestBed.createComponent(PassivesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
