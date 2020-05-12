import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GenaralService {

  private itemCount = new BehaviorSubject(0);
  sharedItemCount = this.itemCount.asObservable();

  private cart = new BehaviorSubject([]);
  sharedCart = this.cart.asObservable();

  constructor(
    private http: HttpClient
  ) { }


  currentItemCount(item: number) {
    this.itemCount.next(item)
  }

  currentCart(data: any) {
    this.cart.next(data)
  }

  custermerRegister(data) {
    let url = "http://127.0.0.1:8000/api/register";
    return this.http.post(url, data).pipe(tap(resp => {

      if (resp['success']) {
      }

    }), catchError((error) => {
      return error.statusText;
    }));
  }
}
