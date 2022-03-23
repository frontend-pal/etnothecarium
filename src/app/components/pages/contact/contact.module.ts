import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from "./contact.component";
import { RouterModule, Routes } from "@angular/router/";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AgmCoreModule } from '@agm/core';
import { SharedLazyModule } from 'app/shared/shared-lazy.module';

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
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    SharedLazyModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
