import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaginationModule} from "ngx-bootstrap/pagination";
import { PaginationHeaderComponent } from './components/pagination-header/pagination-header.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import {MatInputModule} from "@angular/material/input";
import {CarouselModule} from "ngx-bootstrap/carousel";


@NgModule({
  declarations: [
    PaginationHeaderComponent,
    PaginationComponent,
    OrderSummaryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule.forRoot(),
    PaginationModule.forRoot(),
    MatInputModule
  ],
  exports: [
    PaginationModule,
    PaginationHeaderComponent,
    PaginationComponent,
    CarouselModule,
    OrderSummaryComponent,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class SharedModule { }
