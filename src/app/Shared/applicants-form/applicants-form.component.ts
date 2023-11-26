import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JobApplication } from 'src/app/Model/IApplicants';
import { JobPostingService } from 'src/app/Services/job-posting.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-applicants-form',
  templateUrl: './applicants-form.component.html',
  styleUrls: ['./applicants-form.component.css']
})
export class ApplicantsFormComponent implements OnInit {
  applicationForm!: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router,
     private fb: FormBuilder,private jobpostingservice:JobPostingService) {}
  ngOnInit() {
    this.createApplicationForm();
    this.route.params.subscribe(params => {
      const searchQuery = params['id'];
      this.applicationForm.patchValue({
        job_postings_id: searchQuery
      });
      // Disables the Job Postings ID field
    });
  }
  createApplicationForm() {
    this.applicationForm = this.fb.group({
      job_postings_id: [''],
      full_name: [''],
      resume: [''],
      email: [''],
      phone_number: [''],
      address: [''],
      education: [''],
      work_experience: [''],
      cover_letter: [''],
      status: ['Pending'],
      date_applied: ['new Date().toISOString()']
    });
  }
  onSubmit() {
    this.jobpostingservice.postallapplication(this.applicationForm.value).subscribe((res) =>
    {    console.log(JSON.stringify(this.applicationForm.value));
      Swal.fire('Applied','Applied Successfully And Wait For Further Notification','success')
   
    }
  )
    console.log(this.applicationForm.value);
  }
}














