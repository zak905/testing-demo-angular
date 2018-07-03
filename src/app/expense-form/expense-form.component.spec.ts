import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { ExpenseFormComponent } from './expense-form.component';
import { FormsModule } from '@angular/forms';

describe('ExpenseFormComponent', () => {
  let component: ExpenseFormComponent;
  let fixture: ComponentFixture<ExpenseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseFormComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 inputs, 5 labels, one select, one text area, and one button', () => {
  //  expect(component).toBeTruthy();
    const nativeElement = fixture.nativeElement;
    const inputs = nativeElement.querySelectorAll("input")
    expect(inputs.length).toEqual(3)
    const selects = nativeElement.querySelectorAll("select")
    expect(selects.length).toEqual(1)
    const textareas = nativeElement.querySelectorAll("textarea")
    expect(textareas.length).toEqual(1)
    const buttons = nativeElement.querySelectorAll("button")
    expect(buttons.length).toEqual(1)
    const labels = nativeElement.querySelectorAll("label")
    expect(labels.length).toEqual(5)
  });

  it('should have the correct styles', () => {
    const nativeElement = fixture.nativeElement;
    const elements = nativeElement.getElementsByClassName("expense-container")
    expect(elements.length).toEqual(1)
  });

  it('call emit on button click', () => {
    spyOn(component.expenseAdded, "emit");
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector("button");
    button.dispatchEvent(new Event("click"));
    expect(component.expenseAdded.emit).toHaveBeenCalled();
  });
});
