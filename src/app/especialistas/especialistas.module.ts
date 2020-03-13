import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GeneralRoutingModule} from './especialistas.routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PacienteComponent} from './components/paciente/paciente.component'
import {MenuComponent} from './components/menu/menu.component'
import {PerfilComponent} from './components/perfil/perfil.component'

@NgModule({
  declarations: [PerfilComponent, MenuComponent, PacienteComponent],
  imports: [
    CommonModule,
    GeneralRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class EspecialistasModule { }
