import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LmHomeComponent } from './lm-home/lm-home.component';


const routes: Routes = [
  {
    path: '',
    component: LmHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LmHomeRoutingModule { }
