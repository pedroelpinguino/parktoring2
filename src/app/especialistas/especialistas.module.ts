import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EspecialistasRoutingModule } from "./especialistas.routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PacienteComponent } from "./components/paciente/paciente.component";
import { MenuComponent } from "./components/menu/menu.component";
import { PerfilComponent } from "./components/perfil/perfil.component";

@NgModule({
  declarations: [PerfilComponent, MenuComponent, PacienteComponent],
  imports: [
    CommonModule,
    EspecialistasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class EspecialistasModule {}
