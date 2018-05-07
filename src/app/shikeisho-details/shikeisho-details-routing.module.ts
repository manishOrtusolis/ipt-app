import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShikeishoDetailsComponent } from './shikeisho-details/shikeisho-details.component';

const routes: Routes = [
  {
    path: '',
    component: ShikeishoDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShikeishoDetailsRoutingModule { }
