import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-rd-home',
  templateUrl: './rd-home.component.html',
  styleUrls: ['./rd-home.component.css']
})
export class RdHomeComponent implements OnInit {

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

goToDetails(){
  this.router.navigate(['details']);

}


}
