import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getAmountInput() {
    return element(by.css("#amount"))
  }

  getAmountVATInput() {
    return element(by.css("#amountVAT"))
  }

  getSelectedCurrencySelect() {
    return element(by.css("#currency"))
  }

  getDateInput() {
    return element(by.css("#date"))
  }

  getReasonInput() {
    return element(by.css("#reason"))
  }

  getAddExpenseButton() {
    return element(by.css("#addButton"))
  }

  getAddedTableRow() {
    return element(by.css("body > app-root > div > app-expense-list > div > table > tbody > tr:last-child"))
  }

  getNewExpenseAmountCell() {
    return element(by.css("body > app-root > div > app-expense-list > div > table > tbody > tr:last-child > td:nth-child(1)"))
  }

  getNewExpenseAmountVATCell() {
    return element(by.css("body > app-root > div > app-expense-list > div > table > tbody > tr:last-child > td:nth-child(2)"))
  }

  getNewExpenseDateCell() {
    return element(by.css("body > app-root > div > app-expense-list > div > table > tbody > tr:last-child > td:nth-child(3)"))
  }

  getNewExpenseCurrencyCell() {
    return element(by.css("body > app-root > div > app-expense-list > div > table > tbody > tr:last-child > td:nth-child(4)"))
  }

  getNewExpenseReasonCell() {
    return element(by.css("body > app-root > div > app-expense-list > div > table > tbody > tr:last-child > td:nth-child(5)"))
  }
}