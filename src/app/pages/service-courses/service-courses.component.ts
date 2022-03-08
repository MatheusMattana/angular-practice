import { CoursesService } from './../../services/courses/courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-courses',
  templateUrl: './service-courses.component.html',
  styleUrls: ['./service-courses.component.scss'],
})
export class ServiceCoursesComponent implements OnInit {
  courses = [''];

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.courses = this.coursesService.getCourses();
  }
}
