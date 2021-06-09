import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary-order',
  templateUrl: './summary-order.page.html',
  styleUrls: ['./summary-order.page.scss'],
})
export class SummaryOrderPage implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
  }
  offerPage() {
    this.route.navigate(['/select-order']);
  }
  checkoutPage() {
    this.route.navigate(['/checkout']);
  }
}
