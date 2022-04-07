import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceAddCoursesComponent } from './service-add-courses.component';

const routes: Routes = [{ path: '', component: ServiceAddCoursesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceAddCoursesRoutingModule {}
