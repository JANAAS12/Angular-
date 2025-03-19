import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
//import { CategoryComponent } from './category/category.component';
//import { ProductsComponent } from './products/products.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddProductsComponent } from './Admin/add-products/add-products.component';
import { GetCategoryComponent } from './Admin/get-category/get-category.component';
import { GetProductsComponent } from './Admin/get-products/get-products.component';
import { DashbordComponent } from './Admin/dashbord/dashbord.component';


@NgModule({
  declarations: [
    AppComponent,
    //CategoryComponent,
    //ProductsComponent,
    AddCategoryComponent,
    AddProductsComponent,
    GetCategoryComponent,
    GetProductsComponent,
    DashbordComponent,
   

  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    RouterModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
