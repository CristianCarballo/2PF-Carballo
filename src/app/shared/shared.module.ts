import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDialogComponent } from './components/student-dialog/student-dialog.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { PageWrapperComponent } from './layout/page-wrapper/page-wrapper.component';
import { MyMaterialModule } from './modules/my-material.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StudentDialogComponent,
    HeaderComponent,
    NavbarComponent,
    PageWrapperComponent
  ],
  imports: [
    CommonModule,
    MyMaterialModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    StudentDialogComponent,
    HeaderComponent,
    NavbarComponent,
    PageWrapperComponent
  ]
})
export class SharedModule { }
