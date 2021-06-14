// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class SubscriptionService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  // url = 'http://localhost:3000/users';
  url = 'http://localhost:3000/users';


  constructor(private http: HttpClient) { }

  addData(Fullname, Username, Email, Phone, Address, Plan, Time){

      const obj = {Fullname, Username, Email, Phone, Address, Plan, Time};

        this
            .http
            .post(`${this.url}/addData`, obj)
            .subscribe(res => console.log(res));
            console.log("Working")
    }

    getData(){
      return(
        this
            .http
            .get(`${this.url}/getData`)
      );
    }
    
}
