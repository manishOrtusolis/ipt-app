import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShikeishoDetailsRoutingModule } from './shikeisho-details-routing.module';
import { ShikeishoDetailsComponent } from './shikeisho-details/shikeisho-details.component';

@NgModule({
  imports: [
    CommonModule,
    ShikeishoDetailsRoutingModule
  ],
  declarations: [ShikeishoDetailsComponent]
})
export class ShikeishoDetailsModule { }
