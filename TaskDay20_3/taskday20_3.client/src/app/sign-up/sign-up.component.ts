import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  constructor( private router: Router) { }
  addUser(data: any) {
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    // Check if email already exists
    let existingUser = users.find((user: any) => user.email === data.email);
    if (existingUser) {
      alert("Email already registered!");
      return;
    }
    // Add user to Local Storage
    users.push(data);
    localStorage.setItem('users', JSON.stringify(users));

    alert("Registration successful!");
    this.router.navigate(['/login']);

  }
}
