import {NgModule} from '@angular/core';
import {MainRoutingModule} from './main-routing.module';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [

  HomePageComponent],
  imports: [
    MainRoutingModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ]
})

export class MainModule {

}
