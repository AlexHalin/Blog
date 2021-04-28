import {NgModule} from '@angular/core';
import {MainRoutingModule} from './main-routing.module';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {HomePageComponent} from './shared-pages/home-page/home-page.component';
import {SharedModule} from "../shared/shared.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import { ToolbarComponent } from './shared-pages/toolbar/toolbar.component';
import { PostDetailsPageComponent } from './shared-pages/post-details-page/post-details-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CardComponent } from './shared-pages/card/card.component';
import {MatCardModule} from "@angular/material/card";
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  declarations: [
  HomePageComponent,
  ToolbarComponent,
  PostDetailsPageComponent,
  MainPageComponent,
  CardComponent
  ],
  imports: [
    MainRoutingModule,
    CommonModule,
    SharedModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatPaginatorModule
  ]
})

export class MainModule {

}
