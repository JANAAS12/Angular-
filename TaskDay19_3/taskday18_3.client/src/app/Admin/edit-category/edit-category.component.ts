import { Component } from '@angular/core';
import { SeviceService } from '../../sevice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  standalone: false,
  templateUrl: './edit-category.component.html',
  styleUrl: './edit-category.component.css'
})
export class EditCategoryComponent {
  categoryContainer: any
  constructor(private serv: SeviceService, private active: ActivatedRoute) { }
  ngOnInit() {
    let category = this.active.snapshot.paramMap.get("id");
    this.serv.getCategoryByCategoryId(category).subscribe((data) => {

      this.categoryContainer = data;
    })
    }

  categoryId: any;
    updateCategoryData(data: any) {
      this.categoryId = this.active.snapshot.paramMap.get("id");
      this.serv.updateCategory(this.categoryId, data).subscribe(() => {
        alert("Data updated successfully");
      })
    }
  
}
