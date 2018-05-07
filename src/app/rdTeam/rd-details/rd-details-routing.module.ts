import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RdDetailsComponent } from './rd-details/rd-details.component';


const routes: Routes = [
  {
    path: '',
    component: RdDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RdDetailsRoutingModule { }
