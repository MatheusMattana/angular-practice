import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectiveCustomRoutingModule } from './directive-custom-routing.module';
import { DirectiveCustomComponent } from './directive-custom.component';
import { YellowBackgroundDirective } from 'src/app/directives/yellow-background/yellow-background.directive';

@NgModule({
  declarations: [DirectiveCustomComponent, YellowBackgroundDirective],
  imports: [CommonModule, DirectiveCustomRoutingModule],
})
export class DirectiveCustomModule {}
