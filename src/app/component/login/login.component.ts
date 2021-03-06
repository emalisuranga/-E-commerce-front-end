import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { GenaralService } from "../../service/genaral.service";
import swal from "sweetalert2";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private globalService: GenaralService, private router: Router) {
    this.loginForm = this.loginFormGroup();
  }

  ngOnInit() { }

  loginFormGroup() {
    return new FormGroup({
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
    });
  }

  public onSubmit() {
    console.log(this.loginForm);
    let data = {
      email: this.loginForm.get("email").value,
      password: this.loginForm.get("password").value,
    };

    console.log(data);

    this.globalService.login(data).subscribe((serverResp) => {
      console.log(serverResp);
      if (serverResp["status"] == "true") {
        console.log(serverResp["status"]);
        this.globalService.currentIsLogin(true);

        // this.globalService.currentUserData(data)
        this.router.navigate([""]);

        console.log("Success!!!");
      } else {
        swal.fire(
          "Login Error!",
          "Please check user name and password!",
          "error"
        );
        this.router.navigate([""]);
      }
    });
  }
}
