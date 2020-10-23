import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'pageOne',
    loadChildren: () => import('./page-one/page-one.module').then( m => m.PageOnePageModule)
  },
  {
    path: 'pageTwo',
    loadChildren: () => import('./page-two/page-two.module').then( m => m.PageTwoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
