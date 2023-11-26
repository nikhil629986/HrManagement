import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userlogin } from 'src/app/Model/Ilogin';
import { LoginService } from 'src/app/Services/login.service';
import * as bcrypt from 'bcryptjs';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-hrloginform',
  templateUrl: './hrloginform.component.html',
  styleUrls: ['./hrloginform.component.css']
})
export class HrloginformComponent {
  loginForm: FormGroup;
  alluser:userlogin[]=[];
  constructor(private fb: FormBuilder, private loginservice: LoginService, private router: Router,private toastr: ToastrService) {
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





async onHrlogin() {
  const email = this.loginForm?.get('email')?.value;
  const password = this.loginForm?.get('password')?.value;

  const user = this.alluser.find(user => user.email === email);
  if (user) {
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      console.log('User logged in successfully');
      if (user.role === 'Hr') {
        window.localStorage.setItem('token',user.role+'_'+user.email);
        this.loginservice.getemail(user.email);
        this.router.navigate(['/hrdashboard']);
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
