import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getMyBooks(userId) {
    return this.http.get('localhost:8080/users/' + userId + '/books');
  }

}
