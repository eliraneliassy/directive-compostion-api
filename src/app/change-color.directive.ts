import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeColor]',
  standalone: true
})
export class ChangeColorDirective {

  @Input() color?: string;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }


  @HostListener('mouseenter')
  onMouseEnter(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', this.color || 'red');
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');
  }


}
