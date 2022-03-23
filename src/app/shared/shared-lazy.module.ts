import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        HttpClientModule,
        CommonModule,
        TranslateModule.forChild({}),
    ],
    exports: [
        CommonModule,
        TranslateModule
    ]
})
export class SharedLazyModule { }