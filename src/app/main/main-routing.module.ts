import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from "./shared-pages/home-page/home-page.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {PostDetailsPageComponent} from "./shared-pages/post-details-page/post-details-page.component";

const routes: Routes = [
  {
    path: '', component: MainPageComponent, children: [
      {path: '', redirectTo: '/main/home', pathMatch: 'full'},
      {path: 'home', component: HomePageComponent},
      {path: 'post-details/:id', component: PostDetailsPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainRoutingModule {
}

