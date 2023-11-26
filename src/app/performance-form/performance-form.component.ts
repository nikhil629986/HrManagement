import { Component } from '@angular/core';
import { employeePerformance } from 'src/app/Model/IPerformance';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Employeeattendance } from 'src/app/Model/IAttendance';
import { LoginService } from 'src/app/Services/login.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-performance-form',
  templateUrl: './performance-form.component.html',
  styleUrls: ['./performance-form.component.css']
})
export class PerformanceFormComponent {
  Performanceform!:FormGroup
  employee_id!:string
  emaildata:any
  performacedata:employeePerformance[]=[]

   performaceemployeedata:any
  constructor(  private route:ActivatedRoute,  private Loginservice: LoginService,private formBuilder: FormBuilder, private http: HttpClient){}

  ngOnInit()
  {
    this.route.params.subscribe(params => {
      this.employee_id=params['id'];
      console.log(this.employee_id);

      
    })
    this.Loginservice.fetchallperformance().subscribe((data:any) => {
      this.performacedata=data
      console.log(this.performacedata);
    });

    
          
    this.Performanceform = this.formBuilder.group({
      email: [' emaildata.email', Validators.required],
     
      date: ['', Validators.required],
      description: ['', Validators.required],
    
    });

    this.Loginservice.fetchallperformancewithid(this.employee_id).subscribe((data:any)=>
    {
       this.performaceemployeedata=data;
       console.log(this.performaceemployeedata)

    })
  
  }
  submitperformance()
  {
    const formData = this.Performanceform.value;
    const employee = this.performacedata.find(emp => emp.employee_id === this.employee_id);
    if (employee) {
      if (!employee.daily_goals) employee.daily_goals = [];
      employee.daily_goals.push({
        date: formData.date,
        description: formData.description,
       
      });

      this.Loginservice.updateperformace(employee).subscribe(data => {
        Swal.fire('','task Logged Successfully','success');
    
      });
      Swal.fire('','task Logged Successfully','success');
      location.reload()

      console.log(employee);
  }
}
}
