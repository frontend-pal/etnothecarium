import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { UtilsService } from './utils/utils.service';

declare var $: any;

@Component({
  selector: 'app-root',
  template: `
      <nav-bar></nav-bar>
      <div class="nav-help"></div>
      <router-outlet></router-outlet>
      <app-loading *ngIf="loading"></app-loading>
      <footer></footer>
  `,
  styles: [`
      
      footer {
          margin-top: -13rem;
      }

      .nav-help {
          display: none;
      }

      @media screen and (min-width: 768px) {
          .nav-help {
              display: block;
              margin-top: 1.6rem;
              width: 100%;
          }
      }

      @media screen and (min-width: 992px) {
          .nav-help {
              margin-top: 1.9rem;
              width: 100%;
          }
      }
  `]
})
export class AppComponent implements OnInit {
  loading: boolean = false;
  userLang = navigator.language;


  constructor(
    private router: Router,
    private utils: UtilsService
  ) { }

  ngOnInit(): void {
    this.createListeners();
  }

  createListeners() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      }
    });

    this.router.events.subscribe(event => {
      $('.modal-backdrop').remove();
      window.scrollTo(0, 0);
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.loading = false;
        }
          , 600);
      }
    });
  }
}
