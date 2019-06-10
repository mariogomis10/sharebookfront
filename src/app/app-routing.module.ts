import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookComponent} from './book/book.component';
import {AddBookComponent} from './add-book/add-book.component';

const routes: Routes = [
  { path  : '', redirectTo : 'home', pathMatch  : 'full' },
  { path  : 'home', component  : BookComponent },
  { path  : 'my-books', component  : BookComponent },
  { path  : 'add-book', component  : AddBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
