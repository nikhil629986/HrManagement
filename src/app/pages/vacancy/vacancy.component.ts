import { Component } from '@angular/core';
import { JobPostingService } from 'src/app/Services/job-posting.service';
import { Jobposting } from 'src/app/Model/Ijobposting';
@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent {
  jobsdata: any
  constructor(private JobpostingService:JobPostingService){}
  ngOnInit(): void {
    this.loadjobs();
  }
loadjobs(): void {
this.JobpostingService.fetchalljobs().subscribe((res) => {
this.jobsdata=res
console.log(this.jobsdata);

 });
}
}
