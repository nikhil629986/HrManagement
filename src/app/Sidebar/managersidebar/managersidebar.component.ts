import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-managersidebar',
  templateUrl: './managersidebar.component.html',
  styleUrls: ['./managersidebar.component.css']
})
export class ManagersidebarComponent {
  constructor(private authservice: AuthService){}
  logout()
  {
     this.authservice.logout();
  }
}
