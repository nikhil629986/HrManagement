import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { JobApplication } from 'src/app/Model/IApplicants';
import { Employeeattendance } from 'src/app/Model/IAttendance';
import { JobPostingService } from 'src/app/Services/job-posting.service';
import { LoginService } from 'src/app/Services/login.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-applyforleave',
  templateUrl: './applyforleave.component.html',
  styleUrls: ['./applyforleave.component.css'],
})
export class ApplyforleaveComponent {
  leaveform: FormGroup = new FormGroup({});
  id: string | undefined;
  employees: Employeeattendance[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private Loginservice: LoginService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.leaveform = this.formBuilder.group({
      start_date: [],
      end_date: [],
      reason_for_leave: [],
      status: [],
    });

    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.Loginservice.getAllAttendance().subscribe((data) => {
      this.employees = data;
      console.log(this.employees);
    });
  }

  onSubmit() {
    const formData = this.leaveform.value;

    const employee = this.employees.find(emp => emp.id === this.id);

    if (employee) {
      if (!employee.leaveRequests) employee.leaveRequests = [];
      employee.leaveRequests.push({
        startDate: formData.start_date,
        endDate: formData.end_date,
        reason: formData.reason_for_leave,
        status: formData.status,
      });
      this.Loginservice.updateattendance(employee).subscribe(
        (data: any) => {
          Swal.fire('','Leave Request submitted successfully!','success')
         
         
          this.leaveform.reset();
        },
        (error: any) => {
          console.log(error);
        }
      );

  }
}
}
