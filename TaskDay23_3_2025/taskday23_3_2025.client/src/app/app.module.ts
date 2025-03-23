import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { AddVoucherComponent } from './Admin/add-voucher/add-voucher.component';
import { ViewVoucherComponent } from './Admin/view-voucher/view-voucher.component';
import { EditVoucherComponent } from './Admin/edit-voucher/edit-voucher.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddVoucherComponent,
    ViewVoucherComponent,
    EditVoucherComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
