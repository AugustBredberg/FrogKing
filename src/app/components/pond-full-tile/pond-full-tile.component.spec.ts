import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PondFullTileComponent } from './pond-full-tile.component';

describe('PondFullTileComponent', () => {
  let component: PondFullTileComponent;
  let fixture: ComponentFixture<PondFullTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PondFullTileComponent]
    });
    fixture = TestBed.createComponent(PondFullTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
