import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lm-home',
  templateUrl: './lm-home.component.html',
  styleUrls: ['./lm-home.component.css']
})
export class LmHomeComponent implements OnInit {

  changeIconVar = false;
  changeIconVar1 = false;
  changeIconVar2 = false;
  changeIconVar3 = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  changeIcon(event){
       debugger;
  this.changeIconVar= event;

  }
  changeIcon1(event) {
this.changeIconVar1 = event;
}
changeIcon2(event) {
this.changeIconVar2 = event;
}
changeIcon3(event) {

this.changeIconVar3 = event;


}

goToDetails(){
  this.router.navigate(['letails']);

}


}
