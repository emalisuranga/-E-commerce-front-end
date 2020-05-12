import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private router: Router
  ) {
    this.loginForm = this.loginFormGroup();
  }

  ngOnInit() {
  }

  loginFormGroup() {
    return new FormGroup({
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
  }

  public onSubmit() {
    console.log(this.loginForm)
    let data = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    }

    console.log(data)

    // this.globalService.login(data).subscribe(serverResp => {
    //   if (serverResp['status']) {
    //     console.log(serverResp['status'])
    //     this.router.navigate(['/profile']);
    //   } else {
    //     swal.fire(
    //       'Login Error!',
    //       'Please check user name and password!',
    //       'error'
    //     )
    //     this.router.navigate(['']);
    //   }
    // });
  }

}

