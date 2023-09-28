import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './tooltip.component';
import { TooltipDirective } from './tooltip-dir/tooltip-dir.component';
import { FrogTooltipComponent } from './frog-tooltip/frog-tooltip.component';
import { PassiveTooltipComponent } from './passive-tooltip/passive-tooltip.component';

@NgModule({
  declarations: [TooltipComponent, TooltipDirective, FrogTooltipComponent, PassiveTooltipComponent],
  imports: [CommonModule],
  exports: [TooltipDirective],
})
export class TooltipModule {}
