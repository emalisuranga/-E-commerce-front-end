import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { GenaralService } from "../service/genaral.service";
import { Router } from "@angular/router";
import swal from "sweetalert2";
// import { environment } from './../../environments/environment';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  contactForm: FormGroup;
  category: any[] = [];
  qualifications: any[] = [];
  selectQualifications: any[] = [];
  qualificationsId: number;

  constructor(private globalService: GenaralService, private router: Router) {
    this.contactForm = this.createFormGroup();
  }

  ngOnInit() {
    // if (environment.isLogin && environment.isLoginRole == 'ADMIN') {
    // } else {
    //   this.router.navigate(['/']);
    // }
  }

  createFormGroup() {
    return new FormGroup({
      name: new FormControl("", Validators.required),
      address: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      tel: new FormControl("", [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
    });
  }

  public onSubmit() {
    let data = this.contactForm.value;
    this.globalService.custermerRegister(data).subscribe((res) => {
      if (res) {
        swal.fire("Customer is register!", "success").then((result) => {
          if (result.value) {
            this.contactForm.reset();
            this.router.navigate([""]);
          }
        });
      } else {
        swal.fire("Register Error!", "This email already exists", "error");
      }
    });
  }
}
