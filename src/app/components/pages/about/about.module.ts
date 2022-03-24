import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from "./about.component";
import { RouterModule, Routes } from "@angular/router/";
import { SharedLazyModule } from '../../../shared/shared-lazy.module';

const routes: Routes = [
  { path: '', component: AboutComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLazyModule
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
