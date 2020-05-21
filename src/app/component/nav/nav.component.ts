import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { from } from 'rxjs';
import { GenaralService } from "../../service/genaral.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public itemCount: number;
  public isLogin: boolean;

  constructor(
    private service: GenaralService,
    private router: Router
  ) { }

  ngOnInit() {
    this.service.sharedItemCount.subscribe(itemCount => this.itemCount = itemCount);
    this.service.sharedIsLogin.subscribe(isLogin => this.isLogin = isLogin);
  }

  logOut() {
    this.service.currentIsLogin(false);
    this.router.navigate(['']);
  }

  onLogin() {
    this.service.currentIsLogin(true);
    this.router.navigate(["/login"]);
  }

}
