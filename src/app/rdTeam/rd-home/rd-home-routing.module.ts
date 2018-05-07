import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RdHomeComponent } from './rd-home/rd-home.component';


const routes: Routes = [
  {
    path: '',
    component: RdHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RdHomeRoutingModule { }
