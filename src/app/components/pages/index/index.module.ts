import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from "./index.component";
import { RouterModule, Routes } from "@angular/router/";

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SharedModule } from 'app/shared/shared.module';
import { SharedLazyModule } from 'app/shared/shared-lazy.module';

const routes: Routes = [
  { path: '', component: IndexComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLazyModule
    // SharedModule,
    // HttpClientModule,
    // TranslateModule
  ],
  declarations: [IndexComponent]
})
export class IndexModule { }
