import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from '../model/Book';
import {BookService} from '../services/book.service';

@Component({
  selector: 'app-vue-book',
  templateUrl: './vue-book.component.html',
  styleUrls: ['./vue-book.component.scss']
})
export class VueBookComponent implements OnInit {

  @Input() book: any;
  @Output() refreshBook =  new EventEmitter<boolean>();
  @Input()  editMode = true;

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  deleteBook(bookId: number) {
    this.bookService.deleteBook(bookId).subscribe(
      () => this.refreshBook.emit(),
      (response) => {
        if (response && response === 409) {
          alert('Livreur en cours d\'emprunt');
          console.log('Livreur en cours d\'emprunt');
        }
      }
    );
  }

}
