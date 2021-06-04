import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SummaryOrderPageRoutingModule } from './summary-order-routing.module';

import { SummaryOrderPage } from './summary-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SummaryOrderPageRoutingModule
  ],
  declarations: [SummaryOrderPage]
})
export class SummaryOrderPageModule {}
