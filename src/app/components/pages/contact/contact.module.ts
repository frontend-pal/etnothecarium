import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from "./contact.component";
import { RouterModule, Routes } from "@angular/router/";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedLazyModule } from '../../../shared/shared-lazy.module';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

const routes: Routes = [
  { path: '', component: ContactComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyATGoSNEGkCM8_d9NNrUdbBVDZ5FjVaBK4'
    }),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedLazyModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
