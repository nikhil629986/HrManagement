import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HrloginformComponent } from './RolesLoginForm/hrloginform/hrloginform.component';
import { EmployeeloginformComponent } from './RolesLoginForm/employeeloginform/employeeloginform.component';
import { ManagerloginformComponent } from './RolesLoginForm/managerloginform/managerloginform.component';
import { HrDashboardComponent } from './pages/hr-dashboard/hr-dashboard.component';
import { EmployeeDashboardComponent } from './pages/employee-dashboard/employee-dashboard.component';
import { ManagerdashboardComponent } from './pages/managerdashboard/managerdashboard.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { EmployeesidebarComponent } from './Sidebar/employeesidebar/employeesidebar.component';
import { ManagersidebarComponent } from './Sidebar/managersidebar/managersidebar.component';
import { HrsidebarComponent } from './Sidebar/hrsidebar/hrsidebar.component';
import { ManagercontentComponent } from './Managerpages/managercontent/managercontent.component';
import { JobpostingComponent } from './HrPages/jobposting/jobposting.component';
import { VacancyComponent } from './pages/vacancy/vacancy.component';
import {MatTableModule} from '@angular/material/table';
import { VacancydescriptionComponent } from './pages/vacancydescription/vacancydescription.component';
import { ApplicantsFormComponent } from './Shared/applicants-form/applicants-form.component';
import { TrackNewApplicantsComponent } from './HrPages/track-new-applicants/track-new-applicants.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplicantsdetailComponent } from './HrPages/applicantsdetail/applicantsdetail.component';
import { OnboardEmployeeComponent } from './Shared/onboard-employee/onboard-employee.component';
import { OffboardingComponent } from './HrPages/offboarding/offboarding.component';
import { MarkAttendanceComponent } from './Shared/mark-attendance/mark-attendance.component';
import { EmployeeDetailsComponent } from './Shared/employee-details/employee-details.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ViewProfileComponent } from './Shared/view-profile/view-profile.component';
import { ViewAttendanceComponent } from './Shared/view-attendance/view-attendance.component';
import { HrEmployeeDetailComponent } from './Shared/hr-employee-detail/hr-employee-detail.component';
import { ManagerDetailComponent } from './Shared/manager-detail/manager-detail.component';
import { ApplyforleaveComponent } from './Shared/applyforleave/applyforleave.component';
import { LeaveApprovalComponent } from './HrPages/leave-approval/leave-approval.component';
import { ManagerpersonalprofileComponent } from './Shared/managerpersonalprofile/managerpersonalprofile.component';
import { HrPersonalprofileComponent } from './Shared/hr-personalprofile/hr-personalprofile.component';
import { PerformanceFormComponent } from './performance-form/performance-form.component';
import { FeedbackComponent } from './Shared/feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomepageComponent,
    HrloginformComponent,
    EmployeeloginformComponent,
    ManagerloginformComponent,
    HrDashboardComponent,
    EmployeeDashboardComponent,
    ManagerdashboardComponent,
    EmployeesidebarComponent,
    ManagersidebarComponent,
    HrsidebarComponent,
    ManagercontentComponent,
    JobpostingComponent,
    VacancyComponent,
  
    VacancydescriptionComponent,
       ApplicantsFormComponent,
       TrackNewApplicantsComponent,
       ApplicantsdetailComponent,
       OnboardEmployeeComponent,
       OffboardingComponent,
       MarkAttendanceComponent,
       EmployeeDetailsComponent,
       ViewProfileComponent,
       ViewAttendanceComponent,
       HrEmployeeDetailComponent,
       ManagerDetailComponent,
       ApplyforleaveComponent,
       LeaveApprovalComponent,
       ManagerpersonalprofileComponent,
       HrPersonalprofileComponent,
       PerformanceFormComponent,
       FeedbackComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    ToastrModule.forRoot()


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
