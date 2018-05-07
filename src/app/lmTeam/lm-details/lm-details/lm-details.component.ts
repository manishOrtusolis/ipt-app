import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lm-details',
  templateUrl: './lm-details.component.html',
  styleUrls: ['./lm-details.component.css']
})
export class LmDetailsComponent implements OnInit {
  bomChanges = false;
   dateChanges = '2014-02-04';
  constructor() { }

  ngOnInit() {
  }

}
