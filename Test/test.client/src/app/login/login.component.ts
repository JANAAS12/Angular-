import { Component } from '@angular/core';
import { SeriveService } from '../serive.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private serv:SeriveService) { }
  ngOnInit() {
   
  }
  usersData: any;
  getData(enteredUser:any) {
     this.serv.getAllUsers().subscribe((data:any) => {
       let user = data.find((p: any) => p.Email == enteredUser.Email && p.password == enteredUser.password);
       if (user) {
         alert("login successfully")
       }
       else {
         alert("invalid email and password")
       }
    })
  }
}
