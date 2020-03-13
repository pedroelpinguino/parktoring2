import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PerfilComponent } from './perfil/perfil.component';




@NgModule({
  declarations: [MenuComponent, PerfilComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
