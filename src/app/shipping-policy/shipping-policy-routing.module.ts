import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShippingPolicyPage } from './shipping-policy.page';

const routes: Routes = [
  {
    path: '',
    component: ShippingPolicyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShippingPolicyPageRoutingModule {}
