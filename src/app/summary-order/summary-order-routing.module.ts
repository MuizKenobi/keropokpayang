import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SummaryOrderPage } from './summary-order.page';

const routes: Routes = [
  {
    path: '',
    component: SummaryOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SummaryOrderPageRoutingModule {}
