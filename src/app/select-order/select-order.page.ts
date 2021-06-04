import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-select-order',
  templateUrl: './select-order.page.html',
  styleUrls: ['./select-order.page.scss'],
})
export class SelectOrderPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  dismiss() {  
    this.modalCtrl.dismiss();  
  }
}
