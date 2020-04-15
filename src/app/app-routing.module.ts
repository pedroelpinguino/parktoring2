import { NgModule } from "@angular/core";
import {
  Routes,
  RouterModule,
  ExtraOptions,
  PreloadAllModules,
} from "@angular/router";
import { LandingComponent } from "./components/landing/landing.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
const router: ExtraOptions = {
  scrollPositionRestoration: "enabled",
  anchorScrolling: "enabled",
  useHash: false,
  preloadingStrategy: PreloadAllModules,
};

const routes: Routes = [
  {
    path: "",
    component: LandingComponent,
  },
  {
    path: "auth",
    children: [
      {
        path: "login",
        component: LoginComponent,
      },
      {
        path: "sign",
        component: SignupComponent,
      },
    ],
  },
  {
    path: "especialista",
    loadChildren: () =>
      import("./especialist/especialist.module").then(
        (m) => m.EspecialistModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, router)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
