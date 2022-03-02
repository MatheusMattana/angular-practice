import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveNgClassComponent } from './directive-ng-class.component';

const routes: Routes = [{ path: '', component: DirectiveNgClassComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectiveNgClassRoutingModule { }
