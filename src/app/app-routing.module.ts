import { NgModule } from "@angular/core";
import {
  Routes,
  RouterModule,
  ExtraOptions,
  PreloadAllModules,
} from "@angular/router";
import { LandingComponent } from "./components/landing/landing.component";

const router: ExtraOptions = {
  scrollPositionRestoration: "enabled",
  anchorScrolling: "enabled",
  useHash: true,
  preloadingStrategy: PreloadAllModules,
};

const routes: Routes = [
  {
    path: "",
    component: LandingComponent,
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./auth/auth-routing.module").then((m) => m.AuthRoutingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, router)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
