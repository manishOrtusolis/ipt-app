import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRegisterRoutingModule } from './new-register-routing.module';
import { NewRegisterComponent } from './new-register/new-register.component';

@NgModule({
  imports: [
    CommonModule,
    NewRegisterRoutingModule
  ],
  declarations: [NewRegisterComponent]
})
export class NewRegisterModule { }
