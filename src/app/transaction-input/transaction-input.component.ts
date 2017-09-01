import { Component, OnInit } from '@angular/core';
import {Transaction} from "../transaction.model";

@Component({
  selector: 'app-transaction-input',
  templateUrl: './transaction-input.component.html',
  styleUrls: ['./transaction-input.component.css']
})
export class TransactionInputComponent implements OnInit {
  newTransaction: Transaction = new Transaction("", "", 0);

  constructor() { }

  ngOnInit() {
  }

  onSubmitTransaction() {

  }
}
