import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpawnFrogTileComponent } from './spawn-frog-tile.component';

describe('SpawnFrogTileComponent', () => {
  let component: SpawnFrogTileComponent;
  let fixture: ComponentFixture<SpawnFrogTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpawnFrogTileComponent]
    });
    fixture = TestBed.createComponent(SpawnFrogTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
