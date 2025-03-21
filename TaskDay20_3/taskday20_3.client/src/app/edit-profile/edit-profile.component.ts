import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  standalone: false,
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {
  @Input() userData: any = {};
  @Output() updateUser = new EventEmitter<any>();
  

  editUserData: any = {};

  ngOnInit() {
    this.editUserData = { ...this.userData }; // نسخ البيانات الأصلية لمنع تعديلها مباشرةً
  }

  saveChanges() {
    this.updateUser.emit(this.editUserData); // إرسال البيانات المحدثة إلى ProfileComponent
  }


}
