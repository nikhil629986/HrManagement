import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { userlogin } from 'src/app/Model/Ilogin';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-hr-dashboard',
  templateUrl: './hr-dashboard.component.html',
  styleUrls: ['./hr-dashboard.component.css']
})
export class HrDashboardComponent {
  singleuser!:userlogin[]

  constructor(private fb: FormBuilder, private loginservice: LoginService, private router: Router, private route: ActivatedRoute){}
  ngOnInit(): void {
  this.route.params.subscribe(params => {
    const id = params['id'];
    this.loginservice.getusersWithId(id).subscribe((student) => {
      this.singleuser=student

      console.log(this.singleuser)
  })})
}
}

