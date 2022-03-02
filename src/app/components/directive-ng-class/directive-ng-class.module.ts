import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectiveNgClassRoutingModule } from './directive-ng-class-routing.module';
import { DirectiveNgClassComponent } from './directive-ng-class.component';

@NgModule({
  declarations: [DirectiveNgClassComponent],
  imports: [CommonModule, DirectiveNgClassRoutingModule],
})
export class DirectiveNgClassModule {}
