import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';  

@Component({
  selector: 'app-shipping-policy',
  templateUrl: './shipping-policy.page.html',
  styleUrls: ['./shipping-policy.page.scss'],
})
export class ShippingPolicyPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }
  dismiss() {  
    this.modalCtrl.dismiss();  
  }
}
