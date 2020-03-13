import {NgModule, Component } from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import {MenuComponent} from './components/menu/menu.component'
import {PacienteComponent} from './components/paciente/paciente.component'
import {PerfilComponent} from './components/perfil/perfil.component'



const routes : Routes = [
    {
        path: "menu", 
        component: MenuComponent,
        
    }, 
    {
        path: 'perfil',
        component: PerfilComponent,

    },
    {
        path: 'paciente',
        component: PacienteComponent,

    }
]


@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]


})
export class GeneralRoutingModule{}