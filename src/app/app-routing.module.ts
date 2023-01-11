import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { CleanLayoutComponent } from './layouts/clean-layout/clean-layout.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { StudentDetailComponent } from './pages/student-detail/student-detail.component';

const routes: Routes = [

  // dashboard-layout
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'students',
        component: StudentsPageComponent
      },
      {
        path: 'courses',
        component: CoursesPageComponent
      },
      {
        path: 'student/:id',
        component: StudentDetailComponent
      }
    ],
  },

  // clean-layout
  {
    path: 'authentication',
    component: CleanLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginPageComponent
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})


export class AppRoutingModule { }
