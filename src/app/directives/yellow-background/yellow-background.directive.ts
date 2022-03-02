import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[yellowBackground]',
})
export class YellowBackgroundDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.element.nativeElement, 'background', 'yellow');
  }
}
