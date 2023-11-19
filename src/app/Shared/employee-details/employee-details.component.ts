import { Component } from '@angular/core';
import { JobPostingService } from 'src/app/Services/job-posting.service';
import { Employeeattendance } from 'src/app/Model/IAttendance';
import { LoginService } from 'src/app/Services/login.service';
import { MatTableDataSource } from '@angular/material/table';
import { users } from 'src/app/Model/IUser';
import { MatCardActions } from '@angular/material/card';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
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
