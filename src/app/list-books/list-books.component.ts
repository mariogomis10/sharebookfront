import { Component, OnInit } from '@angular/core';
import {BookService} from '../services/book.service';
import {Book} from '../model/Book';
import {LoanService} from '../services/loan.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss']
})
export class ListBooksComponent implements OnInit {

  private books: Book[];
  constructor(
    private bookService: BookService,
    private loanService: LoanService,
    private router: Router
  ) { }

  ngOnInit() {
    this.books = [];
    this.bookService.getBooksAvailable().subscribe((data: Book[]) => {
      this.books = data;
    });
  }

  loanBook(idBook: number) {
    this.loanService.loanBook(idBook).subscribe(() => {
      this.router.navigate(['my-loans']);
    });
  }

}
