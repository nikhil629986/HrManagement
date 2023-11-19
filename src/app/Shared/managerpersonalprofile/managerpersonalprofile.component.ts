import { Component } from '@angular/core';
import { Employeeattendance } from 'src/app/Model/IAttendance';
import { users } from 'src/app/Model/IUser';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-managerpersonalprofile',
  templateUrl: './managerpersonalprofile.component.html',
  styleUrls: ['./managerpersonalprofile.component.css']
})
export class ManagerpersonalprofileComponent {
  employeeDetails!:Employeeattendance
  displayedColumns: string[] = ['name', 'email', 'phone', 'department','Action'];
  searchText: string = '';

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
