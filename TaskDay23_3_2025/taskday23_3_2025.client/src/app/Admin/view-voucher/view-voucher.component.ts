import { Component } from '@angular/core';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-view-voucher',
  standalone: false,
  templateUrl: './view-voucher.component.html',
  styleUrl: './view-voucher.component.css'
})
export class ViewVoucherComponent {
  constructor(private serv: ServiceService) { }

  ngOnInit() {
    this.getData();
  }
  vouchers: any;
  getData() {
    this.serv.getVouchers().subscribe((data: any) => this.vouchers = data);
  }

}
