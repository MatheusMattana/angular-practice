import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceAddCoursesRoutingModule } from './service-add-courses-routing.module';
import { ServiceAddCoursesComponent } from './service-add-courses.component';

@NgModule({
  declarations: [ServiceAddCoursesComponent],
  imports: [CommonModule, ServiceAddCoursesRoutingModule],
})
export class ServiceAddCoursesModule {}
