import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
// implements setter to turn a property into a method.
// it is still a property but just a setter of that property.

    if (!condition) {
      // display something here
      this.vcRef.createEmbeddedView(this.templateRed); // create a new view in the container, display templateRef content in this new veiw
    } else {
      // display nothing here
      this.vcRef.clear(); // clear everything from this container

    }
  }

  constructor(private templateRed: TemplateRef<any>,
    private vcRef: ViewContainerRef) { } // templateRef = what content it is , vcRef = where the content is

}
