import { Component, ViewChild, OnInit } from '@angular/core';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.expenseForm.expenseAdded.subscribe((newExpense: any) => {
      this.expenseList.addNewExpense(newExpense)

    });

  }


  @ViewChild(ExpenseFormComponent)
  expenseForm: ExpenseFormComponent;

  @ViewChild(ExpenseListComponent)
  expenseList: ExpenseListComponent;

  addExpense(newExpense) {
   
  }
  
}
