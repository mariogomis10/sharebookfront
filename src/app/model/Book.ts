import {User} from './User';

export class Book {

  name: string;
  category: string;
  id: number;
  user: User;
  status: string;
  deleted: boolean;

  constructor() {}
}
