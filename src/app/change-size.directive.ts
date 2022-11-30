import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeSize]',
  standalone: true
})
export class ChangeSizeDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }


  @HostListener('mouseenter')
  onMouseEnter(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'fontSize', '30px');
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'fontSize', '14px');
  }


}
