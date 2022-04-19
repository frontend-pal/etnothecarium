import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

declare var TweenMax: any;
declare var TimelineMax: any;
declare var Linear: any;
declare var ScrollMagic: any;
declare var $: any;

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, AfterViewInit {

    constructor(private translate: TranslateService) {
    }

    @ViewChild('rutasvg0') rutasvg0: ElementRef | any;
    @ViewChild('rutasvg1') rutasvg1: ElementRef | any;
    @ViewChild('rutasvg2') rutasvg2: ElementRef | any;
    @ViewChild('rutasvg3') rutasvg3: ElementRef | any;
    @ViewChild('sol1') sol1: ElementRef | any;
    @ViewChild('sol2') sol2: ElementRef | any;
    @ViewChild('sol3') sol3: ElementRef | any;
    @ViewChild('sol4') sol4: ElementRef | any;
    @ViewChild('albahaca') albahaca: ElementRef | any;
    @ViewChild('flor') flor: ElementRef | any;

    pathPrepare($el: any) {
        var lineLength = $el[0].getTotalLength();

        $el.css('stroke-dasharray', lineLength);
        $el.css('stroke-dashoffset', lineLength);
    }

    ngOnInit() {
        // prepare SVG

    }

    arrowClick() {
        $('html, body').animate({ scrollTop: $(window).height() }, 600);
    }

    controller = new ScrollMagic.Controller();


    ngAfterViewInit() {
        this.pathPrepare($('path#rutasvg0'));
        this.pathPrepare($('path#rutasvg1'));
        this.pathPrepare($('path#rutasvg2'));
        this.pathPrepare($('path#rutasvg3'));
        this.pathPrepare($('path#sol1'));
        this.pathPrepare($('path#sol2'));
        this.pathPrepare($('path#sol3'));
        this.pathPrepare($('path#sol4'));

        var duracion1 = $('.zone1').height();
        var duracion0 = $('.zone0').height(); // nueva
        var ruta0 = this.rutasvg0.nativeElement; // nueva
        var ruta1 = this.rutasvg1.nativeElement;
        var ruta2 = this.rutasvg2.nativeElement;
        var ruta3 = this.rutasvg3.nativeElement;
        var sole1 = this.sol1.nativeElement;
        var sole2 = this.sol2.nativeElement;
        var sole3 = this.sol3.nativeElement;
        var sole4 = this.sol4.nativeElement;
        var albah = this.albahaca.nativeElement;
        var flor = this.flor.nativeElement;
        var guia0 = TweenMax.to((ruta0), 0.9, { strokeDashoffset: 0, ease: Linear.easeNone });
        var guia1 = TweenMax.to((ruta1), 0.9, { strokeDashoffset: 0, ease: Linear.easeNone });
        var guia2 = TweenMax.to((ruta2), 0.9, { strokeDashoffset: 0, ease: Linear.easeNone });
        var guia3 = TweenMax.to((ruta3), 0.8, { strokeDashoffset: 0, ease: Linear.easeNone });
        var guia4 = TweenMax.to((sole1), 0.27, { strokeDashoffset: 0, ease: Linear.easeNone });
        var guia5 = TweenMax.to((sole2), 0.27, { strokeDashoffset: 0, ease: Linear.easeNone });
        var guia6 = TweenMax.to((sole3), 0.27, { strokeDashoffset: 0, ease: Linear.easeNone });
        var guia7 = TweenMax.to((sole4), 0.27, { strokeDashoffset: 0, ease: Linear.easeNone });
        var guia8 = TweenMax.to((albah), 4, { rotation: 45, transformOrigin: 'center' });
        var guia9 = TweenMax.to((flor), 4, { rotation: 45, transformOrigin: 'center' });
        var route_0 = new TimelineMax().add(guia0);
        var route_1 = new TimelineMax().add(guia1);
        var route_2 = new TimelineMax().add(guia2);
        var route_3 = new TimelineMax().add(guia3);
        var sole1 = new TimelineMax().add(guia4);
        var sole2 = new TimelineMax().add(guia5);
        var sole3 = new TimelineMax().add(guia6);
        var sole4 = new TimelineMax().add(guia7);
        var gira8 = new TimelineMax().add(guia8);
        var gira9 = new TimelineMax().add(guia9);

        new ScrollMagic.Scene({
            addIndicators: true,
            triggerElement: '#trigger-ruta-0',
            duration: duracion0,
            tweenChanges: true
        })
            .setTween(route_0)
            .addTo(this.controller)

        new ScrollMagic.Scene({
            addIndicators: true,
            triggerElement: '#trigger-ruta-1',
            duration: duracion1,
            tweenChanges: true
        })
            .setTween(route_1)
            .removeIndicators()
            .addTo(this.controller)

        new ScrollMagic.Scene({
            addIndicators: true,
            triggerElement: '#trigger-ruta-2',
            duration: 1700,
            offset: -100,
            tweenChanges: true
        })
            .setTween(route_2)
            .removeIndicators()
            .addTo(this.controller)

        new ScrollMagic.Scene({
            addIndicators: true,
            triggerElement: '#trigger-ruta-3',
            duration: 1700,
            offset: -40,
            tweenChanges: true
        })
            .setTween(route_3)
            .removeIndicators()
            .addTo(this.controller)

        new ScrollMagic.Scene({
            addIndicators: true,
            triggerElement: '#trigger-4',
            duration: 1000,
            offset: -500,
            tweenChanges: true
        })
            .setTween(sole1)
            .removeIndicators()
            .addTo(this.controller)

        new ScrollMagic.Scene({
            addIndicators: true,
            triggerElement: '#trigger-4',
            duration: 20,
            offset: -50,
            tweenChanges: true
        })
            .setTween(sole2)
            .removeIndicators()
            .addTo(this.controller)

        new ScrollMagic.Scene({
            addIndicators: true,
            triggerElement: '#trigger-4',
            duration: 20,
            offset: -50,
            tweenChanges: true
        })
            .setTween(sole3)
            .removeIndicators()
            .addTo(this.controller)

        new ScrollMagic.Scene({
            addIndicators: true,
            triggerElement: '#trigger-4',
            duration: 20,
            offset: 120,
            tweenChanges: true
        })
            .setTween(sole4)
            .removeIndicators()
            .addTo(this.controller)

        new ScrollMagic.Scene({
            addIndicators: true,
            triggerElement: '#trigger-gira',
            duration: 800,
            offset: 100,
            tweenChanges: true
        })
            .setTween(gira8)
            .removeIndicators()
            .addTo(this.controller)

        new ScrollMagic.Scene({
            addIndicators: true,
            triggerElement: '#trigger-flor',
            duration: 800,
            offset: 100,
            tweenChanges: true
        })
            .setTween(gira9)
            .removeIndicators()
            .addTo(this.controller)

        // new ScrollMagic.Scene().removeIndicators();

    }

}
