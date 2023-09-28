import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './tooltip.component';
import { TooltipDirective } from './tooltip-dir/tooltip-dir.component';

@NgModule({
  declarations: [TooltipComponent, TooltipDirective],
  imports: [CommonModule],
  exports: [TooltipDirective],
})
export class TooltipModule {}
