import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-ng-class',
  templateUrl: './directive-ng-class.component.html',
  styleUrls: ['./directive-ng-class.component.scss'],
})
export class DirectiveNgClassComponent {
  theme: 'light' | 'dark' = 'light';

  changeTheme(theme: 'light' | 'dark') {
    this.theme = theme;
  }
}
