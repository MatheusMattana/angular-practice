import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-for',
  templateUrl: './directive-for.component.html',
  styleUrls: ['./directive-for.component.scss'],
})
export class DirectiveForComponent {
  courses = ['Angular course', 'React Course', 'Vue Course', 'Laravel Course'];
}
