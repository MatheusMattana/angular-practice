import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectiveForRoutingModule } from './directive-for-routing.module';
import { DirectiveForComponent } from './directive-for.component';


@NgModule({
  declarations: [
    DirectiveForComponent
  ],
  imports: [
    CommonModule,
    DirectiveForRoutingModule
  ]
})
export class DirectiveForModule { }
