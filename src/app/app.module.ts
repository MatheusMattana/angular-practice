import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesService } from './services/courses/courses.service';
import { ServiceAddCoursesModule } from './pages/service-add-courses/service-add-courses.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ServiceAddCoursesModule],
  providers: [CoursesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
