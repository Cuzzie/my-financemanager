import {Component, Input, OnInit} from '@angular/core';
import {Transaction} from "../transaction.model";

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.css']
})
export class IncomeListComponent implements OnInit {
  @Input() incomes: Transaction[];

  constructor() { }

  ngOnInit() {
  }

}
