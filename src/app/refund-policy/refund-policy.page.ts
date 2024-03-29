import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-refund-policy',
  templateUrl: './refund-policy.page.html',
  styleUrls: ['./refund-policy.page.scss'],
})
export class RefundPolicyPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  dismiss() {  
    this.modalCtrl.dismiss();  
  }
}
