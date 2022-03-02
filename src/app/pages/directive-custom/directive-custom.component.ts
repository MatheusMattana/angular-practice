import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-custom',
  templateUrl: './directive-custom.component.html',
  styleUrls: ['./directive-custom.component.scss'],
})
export class DirectiveCustomComponent {
  showCourses = true;

  toggleCourses() {
    this.showCourses = !this.showCourses;
  }
}
