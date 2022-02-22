import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveIfComponent } from './directive-if.component';
import { DirectiveIfRoutingModule } from './directive-if-routinh.module';

@NgModule({
  declarations: [DirectiveIfComponent],
  imports: [CommonModule, DirectiveIfRoutingModule],
})
export class DirectiveIfModule {}
