import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

import { inventoryReducer } from '../reducers/inventory';
import { GameComponent } from './components/game/game.component';
import { PondComponent } from './components/pond/pond.component';
import { FrogComponent } from './components/frog/frog.component';
import { shopReducer } from 'src/reducers/shop';
import { ShopComponent } from './components/shop/shop.component';
import { ShopItemComponent } from './components/shop/shop-item/shop-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CountUpDirective } from './directives/count-up.directive';
import { FrogSectionComponent } from './components/frog-section/frog-section.component';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { FrogTileComponent } from './components/frog-tile/frog-tile.component';
@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    PondComponent,
    FrogComponent,
    ShopComponent,
    ShopItemComponent,
    CountUpDirective,
    FrogSectionComponent,
    HeaderSectionComponent,
    FrogTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ inventory: inventoryReducer, shop: shopReducer}, {}),
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
