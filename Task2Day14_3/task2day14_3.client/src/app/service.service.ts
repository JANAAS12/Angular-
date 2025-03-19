import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories");
  }

 

  getProductData() {
    return this.http.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/products");
  }

  getSelectedProductData(id: number) {
    return this.http.get<any>(`https://67cd64b6dd7651e464ee3d63.mockapi.io/products/${id}`);
  }


}
