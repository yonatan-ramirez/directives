import { Directive, Renderer2, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private renderer: Renderer2,
  private elementRef: ElementRef) { }

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    // forth argument is optional. We can set !important in that argument
  }

  // Host listener decorator is added to a method we want to execute on an event
  // when the moust enters (hovers over) the listener it turns blue!
  @HostListener('mouseenter') mouseEnter() {
// listening for mouseenter event on host
this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
  }
// when the mouse pointer no longer hovers over it turns transparent
  @HostListener('mouseleave') mouseOut() {
    // listening for mouse leave event on host
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  }
}
