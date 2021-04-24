import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";


const routes: Routes = [
  {
    path: '', children: [
      {path: '', redirectTo: 'sign-in'},
      {path: 'sign-in', component: LoginPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
