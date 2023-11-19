import { Component } from '@angular/core';
import { Employeeattendance } from 'src/app/Model/IAttendance';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-leave-approval',
  templateUrl: './leave-approval.component.html',
  styleUrls: ['./leave-approval.component.css']
})
export class LeaveApprovalComponent {
leaverequest:Employeeattendance[]=[]

constructor(private loginservice:LoginService){} 

ngOnInit() {
    this.loginservice.getAllAttendance().subscribe((data) => {
      this.leaverequest = data;
      console.log(this.leaverequest);
    });
  }

  Approve(id: string, newStatus: string) {
    const employee = this.leaverequest.find(emp => emp.id === id);
    if (employee) {
      const leaveRequest = employee.leaveRequests[employee.leaveRequests.length - 1];
      if (leaveRequest) {
        leaveRequest.status = newStatus;
        this.loginservice.updateattendance(employee).subscribe(
          response => {
            console.log(`Leave request ${id} approved!`);
            alert(`Leave request ${id} approved!`);
          },
          error => {
            console.error(`Failed to approve leave request ${id}`, error);
          }
        );
      } else {
        console.error(`Employee ${id} has no leave requests`);
      }
    } else {
      console.error(`No employee found with ID ${id}`);
    }
  }
 

  Reject(id: string, newStatus: string) {
    const employee = this.leaverequest.find(emp => emp.id === id);
    if (employee) {
      const leaveRequest = employee.leaveRequests[employee.leaveRequests.length - 1];
      if (leaveRequest) {
        leaveRequest.status = newStatus;
        this.loginservice.updateattendance(employee).subscribe(
          response => {
            console.log(`Leave request ${id} Rejected!`);
            alert(`Leave request ${id} approved!`);
          },
          error => {
            console.error(`Failed to approve leave request ${id}`, error);
          }
        );
      } else {
        console.error(`Employee ${id} has no leave requests`);
      }
    } else {
      console.error(`No employee found with ID ${id}`);
    }
  }
}
