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
      import('./pages/directive-if/directive-if.module').then(
        (m) => m.DirectiveIfModule
      ),
  },
  {
    path: 'for-directive',
    loadChildren: () =>
      import('./pages/directive-for/directive-for.module').then(
        (m) => m.DirectiveForModule
      ),
  },
  {
    path: 'switch-directive',
    loadChildren: () =>
      import('./pages/directive-switch/directive-switch.module').then(
        (m) => m.DirectiveSwitchModule
      ),
  },
  {
    path: 'ng-class-directive',
    loadChildren: () =>
      import('./pages/directive-ng-class/directive-ng-class.module').then(
        (m) => m.DirectiveNgClassModule
      ),
  },
  { path: 'custom-directive', loadChildren: () => import('./pages/directive-custom/directive-custom.module').then(m => m.DirectiveCustomModule) },
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
