import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { ProductItemComponent } from './product-item/product-item.component';
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import { ProductDetailsComponent } from './product-details/product-details.component';
import {RouterModule} from "@angular/router";
import {StoreRoutingModule} from "./store-routing.module";


@NgModule({
  declarations: [
    StoreComponent,
    ProductItemComponent,
    ProductDetailsComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        RouterModule,
        StoreRoutingModule
    ],
  exports: [
    StoreComponent
  ]
})
export class StoreModule { }
