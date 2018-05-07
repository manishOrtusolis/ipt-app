import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LmDetailsComponent } from './lm-details/lm-details.component';


const routes: Routes = [
  {
    path: '',
    component: LmDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LmDetailsRoutingModule { }
