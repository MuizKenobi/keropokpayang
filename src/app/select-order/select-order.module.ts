import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectOrderPageRoutingModule } from './select-order-routing.module';

import { SelectOrderPage } from './select-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectOrderPageRoutingModule
  ],
  declarations: [SelectOrderPage]
})
export class SelectOrderPageModule {}
