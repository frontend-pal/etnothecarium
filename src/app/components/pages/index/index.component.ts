import {Component, OnInit, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {TweenMax} from 'gsap';
import {TimelineMax, Sine} from 'gsap/TweenMax';
import ScrollMagic from 'ScrollMagic';
import 'animation.gsap'
import 'debug.addIndicators'


declare var jQuery: any;
declare var $: any;
declare var ease, TimelineMax, TweenMax, Power4, Power1, Power2, Power3, Bounce, Elastic, Linear: any;



@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit, AfterViewInit {
  m = false;
  constructor(
    private route: ActivatedRoute,
    private translate: TranslateService
  ){}


  @ViewChild('anis1') anis1: ElementRef;
  @ViewChild('anis2') anis2: ElementRef;
  @ViewChild('anis3') anis3: ElementRef;
  @ViewChild('cilantro') cilantro: ElementRef;
  @ViewChild('capapequenas') capapequenas: ElementRef;
  @ViewChild('capainferior3') capainferior3: ElementRef;
  @ViewChild('capainferior2') capainferior2: ElementRef;
  @ViewChild('capainferior1') capainferior1: ElementRef;
  @ViewChild('capamedia') capamedia: ElementRef;
  @ViewChild('capasuperior') capasuperior: ElementRef;
  ngOnInit() {
  }

  arrowClick() {
    $('html, body').animate({ scrollTop: ($(window).height() - 40) }, 600);
  }

  controller = new ScrollMagic.Controller();

  ngAfterViewInit() {
  // elementos
  var anis1 = this.anis1.nativeElement;
  var anis2 = this.anis2.nativeElement;
  var anis3 = this.anis3.nativeElement;
  var cilantro = this.cilantro.nativeElement;
  var capapequenas = this.capapequenas.nativeElement;
  var capainferior3 = this.capainferior3.nativeElement;
  var capainferior2 = this.capainferior2.nativeElement;
  var capainferior1 = this.capainferior1.nativeElement;
  var capamedia = this.capamedia.nativeElement;
  var capasuperior = this.capasuperior.nativeElement;

  var anisg1 = TweenMax.to((anis1), 5, {rotation: 90, transformOrigin: 'center'});
  var anisg2 = TweenMax.to((anis2), 5, {rotation: -45, transformOrigin: 'center'});
  var anisg3 = TweenMax.to((anis3), 5, {rotation: 120, transformOrigin: 'center'});
  var cilantrog4 = TweenMax.to((cilantro), 5, {rotation: -30, transformOrigin: 'center'});
  var capa1 = TweenMax.to((capapequenas), 5,  {transform: "translate3d(0,-10px,0)", yPercent: -7});
  var capa2 = TweenMax.to((capainferior3), 5,  {transform: "translate3d(0,-10px,0)", yPercent: -30});
  var capa3 = TweenMax.to((capainferior2), 5,  {transform: "translate3d(0,10px,0)", yPercent: 1.5});
  var capa4 = TweenMax.to((capainferior1), 5,  {transform: "translate3d(0,10px,0)", yPercent: 20});
  var capa5 = TweenMax.to((capamedia), 5,  {transform: "translate3d(0,10px,0)", yPercent: 10});
  var capa6 = TweenMax.to((capasuperior), 5,  {transform: "translate3d(0,10px,0)", yPercent: -15});


  var gira1 = new TimelineMax().add(anisg1);
  var gira2 = new TimelineMax().add(anisg2);
  var gira3 = new TimelineMax().add(anisg3);
  var gira4 = new TimelineMax().add(cilantrog4);
  var sube1 = new TimelineMax().add(capa1);
  var sube2 = new TimelineMax().add(capa2);
  var baja1 = new TimelineMax().add(capa3);
  var baja2 = new TimelineMax().add(capa4);
  var baja3 = new TimelineMax().add(capa5);
  var baja4 = new TimelineMax().add(capa6);


  // section1

    new ScrollMagic.Scene({
      triggerElement: '#section-1'
    })
      .setClassToggle('#bloque1', 'entrar').addTo(this.controller);

    new ScrollMagic.Scene({
      triggerElement: '#section-1',
      offset: 30
    })
      .setClassToggle('.calendula1', 'entrar').addTo(this.controller);

    new ScrollMagic.Scene({
      triggerElement: '#section-1',
      offset: 30
    })
      .setClassToggle('.cannabis1', 'entrar').addTo(this.controller);

    // section2

    new ScrollMagic.Scene({
      triggerElement: '#section-2',
      offset: -200
    })
      .setClassToggle('#bloque2', 'entrar').addTo(this.controller);

    new ScrollMagic.Scene({
      triggerElement: '#titleb2',
      reverse: false
    })
      .setClassToggle('.feature', 'entrar').addTo(this.controller);


    new ScrollMagic.Scene({
      triggerElement: '#section-3',
      offset: -200
    })
      .setClassToggle('#bloque3', 'entrar').addTo(this.controller);

    new ScrollMagic.Scene({
      triggerElement: '#titulo3',
      offset: -100
    })
      .setClassToggle('.product', 'entrar').addTo(this.controller);

    // section-4
    new ScrollMagic.Scene({
       triggerElement: '#section-4',
       offset: 50,
       duration: 1000,
       reverse: true,
       tweenChanges: true
      })
       .setTween(gira1)
       .removeIndicators()
       .addTo(this.controller)

      new ScrollMagic.Scene({
          triggerElement: '#section-4',
          offset: 50,
          duration: 1000,
          reverse: true,
          tweenChanges: true
      })
          .setTween(gira2)
          .removeIndicators()
          .addTo(this.controller)

      new ScrollMagic.Scene({
          triggerElement: '#section-4',
          duration: 1000,
          reverse: true,
          tweenChanges: true
      })
          .setTween(gira3)
          .removeIndicators()
          .addTo(this.controller)

      new ScrollMagic.Scene({
          triggerElement: '#section-4',
          duration: 1000,
          reverse: true,
          tweenChanges: true
      })
          .setTween(gira4)
          .removeIndicators()
          .addTo(this.controller)

      new ScrollMagic.Scene({
          triggerElement: '#section-4',
          duration: 1000,
          reverse: true,
          tweenChanges: true
      })
          .setTween(sube1)
          .removeIndicators()
          .addTo(this.controller)

      new ScrollMagic.Scene({
          triggerElement: '#section-4',
          duration: 1000,
          reverse: true,
          tweenChanges: true
      })
          .setTween(sube2)
          .removeIndicators()
          .addTo(this.controller)

      new ScrollMagic.Scene({
          triggerElement: '#section-4',
          offset: -200,
          duration: 1000,
          reverse: true,
          tweenChanges: true
      })
          .setTween(baja1)
          .removeIndicators()
          .addTo(this.controller)

      new ScrollMagic.Scene({
          triggerElement: '#triggerCapas',
          offset: -200,
          duration: 1000,
          reverse: true,
          tweenChanges: true
      })
          .setTween(baja2)
          .removeIndicators()
          .addTo(this.controller)

      new ScrollMagic.Scene({
          triggerElement: '#triggerCapas',
          offset: -200,
          duration: 1000,
          reverse: true,
          tweenChanges: true
      })
          .setTween(baja3)
          .removeIndicators()
          .addTo(this.controller)

      new ScrollMagic.Scene({
          triggerElement: '#triggerCapas',
          offset: -200,
          duration: 1000,
          reverse: true,
          tweenChanges: true
      })
          .setTween(baja4)
          .removeIndicators()
          .addTo(this.controller)

  }
}
