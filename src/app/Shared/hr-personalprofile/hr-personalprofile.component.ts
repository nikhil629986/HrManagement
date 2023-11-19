import { Component } from '@angular/core';
import { Employeeattendance } from 'src/app/Model/IAttendance';
import { users } from 'src/app/Model/IUser';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-hr-personalprofile',
  templateUrl: './hr-personalprofile.component.html',
  styleUrls: ['./hr-personalprofile.component.css']
})
export class HrPersonalprofileComponent {
  employeeDetails!:Employeeattendance
  constructor(private loginservice:LoginService){}
  ngOnInit() {
    this.loginservice.getAllAttendance().subscribe((employee:any) => {
  
   const myemail= this.loginservice.getmyemail();
    console.log(employee);
  
    const loggedInUser = employee.find((e:users) => e.email === myemail );
    console.log(loggedInUser);
      this.employeeDetails = loggedInUser;
    });
  }
}
