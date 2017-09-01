import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Transaction} from "../transaction.model";
import {TransactionService} from "../transaction.service";

@Component({
  selector: 'app-transaction-input',
  templateUrl: './transaction-input.component.html',
  styleUrls: ['./transaction-input.component.css']
})
export class TransactionInputComponent implements OnInit {
  newTransaction: Transaction = new Transaction("", "", 0);

  constructor(private transactionService: TransactionService) {
  }

  ngOnInit() {
  }

  onSubmitTransaction() {
    this.transactionService.addTransaction(this.newTransaction);
    this.newTransaction = new Transaction("", "", 0);
  }
}
