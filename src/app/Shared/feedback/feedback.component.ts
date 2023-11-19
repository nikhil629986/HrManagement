
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { employeePerformance } from 'src/app/Model/IPerformance';
import { LoginService } from 'src/app/Services/login.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  Performanceform!:FormGroup
  employee_id!:string

  performacedata:employeePerformance[]=[]
  performaceemployeedata:any
  performanceupdate:any
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
    
      description: ['', Validators.required],
      status: ['', Validators.required],
      employeerating: ['', Validators.required],
    
    });

    this.Loginservice.fetchallperformancewithid(this.employee_id).subscribe((data:any) => {
      
      this.performaceemployeedata=data;
      console.log(this.performaceemployeedata)
    })

  
  }


  submitperformance() {
    const formData = this.Performanceform.value;
    console.log(this.Performanceform.value);
  
    let employee = this.performacedata.find(emp => emp.employee_id === this.employee_id);
    if (employee) {

      employee.description = formData.description;
      employee.status = formData.status;
      employee.employeerating = formData.employeerating;
   

      this.Loginservice.updateperformace(employee).subscribe(data=>
        {

           
            this.performaceemployeedata = data;
            alert("Feedback Submitted SuccessFully")
        });

        location.reload();
     
    }
  }
}
