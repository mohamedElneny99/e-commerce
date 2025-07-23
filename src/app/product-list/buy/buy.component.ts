import { FormsModule } from '@angular/forms';
import { CommonModule  } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buy',
  imports: [CommonModule , FormsModule ],
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.css'
})
export class BuyComponent {
  productId: string | null = null;

  fullName = '';
  address = '';
  cardNumber = '';
  expiry = '';
  cvv = '';

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id');
    });
  }

  confirmPurchase() {
    alert('Purchase Confirmed! Thank you.');
  }

}
