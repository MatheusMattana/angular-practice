import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightOnHover]',
})
export class HighlightOnHoverDirective {
  @HostListener('mouseenter') onMouseEnter() {
    this.background = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.background = 'transparent';
  }

  @HostBinding('style.background') background = '';
}
