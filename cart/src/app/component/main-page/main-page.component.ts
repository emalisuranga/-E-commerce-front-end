import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { GenaralService } from "../../service/genaral.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  items: any = [];
  cartItem: any = [];
  clickBtn: any = [];


  constructor(
    private service: GenaralService
  ) { }

  ngOnInit() {
    this.items = [
      {
        image: '../../../assets/images/pexels-photo-1721934.jpeg',
        name: 'Just For You Mom Ribbon',
        price: 100,
        isAdding: false
      },
      {
        image: '../../../assets/images/pexels-photo-1721934.jpeg',
        name: 'Just For',
        price: 150,
        isAdding: false
      },
      {
        image: '../../../assets/images/pexels-photo-1721934.jpeg',
        name: 'Mom Ribbon Cake',
        price: 200,
        isAdding: false
      },
      {
        image: '../../../assets/images/pexels-photo-1721934.jpeg',
        name: 'You Mom ',
        price: 180,
        isAdding: false
      },
      {
        image: '../../../assets/images/pexels-photo-1721934.jpeg',
        name: 'Just For You Mom Ribbon Cake',
        price: 220,
        isAdding: false
      },
      {
        image: '../../../assets/images/pexels-photo-1721934.jpeg',
        name: 'Just For You Mom Ribbon Cake',
        price: 300,
        isAdding: false
      }
    ]
  }

  addCart(item, i) {
    this.cartItem.push(item);
    this.clickBtn.push(i)
    this.service.currentItemCount(this.cartItem.length);
    this.service.currentCart(this.cartItem);
  }

}
