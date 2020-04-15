import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EspecialistRoutingModule } from "./especialist.routing.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
//components
import { PacientsComponent } from './components/pacients/pacients.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [PacientsComponent, DashboardComponent],
  imports: [
    CommonModule, EspecialistRoutingModule, FontAwesomeModule
  ]
})
export class EspecialistModule { }
