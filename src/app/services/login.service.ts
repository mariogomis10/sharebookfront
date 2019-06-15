import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(user: User) {
    const formData = new FormData();
    formData.set('username', user.email);
    formData.set('password', user.password);
    return this.http.post('http://localhost:8080/login', formData);
  }
  logout(): any {}
}
