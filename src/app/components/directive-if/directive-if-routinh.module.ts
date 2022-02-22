import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveIfComponent } from './directive-if.component';

const routes: Routes = [{ path: '', component: DirectiveIfComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectiveIfRoutingModule {}
