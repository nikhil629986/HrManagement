import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Jobposting } from 'src/app/Model/Ijobposting';
import { JobPostingService } from 'src/app/Services/job-posting.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-jobposting',
  templateUrl: './jobposting.component.html',
  styleUrls: ['./jobposting.component.css']
})
export class JobpostingComponent implements OnInit {
  jobForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,private jobpostingservice:JobPostingService) { }

  ngOnInit() {
    this.jobForm = this.formBuilder.group({
      department: ['', Validators.required],
      job_title: ['', Validators.required],
      description: ['', Validators.required],
      qualification_requirements: ['', Validators.required],
      experience_requirements: ['', Validators.required],
      salary_range: ['', Validators.required],
      image_url: ['']
    });
  }

  onSubmit() {
    this.jobpostingservice.createjob(this.jobForm.value).subscribe((res) =>
      {  
        Swal.fire('','Post Successfully posted on Job Portal','success')
     
      }
    )
}
}