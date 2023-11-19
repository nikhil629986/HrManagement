import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobPostingService } from 'src/app/Services/job-posting.service';
import { JobApplication } from 'src/app/Model/IApplicants';
import { Jobposting } from 'src/app/Model/Ijobposting';
@Component({
  selector: 'app-applicantsdetail',
  templateUrl: './applicantsdetail.component.html',
  styleUrls: ['./applicantsdetail.component.css']
})
export class ApplicantsdetailComponent {
appicantsdetail!:JobApplication
  constructor(private route: ActivatedRoute,private JobPostingService:JobPostingService,  private router: Router,){}
  ngOnInit() {
    this.route.params.subscribe(params => {
      const searchQuery = params['id'];
      this.JobPostingService.fetchapplicantsbasedonID(searchQuery).subscribe((results: any) => {
        this.appicantsdetail=results;
        console.log(this.appicantsdetail);
      });
    });
  }
}
