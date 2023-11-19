import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import{userlogin} from "../../Model/Ilogin"
@Component({
  selector: 'app-employeeloginform',
  templateUrl: './employeeloginform.component.html',
  styleUrls: ['./employeeloginform.component.css']
})
export class EmployeeloginformComponent {
  loginForm: FormGroup;
  alluser:userlogin[]=[];


  constructor(private fb: FormBuilder, private loginservice: LoginService, private router: Router, private route: ActivatedRoute) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false]
    });

 
  }
  ngOnInit(): void {
    this.loginservice.getAllUsers().subscribe(users => {
      this.alluser = users; 

      console.log(this.alluser);
    })


   
}

onemployeelogin() {
  const email = this.loginForm?.get('email')?.value;
  const password = this.loginForm?.get('password')?.value;

  console.log('email: ' + email);
  console.log('password: ' + password);
  const loggedInUser = this.alluser.find(user => user.email === email && user.password === password);
  console.log('loggedInUser: ' + loggedInUser)
  if (loggedInUser) {
    if (loggedInUser.role === 'employee') {
      console.log("role matched")

      this.loginservice.getemail(loggedInUser.email)
      this.router.navigate(['/employeedashboard']);
    
    } else{
      alert("role not matched");
    }
  

}
}
}