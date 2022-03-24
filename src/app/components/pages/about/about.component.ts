import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { TweenMax, TimelineMax } from "gsap";

declare var ScrollMagic: any;
declare var $: any;

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {
    constructor(
        public translate: TranslateService,
        private route: ActivatedRoute,
    ) {
    }

    ngOnInit() {
    }

    controller = new ScrollMagic.Controller();

    arrowClick() {
        $('html, body').animate({ scrollTop: $(window).height() }, 600);
    }

    ngAfterViewInit() {
        new ScrollMagic.Scene({
            triggerElement: '#section-1-ab'
        })
            .setClassToggle('#section-1-1', 'entrar').addTo(this.controller);

        new ScrollMagic.Scene({
            triggerElement: '#section-1-ab'
        })
            .setClassToggle('#section-1-2', 'entrar').addTo(this.controller);

        new ScrollMagic.Scene({
            triggerElement: '#section-2-ab'
        })
            .setClassToggle('#section-2-1', 'entrar').addTo(this.controller);

        new ScrollMagic.Scene({
            triggerElement: '#section-3-ab'
        })
            .setClassToggle('#section-3-1', 'entrar').addTo(this.controller);

        new ScrollMagic.Scene({
            triggerElement: '#section-3-ab'
        })
            .setClassToggle('#section-3-2', 'entrar').addTo(this.controller);

        new ScrollMagic.Scene({
            triggerElement: '#section-team-ab'
        })
            .setClassToggle('.photo-block', 'entrar').addTo(this.controller);

    }


}
