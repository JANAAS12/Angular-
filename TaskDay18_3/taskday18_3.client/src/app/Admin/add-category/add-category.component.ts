import { Component } from '@angular/core';
import { SeviceService } from '../../sevice.service';

@Component({
  selector: 'app-add-category',
  standalone: false,
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {

  constructor(private serv:SeviceService) { }

  ngOnInit() { }

  AddCategory(data: any) {
    this.serv.addCategory(data).subscribe(() => {
      alert("added successfully");
    })
  }
}
