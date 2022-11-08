import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobListPageComponent } from './pages/job-list-page/job-list-page.component';
import { JobItemPageComponent } from './pages/job-item-page/job-item-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

const routes: Routes = [
  {path: 'PET_Job_list_ANGULAR', redirectTo: 'PET_Job_list_ANGULAR/job-list', pathMatch: 'full'},
  {path:'PET_Job_list_ANGULAR/job-list', component: JobListPageComponent, title: 'Job List'},
  {path:'PET_Job_list_ANGULAR/job-list/:id', component: JobItemPageComponent, title: 'Job'},
  {path:'**', component: ErrorPageComponent, title: '404 Not Found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
