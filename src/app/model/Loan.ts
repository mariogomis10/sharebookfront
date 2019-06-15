import {Book} from './Book';
import {User} from './User';


export class Loan {
  askDate: Date;
  book: Book;
  borrower: User;
  lender: User;
  closeDate: Date;

  constructor() {
  }
}
