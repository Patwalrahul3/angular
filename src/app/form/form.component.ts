import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({});
    this.createForm();
  }

  createForm() {
    this.userForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),

      address: new FormGroup({
        country: new FormControl('', Validators.required),
        state: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
      }),
    });
  }

  onSave() {
    this.userForm.markAllAsTouched();
    if (this.userForm.invalid) {
      const localData = localStorage.getItem('userList');

      if (localData != null) {
        const parseData = JSON.parse(localData);
        parseData.push(this.userForm.value);
        localStorage.setItem('userList', JSON.stringify(parseData));
      } else {
        let arr = [];
        arr.push(this.userForm.value);
        localStorage.setItem('userList', JSON.stringify(arr));
      }

      this.userForm.reset();
    }
  }

  
}
