import {
  NgModule, NO_ERRORS_SCHEMA
} from '@angular/core';
import { ModalFileViewerComponent } from './modal-file-viewer.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { CommonModule } from '@angular/common';

const imports = [
  PdfViewerModule,
  RouterModule,
  TranslateModule,
  CommonModule
];

@NgModule({
  declarations: [ModalFileViewerComponent],
  exports: [ModalFileViewerComponent],
  imports: imports,
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})

export class ModalFileViewerModule {}
