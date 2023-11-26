import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HrloginformComponent } from './RolesLoginForm/hrloginform/hrloginform.component';
import { EmployeeloginformComponent } from './RolesLoginForm/employeeloginform/employeeloginform.component';
import { ManagerloginformComponent } from './RolesLoginForm/managerloginform/managerloginform.component';
import { EmployeeDashboardComponent } from './pages/employee-dashboard/employee-dashboard.component';
import { HrDashboardComponent } from './pages/hr-dashboard/hr-dashboard.component';
import { ManagerdashboardComponent } from './pages/managerdashboard/managerdashboard.component';
import { ManagercontentComponent } from './Managerpages/managercontent/managercontent.component';
import { JobpostingComponent } from './HrPages/jobposting/jobposting.component';
import { VacancyComponent } from './pages/vacancy/vacancy.component';
import { VacancydescriptionComponent } from './pages/vacancydescription/vacancydescription.component';
import { ApplicantsFormComponent } from './Shared/applicants-form/applicants-form.component';
import { TrackNewApplicantsComponent } from './HrPages/track-new-applicants/track-new-applicants.component';
import { ApplicantsdetailComponent } from './HrPages/applicantsdetail/applicantsdetail.component';
import { OnboardEmployeeComponent } from './Shared/onboard-employee/onboard-employee.component';
import { OffboardingComponent } from './HrPages/offboarding/offboarding.component';
import { MarkAttendanceComponent } from './Shared/mark-attendance/mark-attendance.component';
import { EmployeeDetailsComponent } from './Shared/employee-details/employee-details.component';
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
import { employeeGuard } from './Guard/employee.guard';
import { hrGuard } from './Guard/hr.guard';
import { managerGuard } from './Guard/manager.guard';


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'hrlogin',
    component: HrloginformComponent,
  },
  {
    path: 'employeelogin',
    component: EmployeeloginformComponent,
  },
  {
    path: 'managerlogin',
    component: ManagerloginformComponent,
  },
  {
    path: 'employeedashboard',
    component: EmployeeDashboardComponent,
    canActivate:[employeeGuard],
    children: [
      {
        path: '',
        component: EmployeeDetailsComponent,

        children: [
          {
            path: 'profile/:id',
            component: ViewProfileComponent,
          },
          {
            path: 'viewattendance/:id',
            component: ViewAttendanceComponent,
          },
          {
            path: 'applyforleave/:id',
            component: ApplyforleaveComponent,
          },
          { path: 'markAttendance/:id', component: MarkAttendanceComponent },
          {path:'logdailytask/:id', component:PerformanceFormComponent}
        ],
      },
      { path: 'markAttendance', component: MarkAttendanceComponent },
    ],
  },
  {
    path: 'hrdashboard',
    component: HrDashboardComponent,
    canActivate:[hrGuard],
    children: [
         {
        path: '',
        component: HrPersonalprofileComponent,
        children:
        [
          { path: 'profile/:id', component: ViewProfileComponent },
          { path: 'viewattendance/:id', component: ViewAttendanceComponent },
          { path: 'applyforleave/:id', component: ApplyforleaveComponent },
          { path: 'markAttendance/:id', component: MarkAttendanceComponent },
        ]
      },
      
      {
        path: 'jobposting',
        component: JobpostingComponent,
      },
      {
        path: 'offboarding',
        component: OffboardingComponent,
      },
      {
        path: 'leaverequest',
        component: LeaveApprovalComponent,
      },
      {
        path: 'empdetails',
        component: HrEmployeeDetailComponent,

        children: [
          { path: 'profile/:id', component: ViewProfileComponent },
          { path: 'viewattendance/:id', component: ViewAttendanceComponent },
          { path: 'applyforleave/:id', component: ApplyforleaveComponent },
          { path: 'markAttendance/:id', component: MarkAttendanceComponent },
      
        ],
      },

      { path: 'markAttendance', component: MarkAttendanceComponent },
      {
        path: 'newapplicants',
        component: TrackNewApplicantsComponent,
        children: [
          {
            path: 'detail/:id',
            component: ApplicantsdetailComponent,
          },
        ],
      },

      {
        path: 'offboarding',
        component: OffboardingComponent,
      },
      {
        path: 'generateEmpolyeeemail',
        component: OnboardEmployeeComponent,
      },
    ],
  },
  {
    path: 'managerDashboard',
    component: ManagerdashboardComponent,
    canActivate:[managerGuard],
    children: [
      {
        path:"",
        component:ManagerpersonalprofileComponent,
        children:[
          
            {
              path: 'profile/:id',
              component: ViewProfileComponent,
            },
            {
              path: 'viewattendance/:id',
              component: ViewAttendanceComponent,
            },
            {
              path: 'applyforleave/:id',
              component: ApplyforleaveComponent,
            },
            { path: 'markAttendance/:id', component: MarkAttendanceComponent },
          
        ]
      },
      { 
         
        path: 'managercontent',
        component: ManagercontentComponent,
      },
      { path: 'markAttendance', component: MarkAttendanceComponent },

      {
        path: 'leaverequest',
        component: LeaveApprovalComponent,
      },
      {
        path: 'employeedetail',
        component: ManagerDetailComponent,
        children: [
          {
            path: 'profile/:id',
            component: ViewProfileComponent,
          },
          {
            path: 'viewattendance/:id',
            component: ViewAttendanceComponent,
          },
         {
          path:"feedback/:id",
          component: FeedbackComponent,
         },
          {
            path: 'applyforleave/:id',
            component: ApplyforleaveComponent,
          }
        ],
      },
    ],
  },
  {
    path: 'vacancy',
    component: VacancyComponent,
  },
  {
    path: 'vacancy/:id',
    component: VacancydescriptionComponent,
  },
  {
    path: 'applying/:id',
    component: ApplicantsFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
{
}
