import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-if',
  templateUrl: './directive-if.component.html',
  styleUrls: ['./directive-if.component.scss'],
})
export class DirectiveIfComponent {
  showCourses = true;

  toggleCourses() {
    this.showCourses = !this.showCourses;
  }
}
