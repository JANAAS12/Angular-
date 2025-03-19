import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeviceService {

  constructor(private http: HttpClient) { }

  getCategory() {
    return this.http.get('https://67cd64b6dd7651e464ee3d63.mockapi.io/categories');
  }
  getProduct() {
    return this.http.get('https://67cd64b6dd7651e464ee3d63.mockapi.io/products');
  }
  addCategory(data:any) {
    return this.http.post('https://67cd64b6dd7651e464ee3d63.mockapi.io/categories', data);
  }
  addProduct(data: any) {
    return this.http.post('https://67cd64b6dd7651e464ee3d63.mockapi.io/products', data);
  }

  updateCategory(id:any,data:any) {
    return this.http.put(`https://67cd64b6dd7651e464ee3d63.mockapi.io/categories/${id}`, data);
  }
  updateProduct(id: any, data: any) {
    return this.http.put(`https://67cd64b6dd7651e464ee3d63.mockapi.io/products/${id}`, data);
  }

  getCategoryByCategoryId(id: any) {
    return this.http.get(`https://67cd64b6dd7651e464ee3d63.mockapi.io/categories/${id}`)
  }
  getProductById(id: any) {
    return this.http.get(`https://67cd64b6dd7651e464ee3d63.mockapi.io/products/${id}`)
  }
}
