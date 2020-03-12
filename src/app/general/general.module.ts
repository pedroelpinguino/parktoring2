import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LandingComponent } from './components/landing/landing.component'
import { GeneralRoutingModule } from "./general.routing.module"
import { LoginComponent } from "./components/login/login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms"

@NgModule({
  declarations: [LandingComponent, LoginComponent],
  imports: [
    CommonModule,
    GeneralRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GeneralModule { }
