import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {


  ngOnInit() {
    this.getDataFromAPI();
  }
  constructor(private serv: ServiceService) {}

  category: any;
  getDataFromAPI() {

    this.serv.getData().subscribe(data => { this.category = data; })


  }
}
