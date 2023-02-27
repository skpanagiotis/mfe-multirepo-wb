import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  addForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      customerCode: [null],
      customerName: [null],
      cardNumber: [null],
      balance: [null],
    });
  }

  submit() {
    console.log(this.addForm);
    const event = new CustomEvent('event', {
      detail: {
        customerCode: this.addForm.controls['customerCode'].value,
        customerName: this.addForm.controls['customerName'].value,
        cardNumber: this.addForm.controls['cardNumber'].value,
        balance: this.addForm.controls['balance'].value,
      },
    });
    dispatchEvent(event);
  }
}
