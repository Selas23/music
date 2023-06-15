import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      userName: ['', Validators.required],
      userFirstName: ['', Validators.required],
      userLastName: ['', Validators.required],
      userPassword: ['', [Validators.required, Validators.minLength(7)]]
    });
  }

  get formControls() {
    return this.registrationForm.controls;
  }

  register(): void {
    if (this.registrationForm.invalid) {
      return;
    }

    // Register logic goes here

    console.log(this.registrationForm.value);
  }
}
