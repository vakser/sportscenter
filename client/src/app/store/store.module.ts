import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { ProductItemComponent } from './product-item/product-item.component';
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    StoreComponent,
    ProductItemComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule
    ],
  exports: [
    StoreComponent
  ]
})
export class StoreModule { }
