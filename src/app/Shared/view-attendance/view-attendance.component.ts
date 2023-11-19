import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employeeattendance } from 'src/app/Model/IAttendance';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-view-attendance',
  templateUrl: './view-attendance.component.html',
  styleUrls: ['./view-attendance.component.css']
})
export class ViewAttendanceComponent {
  appicantsdetail!:Employeeattendance;
  constructor(private route: ActivatedRoute,private loginservice:LoginService,  private router: Router,){}
  ngOnInit() {
    this.route.params.subscribe(params => {
      const searchQuery = params['id'];
      this.loginservice.getattendanceWithId(searchQuery).subscribe((results: any) => {
        this.appicantsdetail=results;
        console.log(this.appicantsdetail);
      });
    });
  }
}

