import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private courses = ['Angular', 'React', 'Node', 'AWS', 'Vue'];

  constructor() {}

  getCourses() {
    return this.courses;
  }

  addCourse(course = '') {
    this.courses.push(course);
  }
}
