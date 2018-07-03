import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent implements OnInit {
  amount;
  //bug: this is always undefined
  amountVAT;
  date;
  reason;
  currencies = ["EUR", "USD"];
  selectedCurrency;

  @Output()
  expenseAdded: EventEmitter<object> = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {
  }

  
  addExpense(event: Event) {
    console.log("clicked")
    this.expenseAdded.emit({amount: this.amount, amountVAT: this.amount * 0.2, date: this.date, selectedCurrency: this.selectedCurrency, reason: this.reason})
  }
}