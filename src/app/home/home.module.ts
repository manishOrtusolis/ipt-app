import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AccordionModule } from 'ngx-bootstrap';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { PopoverModule } from 'ngx-bootstrap/popover';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule.forRoot(),
    AccordionModule.forRoot(),
    PopoverModule.forRoot()
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
