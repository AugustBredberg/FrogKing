import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

import { inventoryReducer } from '../reducers/inventory';
import { GameComponent } from './components/game/game.component';
import { shopReducer } from 'src/reducers/shop';
import { ShopComponent } from './components/shop/shop.component';
import { ShopItemComponent } from './components/shop/shop-item/shop-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CountUpDirective } from './directives/count-up.directive';
import { FrogKingSectionComponent } from './components/frog-king-section/frog-king-section.component';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { FrogTileComponent } from './components/frog-tile/frog-tile.component';
import { TooltipModule } from './components/tooltip/tooltip.module';
import { SpawnFrogTileComponent } from './components/spawn-frog-tile/spawn-frog-tile.component';
import { ShopPondItemComponent } from './components/shop-pond-item/shop-pond-item.component';
import { PondFullTileComponent } from './components/pond-full-tile/pond-full-tile.component';
import { EvolveDialogComponent } from './components/dialogs/evolve-dialog/evolve-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { PassivesSectionComponent } from './components/passives-section/passives-section.component';
import { PassiveComponent } from './components/passive/passive.component';
import { TargetComponent } from './components/target/target.component';
import { FrogKingPowerUpComponent } from './components/frog-king-power-up/frog-king-power-up.component';
import { FrogPortraitComponent } from './components/frog-portrait/frog-portrait.component';
import { SettingsDialogComponent } from './components/settings-dialog/settings-dialog.component';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    ShopComponent,
    ShopItemComponent,
    CountUpDirective,
    FrogKingSectionComponent,
    HeaderSectionComponent,
    FrogTileComponent,
    SpawnFrogTileComponent,
    ShopPondItemComponent,
    PondFullTileComponent,
    EvolveDialogComponent,
    PassivesSectionComponent,
    PassiveComponent,
    TargetComponent,
    FrogKingPowerUpComponent,
    FrogPortraitComponent,
    SettingsDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ inventory: inventoryReducer, shop: shopReducer }, {}),
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    TooltipModule,
    MatDialogModule,
    MatSliderModule,
    FormsModule,
  ],

  providers: [MatDialogModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
