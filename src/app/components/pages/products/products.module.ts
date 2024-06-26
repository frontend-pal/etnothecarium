import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from "./products.component";
import { RouterModule, Routes } from "@angular/router/";
import { SharedLazyModule } from '../../../shared/shared-lazy.module';

const routes: Routes = [
  { path: '', component: ProductsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLazyModule
  ],
  declarations: [ProductsComponent]
})
export class ProductsModule { }
