import { AppPage } from './app.po';
import { browser, protractor } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should add a new table row with expense details after submitting', () => {
    page.navigateTo();
    const amountInput = page.getAmountInput()
    amountInput.click()
    amountInput.sendKeys("70")
    const selectedCurrencySelect = page.getSelectedCurrencySelect()
    selectedCurrencySelect.click()
    browser.actions().sendKeys(protractor.Key.DOWN).perform();
    browser.actions().sendKeys(protractor.Key.ENTER).perform();
    const dateInput = page.getDateInput()
    dateInput.sendKeys("07")
    dateInput.sendKeys("03")
    dateInput.sendKeys("2018")

    const reasonInput = page.getReasonInput()
    reasonInput.sendKeys("travel")

    const addExpenseButton = page.getAddExpenseButton()
    addExpenseButton.click()

    page.getNewExpenseAmountCell().getText().then(amount => expect(amount).toEqual("70"))
    page.getNewExpenseAmountVATCell().getText().then(amountVAT => expect(amountVAT).toEqual("14"))
    page.getNewExpenseDateCell().getText().then(date => expect(date).toEqual("2018-07-03"))
    page.getNewExpenseCurrencyCell().getText().then(currency => expect(currency).toEqual("EUR"))
    page.getNewExpenseReasonCell().getText().then(reason => expect(reason).toEqual("travel"))
  });
});
