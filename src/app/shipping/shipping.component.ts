import { Component, OnInit } from "@angular/core";
import { GenaralService } from "../service/genaral.service";
import { Router } from "@angular/router";
import { FormControl, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: "app-shipping",
  templateUrl: "./shipping.component.html",
  styleUrls: ["./shipping.component.css"],
})
export class ShippingComponent implements OnInit {
  itemCount: number;
  public cartList: any = [];
  totalPrice: number = 0;
  contactForm: FormGroup;

  constructor(private service: GenaralService, private router: Router) {
    this.contactForm = this.createFormGroup();
  }

  ngOnInit() {
    this.service.sharedItemCount.subscribe(
      (itemCount) => (this.itemCount = itemCount)
    );
    this.service.sharedCart.subscribe((cartList) => (this.cartList = cartList));

    if (this.cartList.length == 0) {
      this.router.navigate(["home"]);
    }

    this.cartList.forEach((element) => {
      this.totalPrice += parseInt(element.price);
    });
  }

  createFormGroup() {
    return new FormGroup({
      name: new FormControl("", Validators.required),
      address: new FormControl("", Validators.required),
      city: new FormControl("", Validators.required),
      tel: new FormControl("", [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
    });
  }

  onSubmit() {
    let data = this.contactForm.value;
    data["ttotalPrice"] = this.totalPrice;
    this.service.setOrderDetailes(data).subscribe((res) => {
      if (res) {
        this.router.navigate(["/thank-page"]);
      }
    });
  }
}
