import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'diretiva-if',
    pathMatch: 'full',
  },
  {
    path: 'diretiva-if',
    loadChildren: () =>
      import('./components/directive-if/directive-if.module').then(
        (m) => m.DirectiveIfModule
      ),
  },
  {
    path: '**',
    redirectTo: '/diretiva-if',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
