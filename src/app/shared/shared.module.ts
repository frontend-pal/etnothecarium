import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// Factory function required during AOT compilation
export function httpTranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [],
  exports: [
    HttpClientModule,
    TranslateModule
  ]
})
export class SharedModule {
  constructor(private translate: TranslateService) {
    const browserLang = translate.getBrowserLang();

    translate.addLangs(["en", "es"]);
    translate.setDefaultLang('en');
    if (browserLang && browserLang.match(/en|es/) !== undefined) {
      translate.use(browserLang.match(/en|es/) ? browserLang : 'es');
    }
  }
}
