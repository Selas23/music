import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scratch';

  constructor(private route: ActivatedRoute) {}

  isLoggedIn(): boolean {
    // Implement your authentication logic here and return true if the user is logged in, false otherwise
    // For demonstration purposes, I'm assuming the user is logged in if a token is present in the local storage
    return localStorage.getItem('token') !== null;
  }

  login() {
    // Implement your login logic here
    // For demonstration purposes, I'm setting a token in the local storage to simulate a successful login
    localStorage.setItem('token', 'my-token');
  }

  logout() {
    // Implement your logout logic here
    // For demonstration purposes, I'm removing the token from the local storage to simulate a logout
    localStorage.removeItem('token');
  }

  isDashboardActive(): boolean {
    // Implement the logic to check if the user is on the dashboard route
    // For example, you can use the ActivatedRoute service to get the current route and check if it is the dashboard route
    // Return true if the user is on the dashboard route, otherwise return false

  //   return this.route.snapshot.routeConfig.path === 'dashboard';
  // }

  return this.route?.snapshot?.routeConfig?.path === 'dashboard';
}

}
