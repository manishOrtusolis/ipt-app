import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AccordionModule } from 'ngx-bootstrap';
import { PopoverModule } from 'ngx-bootstrap/popover';

import { AdminAddUserRoutingModule } from './admin-add-user-routing.module';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';

@NgModule({
  imports: [
    CommonModule,
    AdminAddUserRoutingModule,
    NgbModule.forRoot(),
    AccordionModule.forRoot(),
    PopoverModule.forRoot()
  ],
  declarations: [AddNewUserComponent]
})
export class AdminAddUserModule { }
