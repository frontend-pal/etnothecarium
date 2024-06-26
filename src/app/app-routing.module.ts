import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./components/pages/index/index.module').then(m => m.IndexModule) },
  { path: 'products', loadChildren: () => import('./components/pages/products/products.module').then(m => m.ProductsModule) },
  { path: 'about', loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule) },
  { path: 'research', loadChildren: () => import('./components/pages/research/research.module').then(m => m.ResearchModule) },
  { path: 'contact', loadChildren: () => import('./components/pages/contact/contact.module').then(m => m.ContactModule) },
  { path: 'store', loadChildren: () => import('./components/pages/contact/contact.module').then(m => m.ContactModule) },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
