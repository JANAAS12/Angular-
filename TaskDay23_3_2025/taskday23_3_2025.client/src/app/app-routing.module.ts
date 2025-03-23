import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { ViewVoucherComponent } from './Admin/view-voucher/view-voucher.component';
import { AddVoucherComponent } from './Admin/add-voucher/add-voucher.component';
import { EditVoucherComponent } from './Admin/edit-voucher/edit-voucher.component';

const routes: Routes = [

  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: 'viewVouchers', component: ViewVoucherComponent },
      { path: 'addVouchers', component: AddVoucherComponent },
      { path: 'editVoucher/:id', component: EditVoucherComponent },
    ]
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
