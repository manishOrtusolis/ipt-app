import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Router, Data } from '@angular/router';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';


@Injectable()

export class MyIptService {
  myReterivedJson = [];


  constructor(private http: Http,
    private myHttp: HttpClient) { }


  login(myData) {

    const headers = new Headers({ 'Content-Type': 'application/json'});
    // const headers = new Headers();
    // headers.append('Content-Type': 'application/json');
    let options = new RequestOptions({ headers: headers });
     const loginURL = 'http://489d24f7.ngrok.io/api/auth';

      debugger;
     //  const stringBody = JSON.stringify(body);
      return this.http.post(loginURL, myData, options).map((myData) => (myData.json())).catch((error: any) => {
       // todo: log?
       debugger;
       if (error.status === 200) {
          // this.alertService.showError(error.statusText);
          console.log(error.statusText);
       } else if (error.status === 0) {
          // this.alertService.showAlert(error.statusText);
              console.log(error);
           //  this.toastr.error("Internet disconnected")
        
       
       } else if(error.status === 404) {
       //  alert("Wrong EmailId or Password");
       //  this.toastr.error("Wrong EmailId or Password")
      
       }
       return Observable.throw(error.statusText);
       });
  }

  testGet(){
    const url = 'https://a01861d3.ngrok.io/api/';
    debugger;
    return this.myHttp.get(url);
  }

   testLogin(myData: any): Observable<any> {

    debugger;




    // const headers = new HttpHeaders();
    // headers.append( 'Content-Type':  'application/json');
    
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //    }),
    //    observe: 'response'
    // };

    // const headers = new HttpHeaders();
    // headers.append( 'Content-Type':  'application/json');
    // const httpOptions = new HttpO
    // const mybodyData = JSON.stringify(myData);
    // const loginURL = 'http://52.70.202.145:8080/api/auth';
    const loginURL = 'http://b32e56f2.ngrok.io/api/auth';
    //  const myToatalData = this.myHttp.post(loginURL, myData);
    // const xmhr = new XMLHttpRequest();
    // xmhr.onreadystatechange = function() {
    //     if (xmhr.readyState === 4) {

    //       const headers = xmhr.getResponseHeader('Authorization ');
    //        alert(headers);
    //         const data = xmhr.responseText;
    //         alert('Response Data ' + data);
    //     }
    // }
    // xmhr.open('POST', loginURL, true);
    // xmhr.send(myData);
     
    console.log(this.myHttp.post(loginURL, myData, { observe: 'response' }));
    return this.myHttp.post<any>(loginURL, myData, { observe: 'response' });
       
    // console.log(this.http.post(loginURL, myData));
    // return this.http.post(loginURL, myData);

  }

  // private handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
    
  //     console.error('An error occurred:', error.error.message);
  //   } else {
      
  //     console.error(
  //       `Backend returned code ${error.status}, ` +
  //       `body was: ${error.error}`);
  //   }
    
  //   return new ErrorObservable(
  //     'Something bad happened; please try again later.');
  // };


}
