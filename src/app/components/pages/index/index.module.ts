import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from "./index.component";
import { RouterModule, Routes } from "@angular/router/";
import { SharedLazyModule } from '../../../shared/shared-lazy.module';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  { path: '', component: IndexComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLazyModule,
    // TranslateModule.forChild({})
    // SharedModule,
    // HttpClientModule,
    // TranslateModule
  ],
  declarations: [IndexComponent]
})
export class IndexModule { }
