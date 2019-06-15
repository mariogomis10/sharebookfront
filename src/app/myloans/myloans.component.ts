import { Component, OnInit } from '@angular/core';
import {LoanService} from '../services/loan.service';
import {Loan} from '../model/Loan';

@Component({
  selector: 'app-myloans',
  templateUrl: './myloans.component.html',
  styleUrls: ['./myloans.component.scss']
})
export class MyloansComponent implements OnInit {

  myLoans: Loan[] = [];
  constructor(private loanService: LoanService) { }

  ngOnInit() {
    this.loanService.getMyLoans().subscribe((data: Loan[]) => {
      this.myLoans = data;
    });
  }

  closeLoan(idLoan: number) {
    this.loanService.closeLoan(idLoan).subscribe(() => {
      this.ngOnInit();
    });
  }



}
