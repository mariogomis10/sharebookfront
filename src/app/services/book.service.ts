import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  // get books
  getMyBooks(userId: number) {
    return this.http.get('http://localhost:8080/users/' + userId + '/books');
  }
  // delete book
  deleteBook(bookId: number) {
    return this.http.delete('http://localhost:8080/books/' + bookId);
  }
  // save book
  save(book): any {
    return this.http.post('http://localhost:8080/users/2/books', book);
  }
  // get books available
  getBooksAvailable(): any {
    return this.http.get('http://localhost:8080/users/2/books/status/FREE');
  }
}
