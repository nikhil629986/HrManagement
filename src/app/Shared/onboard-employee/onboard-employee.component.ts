import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employeeattendance } from 'src/app/Model/IAttendance';
import { JobPostingService } from 'src/app/Services/job-posting.service';
import * as bcrypt from 'bcryptjs';
import Swal from 'sweetalert2';
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

  async onSubmit() {
    this.counter++;

    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.Onboarding.value.password, salt);

   
    const employee = {
      ...this.Onboarding.value,
      password: hashedPassword
    };

    // Send the data to the server
    this.jobpostingservice.createemployee(employee).subscribe((res) =>
      {  
        
        Swal.fire('','Employee Role Created','success')
     
      }
    );
  }
onAdd() {
  const attendanceData = {
    date: '2023-11-16', 
    status: 'present', 
    clockin: '9:00am', 
    clockout: '5:00pm' 
  };

  const leaveRequestData = {
    startDate: '2022-05-24',
    endDate: '2023-06-24',
    reason: 'No leave Applied',
    status: 'Approved'
  };

 const request={
  
 }

  const formValue = this.AddingMoreForm.value;
  formValue.attendance = [attendanceData]; 
  formValue.leaveRequests = [leaveRequestData];
  console.log( JSON.stringify(formValue))
  this.jobpostingservice.postallattendance(formValue).subscribe(
 
    (res) => {
            
      Swal.fire('','Employee Data added Successfully!','success')
    },
    (error) => {
      console.error(error);
      alert("Error creating employee. Please try again later.");
    }
  );
}
}