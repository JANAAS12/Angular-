import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  constructor(private serv: ServiceService, private activee: ActivatedRoute) { }
  id: any;
  products: any[] = [];
  ngOnInit() {
   
    this.getProducts();
  }
  getProducts() {
    this.id = this.activee.snapshot.paramMap.get('id');
    this.serv.getProductData().subscribe((data) => {
      this.products = data.filter((p: any) => p.categoryId == this.id);
    });
  }

}
