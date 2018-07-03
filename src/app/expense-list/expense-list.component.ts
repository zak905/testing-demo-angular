import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {

  @ViewChild("tableBody")
  tableBody: ElementRef;

  constructor() { }

  ngOnInit() {
  }


  addNewExpense(expense: any) {
    const tableRow = document.createElement("tr")
    const amountCell = document.createElement("td")
    amountCell.innerText = expense.amount
    const amountVATCell = document.createElement("td")
    amountVATCell.innerText = expense.amountVAT
    const dateCell = document.createElement("td")
    dateCell.innerText = expense.date
    const selectedCurrencyCell = document.createElement("td")
    selectedCurrencyCell.innerText = expense.selectedCurrency
    const reasonCell = document.createElement("td")
    reasonCell.innerText = expense.reason

    tableRow.appendChild(amountCell)
    tableRow.appendChild(amountVATCell)
    tableRow.appendChild(dateCell)
    tableRow.appendChild(selectedCurrencyCell)
    tableRow.appendChild(reasonCell)
    this.tableBody.nativeElement.appendChild(tableRow)
  }
}