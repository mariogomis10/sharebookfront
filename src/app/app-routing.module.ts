import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookComponent} from './book/book.component';
import {AddBookComponent} from './add-book/add-book.component';
import {ListBooksComponent} from './list-books/list-books.component';
import {MyloansComponent} from './myloans/myloans.component';
import {LoginComponent} from './login/login.component';
import {AddUserComponent} from './add-user/add-user.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path  : '', component: LoginComponent },
  { path  : 'add-user', component: AddUserComponent },
  { path  : 'home', component  : HomeComponent,
    children : [
      { path  : 'my-books', component  : BookComponent },
      { path  : 'my-loans', component  : MyloansComponent },
      { path  : 'add-book', component  : AddBookComponent },
      { path  : 'books', component  : ListBooksComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
