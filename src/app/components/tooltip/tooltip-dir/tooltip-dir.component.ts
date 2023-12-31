import {
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  EmbeddedViewRef,
  HostListener,
  Injector,
  Input,
} from '@angular/core';

import { TooltipComponent } from '../tooltip.component';
import { FrogTooltipComponent } from '../frog-tooltip/frog-tooltip.component';
import { PassiveTooltipComponent } from '../passive-tooltip/passive-tooltip.component';
import {
  IFrogTooltip,
  ITooltip,
  TooltipPosition,
} from 'src/models/components/tooltips';
import { NumberParserService } from 'src/app/services/number-parser.service';
import { ItemTooltipComponent } from '../item-tooltip/item-tooltip.component';
import { TargetingService } from 'src/app/services/targeting.service';
import { TargetTooltipComponent } from '../target-tooltip/target-tooltip.component';
import { KingPowerUpTooltipComponent } from '../king-power-up-tooltip/king-power-up-tooltip.component';

@Directive({
  selector: '[tooltip]',
})
export class TooltipDirective {
  @Input() tooltip: ITooltip | IFrogTooltip;
  @Input() position: TooltipPosition = TooltipPosition.DEFAULT;

  private componentRef: ComponentRef<any> | null;

  lastXPos: number;
  lastYPos: number;

  constructor(
    private elementRef: ElementRef,
    private appRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private targetingService: TargetingService
  ) {}

  private setTooltipComponentProperties() {
    if (this.componentRef) {
      this.componentRef.instance.tooltip = this.tooltip;
      this.componentRef.instance.position = this.position;
      const { left, right, top, bottom } =
        this.elementRef.nativeElement.getBoundingClientRect();

      switch (this.position) {
        case TooltipPosition.BELOW: {
          this.componentRef.instance.left = Math.round(
            (right - left) / 2 + left
          );
          this.componentRef.instance.top = Math.round(bottom);
          break;
        }
        case TooltipPosition.ABOVE: {
          this.componentRef.instance.left = Math.round(
            (right - left) / 2 + left
          );
          this.componentRef.instance.top = Math.round(top);
          break;
        }
        case TooltipPosition.RIGHT: {
          this.componentRef.instance.left = Math.round(right);
          this.componentRef.instance.top = Math.round(top + (bottom - top) / 2);
          break;
        }
        case TooltipPosition.LEFT: {
          this.componentRef.instance.left = Math.round(left);
          this.componentRef.instance.top = Math.round(top + (bottom - top) / 2);
          break;
        }

        default: {
          break;
        }
      }
    }
  }
  @HostListener('mouseenter', ['$event'])
  onMouseEnter($event: MouseEvent): void {
    let tooltipComponent;

    switch (this.tooltip.type) {
      case 'item':
        tooltipComponent = ItemTooltipComponent;
        break;
      case 'frog':
        const targeting = this.targetingService.getTargetActive();
        if (targeting) {
          tooltipComponent = TargetTooltipComponent;
        } else {
          tooltipComponent = FrogTooltipComponent;
        }
        break;
      case 'passive':
        tooltipComponent = PassiveTooltipComponent;
        break;
      case 'kingPowerUp':
        tooltipComponent = KingPowerUpTooltipComponent;
        break;
      default:
        // Handle other cases if needed
        tooltipComponent = TooltipComponent;
        break;
    }

    if (!this.componentRef) {
      const componentFactory =
        this.componentFactoryResolver.resolveComponentFactory(tooltipComponent as any);
      this.componentRef = componentFactory.create(this.injector);

      this.appRef.attachView(this.componentRef.hostView);
      const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>)
        .rootNodes[0] as HTMLElement;
      document.body.appendChild(domElem);
      const { left, right, top, bottom } =
        this.elementRef.nativeElement.getBoundingClientRect();
      if (this.componentRef) {
        if (this.componentRef.instance.left == 0)
          this.componentRef.instance.left = $event.clientX;
        if (this.componentRef.instance.top == 0)
          this.componentRef.instance.top = Math.round(bottom);
      }

      this.setTooltipComponentProperties();
    }
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove($event: MouseEvent): void {
    const { left, right, top, bottom } =
      this.elementRef.nativeElement.getBoundingClientRect();
    if (this.componentRef && this.position === TooltipPosition.DYNAMICLEFT) {
      this.componentRef.instance.top = $event.clientY;
      this.componentRef.instance.tooltip = this.tooltip;
      this.componentRef.instance.left = window.innerWidth * 0.75 - 210;
    }

    if (this.componentRef && this.position === TooltipPosition.DYNAMICRIGHT) {
      this.componentRef.instance.top = $event.clientY;
      this.componentRef.instance.tooltip = this.tooltip;
      this.componentRef.instance.left = window.innerWidth * 0.25 + 210;
    }

    if (this.componentRef && this.position === TooltipPosition.DYNAMICUNDER) {
      this.componentRef.instance.left = $event.clientX;
      this.componentRef.instance.tooltip = this.tooltip;
      this.componentRef.instance.top = Math.round(bottom);
    }
  }

  onMouseClick($event: MouseEvent): void {
    this.destroy();
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.destroy();
  }

  ngOnDestroy(): void {
    this.destroy();
  }

  destroy(): void {
    if (this.componentRef !== null && this.componentRef !== undefined) {
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }
}
