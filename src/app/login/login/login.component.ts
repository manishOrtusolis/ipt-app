import { Component, OnInit } from '@angular/core';
// import { Http, Headers, Response, RequestOptions } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
import { Router } from '@angular/router';
import { MyIptService } from '../../my-ipt.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';

  constructor(private myService: MyIptService  ) { }

  ngOnInit() {
    
    // this.myService.testGet().subscribe((myData) => {
    //   console.log(myData);
    // });
  }
  onSubmit() {
    const body = {
      userId: 'appface',
      password:  'appface',
      
     };
    // debugger;
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });

    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     'Authorization': ''
    //   })
    // };
    const  myForm = new FormData();
    myForm.append('username', 'lm');
    myForm.append('password', 'lm');
    myForm.append('role', 'user');

    

    this.myService.testLogin(myForm).subscribe((data) => {
      debugger;
      console.log(data);
      console.log(data.body);
      console.log('authorization: ', data.headers.get('authorization'));
      console.log('authorization: ', data.headers.get()['authorization']);
      console.log('authorization',data.headers.get());
      console.log(data.headers.get('Authorization'));
      // console.log(data.headers.get('authorization')); 
    });
   
  }
}












