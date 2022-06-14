import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        opacity: 0,
        transform: 'translate3d(0, -100%, 0)'
      })),
      transition('in => out', animate('500ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class NavBarComponent {
  a: any;
  menuState: string = 'out';
  texto: string = '';
  selected: string = 'es';
  pdfData: string | undefined;

  constructor(
    public translate: TranslateService
  ) {
    const browserLang = translate.getBrowserLang();

    translate.addLangs(['en', 'es']);
    if (browserLang && browserLang !== undefined) {
      translate.use(browserLang.match(/en|es/) ? browserLang : 'es')
      translate.setDefaultLang('es');
    }

    translate.onLangChange.subscribe(() => {
      if (translate.currentLang == 'es') {
        this.texto = 'Español';
      }
      else {
        this.texto = 'English';
      }
    });

  }

  toggleMenu() {
    this.menuState = this.menuState == 'in' ? 'out' : 'in';
  }

  setClasses() {
    return {
      ham: true,
      open: this.menuState == 'in'
    }
  }

  test2(test: any) {
    console.log(test);
    // translate.use(langSelect.value)
  }

  // testPdf() {
  //   console.log("test");
  //   this.pdfData = "assets/pdf/pdf-test.pdf";
  // }
}
