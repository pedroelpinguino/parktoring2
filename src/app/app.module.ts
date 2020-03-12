import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import { MenuComponent } from './components/menu/menu.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { NavbarComponent } from './components/navbar/navbar.component'
//firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule  } from "@angular/fire/auth";
import {AngularFirestoreModule } from "@angular/fire/firestore";
import 'firebase/firestore';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    PacienteComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
