import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TransactionInputComponent } from './transaction-input/transaction-input.component';
import { IncomeListComponent } from './income-list/income-list.component';
import { ExpensesListComponent } from './expenses-list/expenses-list.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    TransactionInputComponent,
    IncomeListComponent,
    ExpensesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
