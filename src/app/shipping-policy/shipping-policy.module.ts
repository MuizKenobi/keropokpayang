import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShippingPolicyPageRoutingModule } from './shipping-policy-routing.module';

import { ShippingPolicyPage } from './shipping-policy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShippingPolicyPageRoutingModule
  ],
  declarations: [ShippingPolicyPage]
})
export class ShippingPolicyPageModule {}
