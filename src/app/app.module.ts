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
import { MyloansComponent } from './myloans/myloans.component';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    VueBookComponent,
    AddBookComponent,
    HeaderComponent,
    ListBooksComponent,
    MyloansComponent,
    LoginComponent,
    AddUserComponent,
    HomeComponent
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
