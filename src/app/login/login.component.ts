import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //email: string = '';
  password: string = '';
  username: string = '';

  constructor() { }

  login() {
    // Add your login logic here
    // You can call an authentication service or handle the login functionality as per your application requirements
    console.log('Logging in...');
    console.log('Username:', this.username); // Change "email" to "username"
    console.log('Password:', this.password);
  
    // Clear the form fields after successful login
    this.username = ''; // Change "email" to "username"
    this.password = '';
  }
}
