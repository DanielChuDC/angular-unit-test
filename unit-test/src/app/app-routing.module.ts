import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutsModule } from './layouts/layouts.module';

const routes: Routes = [
  {
    path: 'layouts',
    loadChildren: () => import('./layouts/layouts.module').then(mod => mod.LayoutsModule)
  },
  {
    path: 'newlayouts',
    loadChildren: () =>
      import('./another-layout/another-layout.module').then(mod => mod.AnotherLayoutModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
