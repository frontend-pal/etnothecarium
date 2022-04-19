import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { ModalFileViewerModule } from '../utils/modal-file-viewer/modal-file-viewer.module';

@NgModule({
    imports: [
        HttpClientModule,
        CommonModule,
        ModalFileViewerModule,
        TranslateModule.forChild()
    ],
    exports: [
        CommonModule,
        TranslateModule,
        ModalFileViewerModule
    ]
})
export class SharedLazyModule { }