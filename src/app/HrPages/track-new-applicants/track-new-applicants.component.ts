import { Component } from '@angular/core';
import { JobPostingService } from 'src/app/Services/job-posting.service';
import { JobApplication } from 'src/app/Model/IApplicants';
import * as emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-track-new-applicants',
  templateUrl: './track-new-applicants.component.html',
  styleUrls: ['./track-new-applicants.component.css']
})
export class TrackNewApplicantsComponent {
  displayedColumns: string[] = ['id', 'job_postings_id', 'full_name','email', 'date_applied','action'];
  applicants:JobApplication[] = []
  constructor(private JobpostingService:JobPostingService){}
  ngOnInit(): void {
    // const applicant = this.applicants[0];
    // console.warn(applicant);
    this.loadapplicants();
  }
  loadapplicants():void
  {
    this.JobpostingService.fetchallapplication().subscribe((res: any) => {
      // res.forEach((e:JobApplication) => {
      //   this.applicants.push(e);
      // });
      // console.log(res);
      this.applicants = res;
      console.log(this.applicants);
      
       });
}

sendInterviewRequestEmail(applicant: any) {
  // set up the email template parameters
  const templateParams = {
    to_email: applicant.email,
    subject: 'Interview Request',
    message: 'Dear  Nikhil Kumar  We Want You to take  Interview  Of' + applicant.full_name + ',\n\nand his has applied on the job whose job id is this ' + applicant.job_postings_id + ' position. Please reply to this email with your availability.\n\nSincerely,\nThe HR team'
  };

  emailjs.send('service_49kozns', 'template_dzsqhnh', templateParams, 'oy6U5tgOSG0ikZIQU')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    }, (error) => {
      console.log('FAILED...', error);
    });

    Swal.fire('','Interview has beed scheduled and mail sent to Interviewe','success')
  
}
}
