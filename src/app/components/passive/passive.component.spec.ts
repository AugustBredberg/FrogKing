import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassiveComponent } from './passive.component';

describe('PassiveComponent', () => {
  let component: PassiveComponent;
  let fixture: ComponentFixture<PassiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassiveComponent]
    });
    fixture = TestBed.createComponent(PassiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
