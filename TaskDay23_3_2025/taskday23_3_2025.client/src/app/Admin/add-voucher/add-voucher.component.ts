import { Component } from '@angular/core';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-add-voucher',
  standalone: false,
  templateUrl: './add-voucher.component.html',
  styleUrl: './add-voucher.component.css'
})
export class AddVoucherComponent {
  constructor(private serv: ServiceService) { }

  ngOnInit() {

  }

  addVouchersData(data: any) {
    this.serv.addVouchers(data).subscribe(() => {
      alert("add successfully ");
    })
  }
}
