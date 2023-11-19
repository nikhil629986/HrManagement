import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userlogin } from 'src/app/Model/Ilogin';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-managerloginform',
  templateUrl: './managerloginform.component.html',
  styleUrls: ['./managerloginform.component.css']
})
export class ManagerloginformComponent {
  loginForm: FormGroup;
  alluser:userlogin[]=[];
  constructor(private fb: FormBuilder, private loginservice: LoginService, private router: Router) {
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

onmanagerlogin() {
  const email = this.loginForm?.get('email')?.value;
  const password = this.loginForm?.get('password')?.value;

  console.log('email: ' + email);
  console.log('password: ' + password);
  const loggedInUser = this.alluser.find(user => user.email === email && user.password === password);
  console.log('loggedInUser: ' + loggedInUser)
  if (loggedInUser) {
    if (loggedInUser.role === 'Manager') {
      console.log("role matched")

      this.loginservice.getemail(loggedInUser.email)
      this.router.navigate(['/managerDashboard']);
    
    } else{
      alert("role not matched");
    }
  
    

}
}
}
