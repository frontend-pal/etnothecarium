import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResearchComponent } from "./research.component";
import { RouterModule, Routes } from "@angular/router/";
import { SharedLazyModule } from 'app/shared/shared-lazy.module';

const routes: Routes = [
  { path: '', component: ResearchComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLazyModule
  ],
  declarations: [ResearchComponent]
})
export class ResearchModule { }
