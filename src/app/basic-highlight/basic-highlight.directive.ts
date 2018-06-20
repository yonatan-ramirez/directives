import { Directive, ElementRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[basic-highlight]',

})
export class BasicHighLightDirective {
  constructor(private elementRef: ElementRef) {} // to accuses the element this directive sits on //

  // doesnt have other lifecylce hooks because there is no template associated with a directive

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';

  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {

  }
}
