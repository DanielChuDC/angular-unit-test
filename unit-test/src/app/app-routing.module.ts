import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: 'pages',
        loadChildren: () => import('./pages/pages.module').then(mod => mod.PagesModule)
      }
    ]
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
