import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './tooltip.component';
import { TooltipDirective } from './tooltip-dir/tooltip-dir.component';
import { FrogTooltipComponent } from './frog-tooltip/frog-tooltip.component';
import { PassiveTooltipComponent } from './passive-tooltip/passive-tooltip.component';
import { ItemTooltipComponent } from './item-tooltip/item-tooltip.component';
import { TargetTooltipComponent } from './target-tooltip/target-tooltip.component';
import { KingPowerUpTooltipComponent } from './king-power-up-tooltip/king-power-up-tooltip.component';

@NgModule({
  declarations: [TooltipComponent, TooltipDirective, FrogTooltipComponent, PassiveTooltipComponent, ItemTooltipComponent, TargetTooltipComponent, KingPowerUpTooltipComponent],
  imports: [CommonModule],
  exports: [TooltipDirective],
})
export class TooltipModule {}
