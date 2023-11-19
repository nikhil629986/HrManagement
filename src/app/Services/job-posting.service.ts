import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jobposting } from 'src/app/Model/Ijobposting';
import { JobApplication } from '../Model/IApplicants';
import { users } from '../Model/IUser';
import { Employeeattendance } from '../Model/IAttendance';
@Injectable({
  providedIn: 'root',
})
export class JobPostingService {
  constructor(private http: HttpClient) {}
  createjob(job: Jobposting) {
  
    return this.http.post(
      `https://localhost:7135/api/JobPosting
    `,
      job
    );
  }


  createemployee(user: users)
  {
    return this.http.post(`https://localhost:7135/api/User`,user)
    
  }
  fetchalljobs()
  {
    return this.http.get(`https://localhost:7135/api/JobPosting`)
  }
  fetcalljobsusingid(id: string)
  {
return this.http.get(`https://localhost:7135/api/JobPosting/${id}`)
  }

  postallapplication(applicants: JobApplication)
  {
    return this.http.post(
      `https://localhost:7135/api/Applicants
    `,
    applicants
    );
  }


  postallattendance(attendance:  Employeeattendance)
  {
    console.log(attendance);
    return this.http.post(
      `https://localhost:7135/api/Attendance
    `,
    attendance
    );
  }
 

  fetchallapplication()
  {
    return this.http.get(`https://localhost:7135/api/Applicants`)
  }

  fetchapplicantsbasedonID(id:string)
  {
    return this.http.get(`https://localhost:7135/api/Applicants/${id}`)
  }

 
}


