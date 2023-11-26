import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-employeesidebar',
  templateUrl: './employeesidebar.component.html',
  styleUrls: ['./employeesidebar.component.css']
})
export class EmployeesidebarComponent {
  constructor(private authservice: AuthService){}
  logout()
  {
     this.authservice.logout();
  }
}
