import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from 'src/app/models/student.model';


@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.scss']
})
export class StudentDialogComponent implements OnInit {

  ngOnInit(): void {
  }

  firstNameControl = new FormControl('');
  lastNameControl = new FormControl('');

  studentForm = new FormGroup({
    firstName: this.firstNameControl,
    lastName: this.lastNameControl
  });

  constructor(private readonly dialogRef: MatDialog, @Inject(MAT_DIALOG_DATA) public data: Student | null){
    if (data) {
      this.studentForm.patchValue(data);
    }
  }

  close() {
    this.dialogRef.closeAll();
  }
}
