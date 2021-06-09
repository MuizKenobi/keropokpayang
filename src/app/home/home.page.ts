import { Component } from '@angular/core';
import { ModalController} from '@ionic/angular';  
import { RefundPolicyPage } from '../refund-policy/refund-policy.page';
import { ShippingPolicyPage } from '../shipping-policy/shipping-policy.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public modalCtrl: ModalController, private route: Router) {}

  async openShippingPolicyModal() {  
    const modal = await this.modalCtrl.create({  
      component: ShippingPolicyPage,
      cssClass: 'modal'
    });  
    return await modal.present();  
  }  

  async openRefundPolicyModal() {  
    const modal = await this.modalCtrl.create({  
      component: RefundPolicyPage,
      cssClass: 'modal'
    });  
    return await modal.present();  
  }
  orderPage() {
    this.route.navigate(['/select-order']);
  } 
}
