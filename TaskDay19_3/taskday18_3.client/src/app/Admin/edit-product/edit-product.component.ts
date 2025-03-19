import { Component } from '@angular/core';
import { SeviceService } from '../../sevice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  standalone: false,
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {
  productContainer: any
  constructor(private serv: SeviceService, private active: ActivatedRoute) { }
  ngOnInit() {
    let product = this.active.snapshot.paramMap.get("id");
    this.serv.getProductById(product).subscribe((data) => {

      this.productContainer = data;
    })
  }

  Id: any;
  updateProductData(data: any) {
    this.Id = this.active.snapshot.paramMap.get("id");
    this.serv.updateProduct(this.Id, data).subscribe(() => {
      alert("Data updated successfully");
    })
  }

}
