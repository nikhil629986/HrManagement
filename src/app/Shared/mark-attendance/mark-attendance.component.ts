import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Employeeattendance } from 'src/app/Model/IAttendance';
import { LoginService } from 'src/app/Services/login.service';
import { ActivatedRoute } from '@angular/router';
import { ThemeService } from 'ng2-charts';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-mark-attendance',
  templateUrl: './mark-attendance.component.html',
  styleUrls: ['./mark-attendance.component.css']
})
export class MarkAttendanceComponent {
  attendanceForm!: FormGroup;
 attendanceid!:string;
 emaildata!:any
  
  employees:Employeeattendance[]=[];
  constructor(  private route:ActivatedRoute,  private Loginservice: LoginService,private formBuilder: FormBuilder, private http: HttpClient){}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.attendanceid=params['id'];
      console.log(this.attendanceid);
      
      
    })
    this.Loginservice.getAllAttendance().subscribe((data) => {
      this.employees = data;
      console.log(this.employees);
    });

    this.attendanceForm = this.formBuilder.group({
      email: [' emaildata.email', Validators.required],
      id: [this.attendanceid, Validators.required],
      date: ['', Validators.required],
      status: ['', Validators.required],
      clockin: ['', Validators.required],
      clockout: ['', Validators.required]
    });


this.Loginservice.getattendanceWithId(this.attendanceid).subscribe((data)=>
{
   this.emaildata=data
})
  
  }
  submitAttendance() {
    const formData = this.attendanceForm.value;
    const email = formData.email;
    const id = this.attendanceid
  
    const employee = this.employees.find(emp => emp.email === email && emp.id === id);
    if (employee) {
      
      if (!employee.attendance) employee.attendance = [];
      employee.attendance.push({
        date: formData.date,
        status: formData.status,
        clockin: formData.clockin,
        clockout: formData.clockout
      });
      
      this.Loginservice.updateattendance(employee).subscribe(
        (data: any) => {
          Swal.fire('Marked','Attendance submitted successfully!','success')
        
         
          this.attendanceForm.reset();
        },
        (error: any) => {
          console.log(error);
        }
      );
    } else {
      alert('Could not find employee with the provided email and ID!');
    }
  }
}
