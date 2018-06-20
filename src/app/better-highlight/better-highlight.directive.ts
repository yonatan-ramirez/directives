import { Directive, Renderer2, ElementRef, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private renderer: Renderer2,
  private elementRef: ElementRef) { }

  // HostListener begining!-----
  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    // forth argument is optional. We can set !important in that argument
  }

//   // Host listener decorator is added to a method we want to execute on an event
//   // when the moust enters (hovers over) the listener it turns blue!
//   @HostListener('mouseenter') mouseEnter() {
// // listening for mouseenter event on host
// this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
//   }
// // when the mouse pointer no longer hovers over it turns transparent
//   @HostListener('mouseleave') mouseOut() {
//     // listening for mouse leave event on host
//     this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
//   }
// HostListener End--------

// HostBinding Begining -------------
                                                // backgroundColor: string = 'transparent';
    // tslint:disable-next-line:member-ordering
    @HostBinding('style.backgroundColor') backgroundColor = 'transparent';
    // Bind to host property using HostBinding!
    // define in string
    // camelCase property name because we are accessing DOM property not CSS

  // Host listener decorator is added to a method we want to execute on an event
  // when the moust enters (hovers over) the listener it turns blue!
  @HostListener('mouseenter') mouseEnter() {
    this.backgroundColor = 'blue';
  }
// when the mouse pointer no longer hovers over it turns transparent
  @HostListener('mouseleave') mouseOut() {
    this.backgroundColor = 'transparent';
  }
  // HostBinding End! -------------------
}
