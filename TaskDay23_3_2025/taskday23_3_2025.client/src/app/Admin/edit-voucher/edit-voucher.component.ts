import { Component } from '@angular/core';
import { ServiceService } from '../../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-voucher',
  standalone: false,
  templateUrl: './edit-voucher.component.html',
  styleUrl: './edit-voucher.component.css'
})
export class EditVoucherComponent {
  VoucherId: any;
 voucherContainer: any
  constructor(private serv: ServiceService, private active: ActivatedRoute) { }

  ngOnInit() {
    let vouchertoedit = this.active.snapshot.paramMap.get("id");
    this.serv.getVoucherById(vouchertoedit).subscribe((data:any) => {

      this.voucherContainer = data;
    })

  }

  editVouchersData(data:any) {
    this.VoucherId = this.active.snapshot.paramMap.get("id");
    this.serv.editVoucher(this.VoucherId, data).subscribe(() => {
      alert("Data updated successfully");
    })
  }


}
