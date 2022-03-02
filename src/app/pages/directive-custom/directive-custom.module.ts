import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectiveCustomRoutingModule } from './directive-custom-routing.module';
import { DirectiveCustomComponent } from './directive-custom.component';
import { YellowBackgroundDirective } from 'src/app/directives/yellow-background/yellow-background.directive';
import { HighlightOnHoverDirective } from 'src/app/directives/highlight-on-hover/highlight-on-hover.directive';
import { CustomColorHighlightDirective } from 'src/app/directives/custom-color-highlight/custom-color-highlight.directive';

@NgModule({
  declarations: [
    DirectiveCustomComponent,
    YellowBackgroundDirective,
    HighlightOnHoverDirective,
    CustomColorHighlightDirective,
  ],
  imports: [CommonModule, DirectiveCustomRoutingModule],
})
export class DirectiveCustomModule {}
