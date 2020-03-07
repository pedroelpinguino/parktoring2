import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LandingComponent}from './components/landing/landing.component';
import {GeneralRoutingModule} from "./general.routing.module";

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule, GeneralRoutingModule
  ]
})
export class GeneralModule { }
