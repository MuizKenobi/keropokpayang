import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'shipping-policy',
    loadChildren: () => import('./shipping-policy/shipping-policy.module').then( m => m.ShippingPolicyPageModule)
  },
  {
    path: 'refund-policy',
    loadChildren: () => import('./refund-policy/refund-policy.module').then( m => m.RefundPolicyPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
