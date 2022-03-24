import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { TranslateService } from '@ngx-translate/core';

import { HttpClient } from '@angular/common/http';

declare var $: any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  lat: number = 4.410910;
  lng: number = -75.257478;
  linkea: string = "https://docs.google.com/forms/d/e/1FAIpQLSeqwmtc_gEBis8o1n2ErkcDdUyJloi7AZ9N4SGEtmJy7cwt7g/viewform";

  form!: FormGroup;

  preguntaDefault = "Como podemos ayudarlo?";
  preguntaDefaulEn = "How can we help?";
  // preguntaDefault = { es: "Como podemos ayudarlo?", en: "How can we help?" };

  preguntas = [
    // { es: this.preguntaDefault, en: this.preguntaDefaulEn },
    { es: 'Pregunta sobre los productos', en: 'Question about the products' },
    { es: 'Pregunta general', en: 'General question' },
    { es: 'Página web', en: 'Web page' },
    { es: 'Legal', en: 'Legal' },
    { es: 'Oportunidades de alianzas', en: 'Opportunity for partnerships' },
    { es: 'Otros', en: 'Others' }
  ]
  genderList = [
    { es: 'hombre', en: 'male' },
    { es: 'mujer', en: 'female' }
  ];
  preguntaSeleccionada = this.preguntaDefault && this.preguntaDefaulEn;

  constructor(private fr: FormBuilder, private http: HttpClient, private translate: TranslateService) {
    this.buildForm();
    translate.onLangChange.subscribe(() => {
      // console.log(translate.currentLang);
      if (translate.currentLang == 'es') {
        this.linkea = 'https://docs.google.com/forms/d/e/1FAIpQLSeqwmtc_gEBis8o1n2ErkcDdUyJloi7AZ9N4SGEtmJy7cwt7g/viewform';
      }
      else {
        this.linkea = 'https://docs.google.com/forms/d/e/1FAIpQLSc_-fcPt8MoNAZjAmtcHM6lS8671sMYXjc7F08lIdHT2awzFA/viewform';
      }
    });
  }

  ngOnInit() {
    $(".agm-map-container-inner").css("filter", "grayscale(100%)");
  }

  buildForm() {
    this.form = this.fr.group({
      nombre: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')
      ])],
      telefono: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^(.|\s){1,10}$')])],
      pregunta: [this.darPreguntaSeleccionada(), Validators.required],
      mensaje: ['', Validators.required]
    });
  }

  seleccionarPregunta(pregunta: any) {
    this.preguntaSeleccionada = pregunta;
    this.form.controls['pregunta'].setValue(this.darPreguntaSeleccionada());
  }

  darPreguntaSeleccionada(): string {
    return this.preguntaSeleccionada != this.preguntaDefault ? this.preguntaSeleccionada : '';
  }

  send(data: string) {
    // let url = location.hostname + '/_ah/api/etnothecarium/v1/contactar';
    let url = 'http://www.etnothecarium.com/php/form.php';
    this.http.post(url, data).subscribe(res => console.log(res),
      err => console.log(err),
    );
  }


  save() {
    console.log("Valores aqui ", JSON.stringify(this.form.value));
    this.send(JSON.stringify(this.form.value));

    // f.reset();
  }


  handleError(error: any) {
    // console.log("ocurrio un error: ", error);
    return Promise.reject(error) || error;
  }


}
