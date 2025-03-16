import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeriveService {

  constructor(private http:HttpClient) { }

  postNewUser(data:any)  {
    return this.http.post("https://67cea6ee125cd5af757b6514.mockapi.io/Users", data);
  }

  getAllUsers() {
    return this.http.get("https://67cea6ee125cd5af757b6514.mockapi.io/Users");
  }


}
