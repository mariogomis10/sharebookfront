import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private http: HttpClient) { }

  getMyLoans() {
    return this.http.get('http://localhost:8080/users/2/loans');
  }

  closeLoan(idLoan: number) {
    return this.http.delete('http://localhost:8080/loans/' + idLoan);
  }

  loanBook(idBook: number) {
    return this.http.post('http://localhost:8080/users/2/loans/' + idBook, null);
  }
}
