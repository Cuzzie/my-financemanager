import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TransactionInputComponent } from './transaction-input/transaction-input.component';
import { IncomeListComponent } from './income-list/income-list.component';
import { ExpensesListComponent } from './expenses-list/expenses-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionInputComponent,
    IncomeListComponent,
    ExpensesListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
