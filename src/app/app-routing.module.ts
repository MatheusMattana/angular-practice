import { DirectiveNgClassComponent } from './components/directive-ng-class/directive-ng-class.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'if-directive',
    pathMatch: 'full',
  },
  {
    path: 'if-directive',
    loadChildren: () =>
      import('./components/directive-if/directive-if.module').then(
        (m) => m.DirectiveIfModule
      ),
  },
  {
    path: 'for-directive',
    loadChildren: () =>
      import('./components/directive-for/directive-for.module').then(
        (m) => m.DirectiveForModule
      ),
  },
  {
    path: 'switch-directive',
    loadChildren: () =>
      import('./components/directive-switch/directive-switch.module').then(
        (m) => m.DirectiveSwitchModule
      ),
  },
  {
    path: 'ng-class-directive',
    loadChildren: () =>
      import('./components/directive-ng-class/directive-ng-class.module').then(
        (m) => m.DirectiveNgClassModule
      ),
  },
  {
    path: '**',
    redirectTo: '/if-directive',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
