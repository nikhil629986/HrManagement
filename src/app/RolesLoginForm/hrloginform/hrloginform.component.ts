import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userlogin } from 'src/app/Model/Ilogin';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-hrloginform',
  templateUrl: './hrloginform.component.html',
  styleUrls: ['./hrloginform.component.css']
})
export class HrloginformComponent {
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

onHrlogin() {
  const email = this.loginForm?.get('email')?.value;
  const password = this.loginForm?.get('password')?.value;

  console.log('email: ' + email);
  console.log('password: ' + password);
  const loggedInUser = this.alluser.find(user => user.email === email && user.password === password);
  console.log('loggedInUser: ' + loggedInUser)
  if (loggedInUser) {
    if (loggedInUser.role === 'Hr') {
      console.log("role matched")
      this.loginservice.getemail(loggedInUser.email)
      this.router.navigate(['/hrdashboard']);
    
    } else{
      alert("role not matched");
    }
  
    

}
}
}
