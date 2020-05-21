import { Component, OnInit } from "@angular/core";
import { GenaralService } from "../service/genaral.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.css"],
})
export class ShoppingCartComponent implements OnInit {
  public cartList: any = [];
  totalPrice: number = 0;
  isLogin: boolean;

  constructor(private service: GenaralService, private router: Router) {}

  ngOnInit() {
    this.service.sharedIsLogin.subscribe((isLogin) => (this.isLogin = isLogin));
    if (this.isLogin) {
      this.service.sharedCart.subscribe(
        (cartList) => (this.cartList = cartList)
      );
      console.log(this.cartList);
      if (this.cartList.length == 0) {
        this.router.navigate(["home"]);
      }

      this.cartList.forEach((element) => {
        this.totalPrice += parseInt(element.price);
      });
    } else {
      this.router.navigate([""]);
    }
  }
}
