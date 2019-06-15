import { Component, OnInit } from '@angular/core';
import {Book} from '../model/Book';
import {BookService} from '../services/book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  private book: Book = new Book();
  constructor(
    private bookService: BookService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  save() {
    this.bookService.save(this.book).subscribe(
      () => this.router.navigate(['my-books']),
      (response) => {if (response || response.error) { alert('Erreur detecter'); }}
    );
  }

}
