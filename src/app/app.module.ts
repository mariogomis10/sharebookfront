import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BookService} from './services/book.service';
import {HttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BookService, HttpClient, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
