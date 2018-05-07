import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AccordionModule } from 'ngx-bootstrap';
import { PopoverModule } from 'ngx-bootstrap/popover';

import { LmHomeRoutingModule } from './lm-home-routing.module';
import { LmHomeComponent } from './lm-home/lm-home.component';

@NgModule({
  imports: [
    CommonModule,
    LmHomeRoutingModule,
    NgbModule.forRoot(),
    AccordionModule.forRoot(),
    PopoverModule.forRoot()
  ],
  declarations: [LmHomeComponent]
})
export class LmHomeModule { }
