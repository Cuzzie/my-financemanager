import {Component, Input, OnInit} from '@angular/core';
import {Transaction} from "../transaction.model";

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css']
})
export class ExpensesListComponent implements OnInit {
  @Input() expenses: Transaction[];

  constructor() { }

  ngOnInit() {
  }

}
