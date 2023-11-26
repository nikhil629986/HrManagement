import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import{userlogin} from "../../Model/Ilogin"
import * as bcrypt from 'bcryptjs';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-employeeloginform',
  templateUrl: './employeeloginform.component.html',
  styleUrls: ['./employeeloginform.component.css']
})
export class EmployeeloginformComponent {
  loginForm: FormGroup;
  alluser:userlogin[]=[];


  constructor(private fb: FormBuilder, private loginservice: LoginService, private router: Router, private route: ActivatedRoute,private toastr: ToastrService) {
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

async onemployeelogin() {
  const email = this.loginForm?.get('email')?.value;
  const password = this.loginForm?.get('password')?.value;

  const user = this.alluser.find(user => user.email === email);
  if (user) {
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      console.log('User logged in successfully');
      if (user.role === 'employee') {
        window.localStorage.setItem('token',user.role+'_'+user.email);
        // window.localStorage.setItem('user_role', user.role);
        this.loginservice.getemail(user.email);
        this.router.navigate(['/employeedashboard']);
      } else {
        Swal.fire('', 'Invalid username or password','error');
      }
    } else {
      Swal.fire('', 'Invalid username or password','error');
      
    }
  } else {
    Swal.fire('', 'Invalid username or password','error');
  }
}
}