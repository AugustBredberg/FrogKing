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
import {
  IFrogTooltip,
  ITooltip,
  TooltipPosition,
} from 'src/models/components/tooltips';

@Directive({
  selector: '[tooltip]',
})
export class TooltipDirective {
  @Input() tooltip: ITooltip | IFrogTooltip;
  @Input() position: TooltipPosition = TooltipPosition.DEFAULT;

  private componentRef: ComponentRef<any> | null;

  constructor(
    private elementRef: ElementRef,
    private appRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
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
  @HostListener('mouseenter')
  onMouseEnter(): void {
    let tooltipComponent;
    console.log('type', this.tooltip);
    switch (this.tooltip.type) {
      case 'item':
        tooltipComponent = TooltipComponent;
        break;
      case 'frog':
        tooltipComponent = FrogTooltipComponent;
        break;
      default:
        // Handle other cases if needed
        tooltipComponent = TooltipComponent;
        break;
    }

    if (!this.componentRef) {
      const componentFactory =
        this.componentFactoryResolver.resolveComponentFactory(tooltipComponent);
      this.componentRef = componentFactory.create(this.injector);

      this.appRef.attachView(this.componentRef.hostView);
      const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>)
        .rootNodes[0] as HTMLElement;
      document.body.appendChild(domElem);
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
      this.componentRef.instance.left = window.innerWidth * 0.62;
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
