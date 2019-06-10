/* tslint:disable:semicolon whitespace */
import { Component, OnInit } from '@angular/core';
import {BookService} from '../services/book.service';
import {Book} from '../model/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {


  myBooks: Book[];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getMyBooks(2).subscribe((data: Book[]) => this.myBooks = data);
  }

}
