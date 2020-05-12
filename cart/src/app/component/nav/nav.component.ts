import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { from } from 'rxjs';
import { GenaralService } from "../../service/genaral.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public itemCount: number;

  constructor(
    private service: GenaralService
  ) { }

  ngOnInit() {

    this.service.sharedItemCount.subscribe(itemCount => this.itemCount = itemCount);
  }

}
