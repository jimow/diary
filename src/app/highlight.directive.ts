import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {}
  @HostListener("mouseenter") onMouseEnter() {
    this.highLight("green")
  }
  @HostListener("mouseleave") onMouseLeave() {
    this.highLight(null)
  }
  private highLight(action:string){
    this.el.nativeElement.style.backgroundColor=action;

  }
}
