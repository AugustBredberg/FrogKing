import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrogTileComponent } from './frog-tile.component';

describe('FrogTileComponent', () => {
  let component: FrogTileComponent;
  let fixture: ComponentFixture<FrogTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrogTileComponent]
    });
    fixture = TestBed.createComponent(FrogTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
