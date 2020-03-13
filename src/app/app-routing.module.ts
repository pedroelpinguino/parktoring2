
import {NgModule, Component } from '@angular/core'
import {Routes, RouterModule, ExtraOptions, PreloadAllModules} from '@angular/router'

const router: ExtraOptions = {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    useHash: true,
    preloadingStrategy: PreloadAllModules
  };


const routes : Routes = [
    {
        path: "",
        loadChildren: ()=> import("./general/general.module").then(m=>m.GeneralModule)
    },

];

@NgModule({
imports: [RouterModule.forRoot(routes, router)],
exports: [RouterModule]


})
export class AppRoutingModule{}