import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyMaterialModule } from '../shared/modules/my-material.module';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { SharedModule } from '../shared/shared.module';
import { StudentsPageComponent } from './students-page/students-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';


@NgModule({
  declarations: [
    CoursesPageComponent,
    StudentsPageComponent,
    LoginPageComponent,
    StudentDetailComponent
  ],
  imports: [
    CommonModule,
    MyMaterialModule,
    SharedModule
  ]
})
export class PagesModule { }
