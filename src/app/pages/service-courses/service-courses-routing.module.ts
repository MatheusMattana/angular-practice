import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceCoursesComponent } from './service-courses.component';

const routes: Routes = [{ path: '', component: ServiceCoursesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceCoursesRoutingModule { }
