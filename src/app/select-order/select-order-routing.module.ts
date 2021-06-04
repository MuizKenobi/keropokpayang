import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectOrderPage } from './select-order.page';

const routes: Routes = [
  {
    path: '',
    component: SelectOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectOrderPageRoutingModule {}
