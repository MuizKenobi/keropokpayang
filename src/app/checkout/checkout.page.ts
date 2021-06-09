import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
  }

  paymentPage() {
    this.route.navigate(['/payment']);
  }
}
