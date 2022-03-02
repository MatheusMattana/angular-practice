import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveCustomComponent } from './directive-custom.component';

const routes: Routes = [{ path: '', component: DirectiveCustomComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectiveCustomRoutingModule { }
