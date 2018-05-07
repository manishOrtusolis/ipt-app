import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AccordionModule } from 'ngx-bootstrap';
import { PopoverModule } from 'ngx-bootstrap/popover';

import { RdHomeRoutingModule } from './rd-home-routing.module';
import { RdHomeComponent } from './rd-home/rd-home.component';

@NgModule({
  imports: [
    CommonModule,
    RdHomeRoutingModule,
    NgbModule.forRoot(),
    AccordionModule.forRoot(),
    PopoverModule.forRoot()
  ],
  declarations: [RdHomeComponent]
})
export class RdHomeModule { }
