import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesService } from './services/courses/courses.service';
import { ServiceAddCoursesModule } from './pages/service-add-courses/service-add-courses.module';

import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ServiceAddCoursesModule],
  providers: [
    CoursesService,
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
