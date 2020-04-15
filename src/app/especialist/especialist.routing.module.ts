import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacientsComponent } from './components/pacients/pacients.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
const routes: Routes =[
    {   
        path: '',
        component: DashboardComponent   
    },
    {
        path: 'pacientes',
        component: PacientsComponent
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class EspecialistRoutingModule {}
  