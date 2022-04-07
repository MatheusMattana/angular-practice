import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses/courses.service';

@Component({
  selector: 'app-service-add-courses',
  templateUrl: './service-add-courses.component.html',
  styleUrls: ['./service-add-courses.component.scss'],
})
export class ServiceAddCoursesComponent implements OnInit {
  courses = [''];

  constructor(private courseService: CoursesService) {}

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }

  addCourse(course = '') {
    this.courseService.addCourse(course);
  }
}
