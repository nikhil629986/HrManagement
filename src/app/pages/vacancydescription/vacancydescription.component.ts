import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobPostingService } from 'src/app/Services/job-posting.service';
import { Jobposting } from 'src/app/Model/Ijobposting';

@Component({
  selector: 'app-vacancydescription',
  templateUrl: './vacancydescription.component.html',
  styleUrls: ['./vacancydescription.component.css']
})
export class VacancydescriptionComponent {
  searchResults!: Jobposting;
  constructor(private route: ActivatedRoute,private JobPostingService:JobPostingService,  private router: Router,){}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const searchQuery = params['id'];
      this.JobPostingService.fetcalljobsusingid(searchQuery).subscribe((results: any) => {
        this.searchResults = results;
        console.log(this.searchResults);
      });
    });
  }
popupform(postingid:any){
console.log(postingid);
  this.router.navigate(['/applying', postingid]);
}


}
