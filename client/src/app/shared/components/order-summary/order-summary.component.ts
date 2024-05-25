import { Component } from '@angular/core';
import {BasketService} from "../../../basket/basket.service";

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent {
  constructor(public basketService: BasketService) {
  }
}
