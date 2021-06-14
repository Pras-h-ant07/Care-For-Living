import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }
  addData(Fullname,Email,Address,Phone,Message,Question) {
      const obj = {Fullname,Email,Address,Phone,Message,Question};
      this
          .http
          .post(`${this.url}/add`, obj)
          .subscribe(res => console.log(res));
          window.location.href = "/";
  }
  
  getData() {
      return(
      this
          .http
          .get(`${this.url}`)
      );
  }
  upData(id, Username) {
      const obj = { Username };
      this
          .http
          .post(`${this.url}/update/${id}`, obj)
          .subscribe(res => console.log(res));
  }
  delData(id) {
      return this.http.get(`${this.url}/delete/${id}`).subscribe();
  }
  editData(id) {
    return this
            .http
            .get(`${this.url}/edit/${id}`);
    }


    up_data(Fullname,Email,Address,Phone,Message,Question, id) {

      const obj = {
          Fullname: Fullname,
          Email: Email,
          Address: Address,
          Phone: Phone,
          Message: Message,
          Question: Question
        };
      this
        .http
        .post(`${this.url}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }
}
