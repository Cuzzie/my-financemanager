import {Component, OnInit} from '@angular/core';
import {Transaction} from "./transaction.model";
import {TransactionService} from "./transaction.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  incomes: Transaction[];
  expenses: Transaction[];

  constructor(private transactionService: TransactionService) {
  }

  ngOnInit() {
    this.incomes = this.transactionService.getIncomes();
    this.expenses = this.transactionService.getExpenses();
    this.transactionService.transactionAdded.subscribe((type: string) => {
      if (type === "income") {
        this.incomes = this.transactionService.getIncomes();
      } else {
        this.expenses = this.transactionService.getExpenses();
      }
    });
  }
}
