import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-order',
  templateUrl: './select-order.page.html',
  styleUrls: ['./select-order.page.scss'],
})
export class SelectOrderPage implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
  }

  orderSummary() {
    this.route.navigate(['/summary-order']);
  }
}
