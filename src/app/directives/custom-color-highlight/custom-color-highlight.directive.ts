import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[customColorHighlight]',
})
export class CustomColorHighlightDirective implements OnInit {
  @HostListener('mouseenter') onMouseEnter() {
    this.background = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.background = this.defaultColor;
  }

  @HostBinding('style.background') background = '';

  @Input() defaultColor = 'transparent';

  @Input() highlightColor = 'yellow';

  constructor() {}

  ngOnInit(): void {
    this.background = this.defaultColor;
  }
}
