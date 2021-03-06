import {Transaction} from "./transaction.model";
import {EventEmitter} from "@angular/core";

export class TransactionService {
  private incomes: Transaction[] = [];
  private expenses: Transaction[] = [];
  transactionAdded = new EventEmitter<string>();

  getIncomes(): Transaction[] {
    return this.incomes.slice();
  }

  getExpenses(): Transaction[] {
    return this.expenses.slice();
  }

   addTransaction(transaction: Transaction) {
    if (transaction.type === "income") {
      this.incomes = [transaction, ...this.incomes];
      this.transactionAdded.emit("income");
    } else {
      this.expenses = [transaction, ...this.expenses];
      this.transactionAdded.emit("expenses");
    }
  }
}
