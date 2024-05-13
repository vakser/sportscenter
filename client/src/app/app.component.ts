import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductData} from "./models/productData";
import {Product} from "./models/product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Sports Center';
  products: Product[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http
      .get<ProductData>('http://localhost:8080/api/products')
      .subscribe({
        next: (data) => {
          this.products = data.content;
        },
        error: (err) => {
          console.error('Error fetching data: ' + err);
        }
      })
  }
}
