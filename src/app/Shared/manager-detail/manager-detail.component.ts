import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Employeeattendance } from 'src/app/Model/IAttendance';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-manager-detail',
  templateUrl: './manager-detail.component.html',
  styleUrls: ['./manager-detail.component.css']
})
export class ManagerDetailComponent {
  employeeDetails: MatTableDataSource<Employeeattendance> = new MatTableDataSource<Employeeattendance>([]);
  displayedColumns: string[] = ['name', 'email', 'phone', 'department','Action'];
  searchText: string = '';
constructor(private loginservice:LoginService){}
ngOnInit() {
  this.loginservice.getAllAttendance().subscribe((employee:any) => {
    this.employeeDetails.data = employee;
  });
}

}
