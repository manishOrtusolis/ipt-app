import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/login/login.module#LoginModule'
  },
  {
    path: 'signUp',
    loadChildren: 'app/sign-up/sign-up.module#SignUpModule'
  },
  {
    path: 'home',
    loadChildren: 'app/home/home.module#HomeModule'
  },
  {
    path: 'registeration',
    loadChildren: 'app/new-register/new-register.module#NewRegisterModule'
  },
  {
    path: 'details',
    loadChildren: 'app/shikeisho-details/shikeisho-details.module#ShikeishoDetailsModule'
  },
  {
    path: 'rdHome',
    loadChildren: 'app/rdTeam/rd-home/rd-home.module#RdHomeModule'
  },
  {
    path: 'rdDetails',
    loadChildren: 'app/rdTeam/rd-details/rd-details.module#RdDetailsModule'
  },
  {
    path: 'lmHome',
    loadChildren: 'app/lmTeam/lm-home/lm-home.module#LmHomeModule'
  },
  {
    path: 'lmDetails',
    loadChildren: 'app/lmTeam/lm-details/lm-details.module#LmDetailsModule'
  },
  {
    path: 'adminHome',
    loadChildren: 'app/admin/admin-home/admin-home.module#AdminHomeModule'
  },
  {
    path: 'addNewUser',
    loadChildren: 'app/admin/admin-add-user/admin-add-user.module#AdminAddUserModule'
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
