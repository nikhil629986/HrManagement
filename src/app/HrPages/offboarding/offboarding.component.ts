import { Component } from '@angular/core';
import { Employeeattendance } from 'src/app/Model/IAttendance';
import { LoginService } from 'src/app/Services/login.service';
import { userlogin } from 'src/app/Model/Ilogin';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-offboarding',
  templateUrl: './offboarding.component.html',
  styleUrls: ['./offboarding.component.css']
})
export class OffboardingComponent {
employeedetails:Employeeattendance[]=[]
logindetails:userlogin[]=[]
constructor(private loginservice:LoginService){}
ngOnInit() {

  this.loginservice.getAllUsers().subscribe((data) => {
    this.logindetails = data;
    console.log(this.logindetails);
  });
  
  this.loginservice.getAllAttendance().subscribe((data) => {
    this.employeedetails = data;
    console.log(this.employeedetails);
  });
  
}

deleteuser(id: string) {
{  this.loginservice.deleteUser(id).subscribe((data) => {
  Swal.fire('','Employee Offboarded Successfully','success')
 
});



}


}

deleteEmployee(id: string) {

  this.loginservice.deleteEmployee(id).subscribe((data) => {
    Swal.fire('','Employee Offboarded Successfully','success')
  });
  
}
}

