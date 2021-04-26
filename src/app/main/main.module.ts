import {NgModule} from '@angular/core';
import {MainRoutingModule} from './main-routing.module';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {HomePageComponent} from './home-page/home-page.component';
import {SharedModule} from "../shared/shared.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
  HomePageComponent,
  ToolbarComponent
  ],
  imports: [
    MainRoutingModule,
    CommonModule,
    SharedModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule

  ]
})

export class MainModule {

}
