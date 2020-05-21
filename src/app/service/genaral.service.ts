import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { environment } from "./../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class GenaralService {
  private itemCount = new BehaviorSubject(0);
  sharedItemCount = this.itemCount.asObservable();

  private cart = new BehaviorSubject([]);
  sharedCart = this.cart.asObservable();

  private userData = new BehaviorSubject([]);
  shareduserData = this.userData.asObservable();

  private isLogin = new BehaviorSubject(false);
  sharedIsLogin = this.isLogin.asObservable();

  constructor(private http: HttpClient) { }

  currentItemCount(item: number) {
    this.itemCount.next(item);
  }

  currentCart(data: any) {
    this.cart.next(data);
  }

  currentUserData(data: any) {
    this.userData.next(data);
  }

  currentIsLogin(data: boolean) {
    this.isLogin.next(data);
  }

  custermerRegister(data) {
    let url = "http://localhost:9797/customers";
    return this.http.post(url, data).pipe(
      tap((resp) => {
        if (resp) {
          return resp;
        }
      }),
      catchError((error) => {
        return error.statusText;
      })
    );
  }

  login(data) {
    let data1 = [];
    let email = data.email;
    let password = data.password;

    let url = "http://localhost:9797/login";
    // return this.http
    //   .post(url, {
    //     email,
    //     pass,
    //   })
    //   .pipe(
    //     tap((resp) => {
    //       if (resp["status"]) {
    //         console.log(resp);
    //         data1["stutas"] = true;
    //         data1["user"] = {
    //           name: "emal isuranga",
    //           id: 100,
    //         };
    //         this.userData.next(data1["user"]);
    //         this.isLogin.next(true);
    //         environment.isLogin = true;
    //         return data1;
    //       }
    //     }),
    return this.http
      .post(
        url,
        {},
        {
          params: {
            email,
            password,
          },
        }
      )
      .pipe(
        tap((resp) => {
          if (resp["status"]) {
            console.log(resp);
            data1["stutas"] = true;
            data1["user"] = {
              name: resp["name"],
              id: resp["id"],
            };
            this.userData.next(data1["user"]);
            this.isLogin.next(true);
            environment.isLogin = true;
            return data1;
          }
        }),
        catchError((error) => {
          return error.statusText;
        })
      );
  }

  getCategory() {
    let data1 = [];
    let url = "http://localhost:9090/categories";
    return this.http.get(url).pipe(
      tap((resp) => {
        return resp;
        // if (resp["status"]) {
        //   data1 = ["Ladies Clothes", "Shoes", "Men Clothes"];
        //   return data1;
        // }
      }),
      catchError((error) => {
        return error.statusText;
      })
    );
  }

  getAllIteam() {
    let url = "http://localhost:9191/items";
    return this.http.get(url).pipe(
      tap((resp) => {
        console.log(resp);
        return resp;
        // if (resp["status"]) {
        //   data1 = ["Ladies Clothes", "Shoes", "Men Clothes"];
        //   return data1;
        // }
      }),
      catchError((error) => {
        return error.statusText;
      })
    );
  }

  getSelectItem(id) {
    return this.http.get("http://localhost:9191/items/" + id).pipe(
      tap((resp) => {
        if (resp) {
          return resp;
        }
      }),
      catchError((error) => {
        return error.statusText;
      })
    );
  }

  setOrderDetailes(data) {
    let url = "http://localhost:9394/shippings";
    let orderItem;
    let userData;
    this.sharedCart.subscribe((res) => (orderItem = res));
    this.shareduserData.subscribe((res) => (userData = res));

    console.log(userData);

    let cart = {
      customer: userData.name,
      address: data.address,
      tel: data.tel,
      quantity: orderItem.length,
      price: data.ttotalPrice,
    };
    console.log(cart);
    return this.http.post(url, cart).pipe(
      tap((resp) => {
        if (resp) {
          return resp;
        }
      }),
      catchError((error) => {
        return error.statusText;
      })
    );
  }
}
