import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { Destroy } from './destroy';
import {
  BehaviorSubject,
  animationFrameScheduler,
  combineLatest,
  switchMap,
  interval,
  distinctUntilChanged,
  endWith,
  map,
  takeUntil,
  takeWhile,
} from 'rxjs';
import { NumberParserService } from '../services/number-parser.service';

/**
 * Quadratic Ease-Out Function: f(x) = x * (2 - x)
 */
const easeOutQuad = (x: number): number => x * (2 - x);

@Directive({
  selector: '[countUp]',
  providers: [Destroy],
})
export class CountUpDirective implements OnInit {
  @Input() from: number;
  private readonly count$ = new BehaviorSubject(0);
  private readonly duration$ = new BehaviorSubject(2000);

  private readonly currentCount$ = combineLatest([
    this.count$,
    this.duration$,
  ]).pipe(
    switchMap(([count, duration]) => {
      // get the time when animation is triggered
      const startTime = animationFrameScheduler.now();

      //count = this.from;
      var countInterval = count - this.from;

      return interval(0, animationFrameScheduler).pipe(
        // calculate elapsed time
        map(() => animationFrameScheduler.now() - startTime),
        // calculate progress
        map((elapsedTime) => elapsedTime / duration),
        // complete when progress is greater than 1
        takeWhile((progress) => progress <= 1),
        // apply quadratic ease-out function
        // for faster start and slower end of counting
        //map(easeOutQuad),
        // calculate current count
        map((progress) =>
          Math.round(progress * countInterval + this.from) > count
            ? Math.round(count)
            : Math.round(progress * countInterval + this.from)
        ),
        // make sure that last emitted value is count
        endWith(Math.round(count)),
        distinctUntilChanged()
      );
    })
  );

  @Input('countUp')
  set count(count: number) {
    this.count$.next(count);
  }

  @Input()
  set duration(duration: number) {
    this.duration$.next(duration);
  }

  constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2,
    private readonly destroy$: Destroy,
    private numberParserSerivce: NumberParserService
  ) {}

  ngOnInit(): void {
    //this.count$.next(this.from);
    this.displayCurrentCount();
  }

  private displayCurrentCount(): void {
    this.currentCount$
      .pipe(takeUntil(this.destroy$))
      .subscribe((currentCount) => {
        this.renderer.setProperty(
          this.elementRef.nativeElement,
          'innerHTML',
          this.numberParserSerivce.convertToReadableNumber(currentCount)
        );
      });
  }
}
