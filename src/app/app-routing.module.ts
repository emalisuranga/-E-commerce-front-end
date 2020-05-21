import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./component/login/login.component";
import { MainPageComponent } from "./component/main-page/main-page.component";
import { ShippingComponent } from "./shipping/shipping.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { RegisterComponent } from "./register/register.component";
import { ThanakPageComponent } from "./thanak-page/thanak-page.component";
import { from } from "rxjs";

const routes: Routes = [
  { path: "", component: MainPageComponent },
  { path: "login", component: LoginComponent },
  { path: "shopping-cart", component: ShoppingCartComponent },
  { path: "register", component: RegisterComponent },
  { path: "shipping", component: ShippingComponent },
  { path: "thank-page", component: ThanakPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
