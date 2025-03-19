import { Component } from '@angular/core';
import { SeviceService } from '../../sevice.service';

@Component({
  selector: 'app-get-category',
  standalone: false,
  templateUrl: './get-category.component.html',
  styleUrl: './get-category.component.css'
})
export class GetCategoryComponent {

  constructor(private serv: SeviceService) { }

  ngOnInit() {
    this.getCategorydata();
  }

  category: any = [];
  getCategorydata() {

    this.serv.getCategory().subscribe((data) => { this.category = data; })
  }

}
