import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RdDetailsRoutingModule } from './rd-details-routing.module';
import { RdDetailsComponent } from './rd-details/rd-details.component';

@NgModule({
  imports: [
    CommonModule,
    RdDetailsRoutingModule
  ],
  declarations: [RdDetailsComponent]
})
export class RdDetailsModule { }
