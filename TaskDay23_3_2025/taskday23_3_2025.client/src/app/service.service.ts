import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _http: HttpClient) { }

  getVouchers() {
    return this._http.get("https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher");
  }

  addVouchers(data: any) {
    return this._http.post("https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher", data);
  }

  editVoucher(id: any, data: any) {
    return this._http.put(`https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher/${id}`,data);
  }
  getVoucherById(id:any) {
    return this._http.get(`https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher/${id}`)
  }

}
