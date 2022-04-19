import {
  Component, EventEmitter, Input, OnChanges, OnInit, Output
} from '@angular/core';
import {
  DomSanitizer, SafeStyle
} from '@angular/platform-browser';

@Component({
  selector: 'app-modal-file-viewer',
  templateUrl: './modal-file-viewer.component.html'
})
export class ModalFileViewerComponent implements OnInit, OnChanges {
  @Input() pdfData: string | undefined;
  @Output() close = new EventEmitter();
  @Output() download = new EventEmitter();

  currentRotation = 0;
  currentWidth = 70;
  currentSize = 1;
  // fileType: string;
  show = false;
  page = 1;
  totalPages = 0;
  pdfSrc: any;
  imgSrc: any;

  constructor(
    private domSanitizer: DomSanitizer
  ) {

    // (window as any).PDFJS.workerSrc = '/assets/fiducia/js/pdf.worker.js';

    // pdfjsLib.PDFJS.workerSrc  = '/assets/fiducia/js/pdf.worker.js';
  }

  ngOnInit() {
    this.pdfData = undefined;
  }

  ngOnChanges() {
    if (this.pdfData === null) {
      this.show = false;
    } else {
      // this.createPdf(this.pdfData);

      window.scrollTo({
        behavior: 'smooth',
        left: 0,
        top: 0
      });
      this.show = true;
    }
  }

  get myTransform(): SafeStyle {
    return this.domSanitizer.bypassSecurityTrustStyle('rotate(' + this.currentRotation + 'deg)');
  }

  sanitize(url: string) {
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }

  // createPdf(fileData: FileData) {
  //   this.pdfSrc = this.documentsService.base64ToArrayBuffer(fileData.data);
  // }

  clearViewer() {
    this.show = false;
    this.pdfSrc = null;
    this.page = 1;
    this.totalPages = 1;
    this.currentRotation = 0;
    this.currentWidth = 70;
    this.currentSize = 1;
    this.imgSrc = null;
    this.close.emit(true);
  }

  // downloadFile() {
  //   this.documentsService.downloadFile(this.pdfData.data, this.pdfData.type, this.pdfData.name);
  // }

  afterLoadComplete(pdf: any) {
    this.totalPages = pdf.numPages;
  }

  increasePage() {
    if (this.page < this.totalPages) {
      this.page = this.page + 1;
    }
  }

  decreasePage() {
    if (this.page > 1) {
      this.page = this.page - 1;
    }
  }
}
