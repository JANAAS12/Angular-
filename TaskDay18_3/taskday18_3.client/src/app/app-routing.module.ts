import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './Admin/dashbord/dashbord.component';
import { GetCategoryComponent } from './Admin/get-category/get-category.component';
import { GetProductsComponent } from './Admin/get-products/get-products.component';
import { AddProductsComponent } from './Admin/add-products/add-products.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';

const routes: Routes = [
  {
    path: 'dashboard', component: DashbordComponent, children: [
      { path: 'getcategory', component: GetCategoryComponent },
      { path: 'getproducts', component: GetProductsComponent },
      { path: 'addCategory', component: AddCategoryComponent },
      { path: 'addProducts', component: AddProductsComponent }
    ]
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
