import { Directive, OnDestroy } from '@angular/core';

import { Subject } from 'rxjs';

@Directive()
export class UnsubscriberDirective implements OnDestroy {
  protected destroy$: Subject<void> = new Subject<void>();

  ngOnDestroy(): void {
    this.unsubscribeAll();
  }

  unsubscribeAll(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
