import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenaralService {

  private itemCount = new BehaviorSubject(0);
  sharedItemCount = this.itemCount.asObservable();

  private cart = new BehaviorSubject([]);
  sharedCart = this.cart.asObservable();

  private userData = new BehaviorSubject([]);
  shareduserData = this.cart.asObservable();

  private isLogin = new BehaviorSubject(false);
  sharedIsLogin = this.isLogin.asObservable();

  constructor(
    private http: HttpClient
  ) { }


  currentItemCount(item: number) {
    this.itemCount.next(item)
  }

  currentCart(data: any) {
    this.cart.next(data)
  }

  currentUserData(data: any) {
    this.userData.next(data)
  }

  currentIsLogin(data: boolean) {
    this.isLogin.next(data)
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

  login(data) {
    let data1 = [];

    let url = "http://127.0.0.1:8000/api/login";
    return this.http.post(url, {
      email: data.email,
      password: data.password,
    }).pipe(tap(resp => {
      if (resp['status']) {
        data1['stutas'] = true
        data1['user'] = {
          name: 'emal isuranga',
          id: 100
        }
        this.userData.next(data1['user'])
        this.isLogin.next(true)
        environment.isLogin = true
        return data1;
      }

    }), catchError((error) => {
      return error.statusText;
    }));
  }

  getCategory() {
    let data1 = [];
    let data = {
      email: 'emalwork194@gmail.com',
      password: '1qaz2wsx',
    }
    let url = "http://127.0.0.1:8000/api/login";
    return this.http.post(url, {
      email: data.email,
      password: data.password,
    }).pipe(tap(resp => {
      if (resp['status']) {
        data1 = [
          'Ladies Clothes', 'Shoes', 'Men Clothes'
        ];
        return data1;
      }

    }), catchError((error) => {
      return error.statusText;
    }));
  }

  getAllIteam() {

  }

  getSelectItem(data) {
    let data1 = [];
    let url = "http://127.0.0.1:8000/api/login";
    return this.http.post(url, {
      email: 'emalwork194@gmail.com',
      password: '1qaz2wsx',
    }).pipe(tap(resp => {
      if (resp['status']) {
        data1 = [
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
          }]
        return data1;
      }

    }), catchError((error) => {
      return error.statusText;
    }));
  }

  setOrderDetailes(data) {

  }
}
