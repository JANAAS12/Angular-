import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-product',
  standalone: false,
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent {

  constructor(private serv: ServiceService, private active: ActivatedRoute) { }
  selectedproduct: any;
  id: any;
  ngOnInit() {
    this.id = this.active.snapshot.paramMap.get('id');
    this.getselectedProduct();
  }
  getselectedProduct() {
    this.serv.getSelectedProductData(this.id).subscribe(data => { this.selectedproduct = data });
  }
}
