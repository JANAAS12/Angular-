import { Component } from '@angular/core';
import { SeviceService } from '../../sevice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-products',
  standalone: false,
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.css'
})
export class AddProductsComponent {
  constructor(private serv: SeviceService,private router:Router) { }

  ngOnInit() { }

  AddProduct(data: any) {
    this.serv.addProduct(data).subscribe(() => {
      alert("added successfully");
      this.router.navigate([ '/getproducts']);
    })
  }
}
