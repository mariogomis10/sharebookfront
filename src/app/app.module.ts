import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BookService} from './services/book.service';
import { BookComponent } from './book/book.component';
import {HttpClientModule} from '@angular/common/http';
import { VueBookComponent } from './vue-book/vue-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ListBooksComponent } from './list-books/list-books.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    VueBookComponent,
    AddBookComponent,
    HeaderComponent,
    ListBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
