
import {NgModule, Component } from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import {LandingComponent } from './components/landing/landing.component'
import {LoginComponent} from './components/login/login.component'
import {MenuComponent } from '../especialistas/components/menu/menu.component'
import {PacienteComponent} from '../especialistas/components/paciente/paciente.component'
import {PerfilComponent} from '../especialistas/components/perfil/perfil.component'

const routes : Routes = [
    {
        path: "", 
        component: LandingComponent
        
    }, 
    {
        path: 'login',
        component: LoginComponent,

    },
    {
        path: 'menu',
        component: MenuComponent,
    }, 
    {
        path: 'perfil',
        component: PerfilComponent,
    },
    {
        path: 'paciente',
        component: PerfilComponent,
    }
]


@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]


})
export class GeneralRoutingModule{}