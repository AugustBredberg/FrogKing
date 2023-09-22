import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InventoryState } from 'src/models/states';
import { Store } from '@ngrx/store';
import { add } from 'src/app/inventory-actions';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  inventory$: Observable<InventoryState>
  inventory: InventoryState
  //tadpoles$: Observable<number>

  constructor(
    private store: Store<{ inventory: InventoryState }>,
    private gameService: GameService) {
    this.inventory$ = store.select('inventory');
    this.inventory$.subscribe((inventory) => {
      this.inventory = inventory;
    });
  }

  ngOnInit() {
    this.gameService.init();
  }

  spawn() {
    console.log("Spawn")
    this.store.dispatch(add({
      production_rate: 1
    }));
  }

}
