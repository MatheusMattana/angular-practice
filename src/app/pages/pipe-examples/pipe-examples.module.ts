import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipeExamplesRoutingModule } from './pipe-examples-routing.module';
import { PipeExamplesComponent } from './pipe-examples.component';

@NgModule({
  declarations: [PipeExamplesComponent],
  imports: [CommonModule, PipeExamplesRoutingModule],
})
export class PipeExamplesModule {}
