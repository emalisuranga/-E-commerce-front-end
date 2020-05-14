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

  constructor(
    private service: GenaralService,
    private router: Router
  ) { }

  ngOnInit() {
    this.service.sharedItemCount.subscribe(itemCount => this.itemCount = itemCount);
  }

  logOut() {
    this.service.currentIsLogin(false);
    this.router.navigate(['']);
  }

}
