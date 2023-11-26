import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-hrsidebar',
  templateUrl: './hrsidebar.component.html',
  styleUrls: ['./hrsidebar.component.css']
})
export class HrsidebarComponent {
  constructor(private authservice: AuthService){}
  logout()
  {
     this.authservice.logout();
  }
}
