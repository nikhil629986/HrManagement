import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employeeattendance } from 'src/app/Model/IAttendance';
import { JobPostingService } from 'src/app/Services/job-posting.service';

@Component({
  selector: 'app-onboard-employee',
  templateUrl: './onboard-employee.component.html',
  styleUrls: ['./onboard-employee.component.css']
})
export class OnboardEmployeeComponent {
  roles: string[] = ['Hr', 'employee', 'Manager'];
  counter: number = 1;
  Onboarding: FormGroup = new FormGroup({});
  AddingMoreForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder,private jobpostingservice:JobPostingService) { }

  ngOnInit() {
    this.Onboarding = this.formBuilder.group({
      // id: ['', Validators.required],
      userId: [this.counter, Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      role: ['']
    });

    this.AddingMoreForm=this.formBuilder.group({
      usertableid: ['1', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      department: ['',Validators.required],
      dateofhire: ['',Validators.required],

    })
  }

  onSubmit() {
    this.counter++;
    this.jobpostingservice.createemployee(this.Onboarding.value).subscribe((res) =>
      {  
        alert("Employee Created Sucessfully!");
      }
    )
}
onAdd() {
  const attendanceData = {
    date: '2023-11-16', 
    status: 'present', 
    clockin: '9:00am', 
    clockout: '5:00pm' 
  };

  const leaveRequestData = {
    startDate: 'No Leave Applied',
    endDate: 'No Leave Applied',
    reason: 'No Leave Applied',
    status: 'No Leave Applied'
  };

 const request={
  
 }

  const formValue = this.AddingMoreForm.value;
  formValue.attendance = [attendanceData]; 
  formValue.leaveRequests = [leaveRequestData];
  console.log( JSON.stringify(formValue))
  this.jobpostingservice.postallattendance(formValue).subscribe(
 
    (res) => {
      alert("Employee Created Successfully!");
    },
    (error) => {
      console.error(error);
      alert("Error creating employee. Please try again later.");
    }
  );
}
}