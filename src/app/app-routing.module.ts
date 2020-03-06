import {NgModule, Component } from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import {HomeComponent} from "./components/home/home.component"
import {LoginComponent} from "./components/login/login.component"
import {MenuComponent} from "./components/menu/menu.component"

const routes : Routes = [{

    path: "",
    component: HomeComponent
},
{ //objetos se abren con las llavesy despus del valor del objeto va una coma c:
    path: "login",
    component: LoginComponent

},
{
path: "menu",
component: MenuComponent

}


];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]


})
export class AppRoutingModule{}