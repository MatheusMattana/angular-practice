import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipeExamplesRoutingModule } from './pipe-examples-routing.module';
import { PipeExamplesComponent } from './pipe-examples.component';
import { CamelCasePipe } from 'src/app/pipes/camel-case/camel-case.pipe';

@NgModule({
  declarations: [PipeExamplesComponent, CamelCasePipe],
  imports: [CommonModule, PipeExamplesRoutingModule],
})
export class PipeExamplesModule {}
