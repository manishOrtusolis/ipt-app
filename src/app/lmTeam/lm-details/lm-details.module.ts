import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LmDetailsRoutingModule } from './lm-details-routing.module';
import { LmDetailsComponent } from './lm-details/lm-details.component';

@NgModule({
  imports: [
    CommonModule,
    LmDetailsRoutingModule,
    FormsModule
  ],
  declarations: [LmDetailsComponent]
})
export class LmDetailsModule { }
