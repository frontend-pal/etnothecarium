import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { UtilsService } from './utils/utils.service';

declare var $: any;

@Component({
  selector: 'app-root',
  template: `
    <div class="main-container" (window:scroll)="doSomethingOnWindowScroll($event)">
      <nav-bar></nav-bar>
        <div class="nav-help"></div>
        <router-outlet></router-outlet>
        <app-loading *ngIf="loading"></app-loading>
        <footer></footer>
    </div>
  `
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

  @HostListener("window:scroll", ['$event'])
  doSomethingOnWindowScroll($event: any) {
    const scrollOffset = $event.srcElement.children[0].scrollTop;

    if (scrollOffset > 150) {
      const el = document.getElementsByClassName('ws-float-button')[0];

      if (el !== undefined) {
        el.classList.add('bounce-in-right');
      }
    }
  }

  createListeners() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true;
        const el = document.getElementsByClassName('ws-float-button')[0];

        if (el !== undefined) {
          if (el.classList.contains('bounce-in-right')) {
            el.classList.remove('bounce-in-right');
          }
        }
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
