import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AccordionModule } from 'ngx-bootstrap';
import { PopoverModule } from 'ngx-bootstrap/popover';

import { AdminHomeRoutingModule } from './admin-home-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';

@NgModule({
  imports: [
    CommonModule,
    AdminHomeRoutingModule,
    NgbModule.forRoot(),
    AccordionModule.forRoot(),
    PopoverModule.forRoot()
  ],
  declarations: [AdminHomeComponent]
})
export class AdminHomeModule { }
