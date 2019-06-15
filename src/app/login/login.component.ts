import { Component, OnInit } from '@angular/core';
import {User} from '../model/User';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.user).subscribe(
      () => {
        this.router.navigate(['/my-books']);
      },
      () => {
        alert('erreur d\'authentification');
      }
    );
  }

}
