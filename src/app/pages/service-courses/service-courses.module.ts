import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceCoursesRoutingModule } from './service-courses-routing.module';
import { ServiceCoursesComponent } from './service-courses.component';

@NgModule({
  declarations: [ServiceCoursesComponent],
  imports: [CommonModule, ServiceCoursesRoutingModule],
})
export class ServiceCoursesModule {}
