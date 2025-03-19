import { Component } from '@angular/core';
import { SeviceService } from '../../sevice.service';

@Component({
  selector: 'app-get-products',
  standalone: false,
  templateUrl: './get-products.component.html',
  styleUrl: './get-products.component.css'
})
export class GetProductsComponent {
  constructor(private serv: SeviceService) { }

  ngOnInit() {
    this.getProductdata();
  }

  Product: any = [];
  getProductdata() {

    this.serv.getProduct().subscribe((data) => { this.Product = data; })
  }
}
