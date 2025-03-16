import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SeriveService } from '../serive.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  constructor(private serv: SeriveService, private router: Router) {}

  ngOnInit() { }

  postData(data:any) {
    this.serv.postNewUser(data).subscribe(() => {
      alert("Add New User");
      this.router.navigate(['/login']); 
    })
  }



}
