import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  loginUser: any = {};  // تخزين بيانات المستخدم
  showEditPopup: boolean = false; // حالة النافذة المنبثقة

  constructor() { }

  ngOnInit() {
    this.loadUserData();
  }

  loadUserData() {
    const userData = localStorage.getItem('currentUser');
    if (userData) {
      this.loginUser = JSON.parse(userData); // تحويل البيانات إلى كائن
    }
  }

  openEditPopup() {
    this.showEditPopup = true;
  }

  closeEditPopup() {
    this.showEditPopup = false;
  }

  handleUpdate(updatedUser: any) {
    this.loginUser = updatedUser;
    localStorage.setItem('currentUser', JSON.stringify(this.loginUser)); // تحديث المستخدم في localStorage

    // تحديث قائمة المستخدمين في localStorage
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    let index = users.findIndex((u: any) => u.email === updatedUser.email);
    if (index !== -1) {
      users[index] = updatedUser;
      localStorage.setItem('users', JSON.stringify(users));
    }

    this.closeEditPopup(); // إغلاق الـ Popup بعد التحديث
  }
}
