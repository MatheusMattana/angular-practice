import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveSwitchComponent } from './directive-switch.component';

const routes: Routes = [{ path: '', component: DirectiveSwitchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectiveSwitchRoutingModule { }
