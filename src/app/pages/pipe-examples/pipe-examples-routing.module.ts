import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipeExamplesComponent } from './pipe-examples.component';

const routes: Routes = [{ path: '', component: PipeExamplesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipeExamplesRoutingModule { }
