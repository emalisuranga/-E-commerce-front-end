import { Component, OnInit } from '@angular/core';
import { GenaralService } from './service/genaral.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cart';
  isLogin: boolean;

  constructor(
    private globalService: GenaralService,
  ) {
  }

  ngOnInit() {
    this.globalService.sharedIsLogin.subscribe(isLogin => this.isLogin = isLogin);
  }
}
