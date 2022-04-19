import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  selected: string = '';
  
  constructor(
    public nav: NavBarComponent,
    public translate: TranslateService
  ) { }
  ngOnInit() {
  }

  test(test: any){
    // console.log(test);
  }
}
