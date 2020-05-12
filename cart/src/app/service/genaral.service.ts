import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenaralService {

  private itemCount = new BehaviorSubject(0);
  sharedItemCount = this.itemCount.asObservable();

  private cart = new BehaviorSubject([]);
  sharedCart = this.cart.asObservable();

  constructor() { }


  currentItemCount(item: number) {
    this.itemCount.next(item)
  }

  currentCart(data: any) {
    this.cart.next(data)
  }
}
