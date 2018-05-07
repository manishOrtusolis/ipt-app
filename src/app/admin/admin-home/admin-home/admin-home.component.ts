import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  changeIconVar:boolean = false;
  changeIconVar1:boolean = false;
  changeIconVar2:boolean = false;
  changeIconVar3:boolean = false;
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

addNewUser() {
  this.router.navigate(['addNewUser']);

}

goToDetails() {

}


}
