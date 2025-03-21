import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) { }
  login(data:any){
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    let user = users.find((u: any) => u.email === data.email && u.password === data.password);

    if (user) {
      alert("Login successful!");
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.router.navigate(['/home']);
    } else {
      alert("Invalid email or password!");
    }

  }

}
