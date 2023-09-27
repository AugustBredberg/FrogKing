import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopPondItemComponent } from './shop-pond-item.component';

describe('ShopPondItemComponent', () => {
  let component: ShopPondItemComponent;
  let fixture: ComponentFixture<ShopPondItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopPondItemComponent]
    });
    fixture = TestBed.createComponent(ShopPondItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
