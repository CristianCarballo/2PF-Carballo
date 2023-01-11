import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { MatDialog } from '@angular/material/dialog';
import { StudentDialogComponent } from '../../shared/components/student-dialog/student-dialog.component';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss']
})
export class StudentsPageComponent implements OnInit {

  ngOnInit(): void {
  }

  students: Student[] = [
    new Student(1, 'Cris', 'Morena', false),
    new Student(2, 'Ariel', 'Sirenita', true),
    new Student(3, 'Lorem', 'Itsum', true),
    new Student(4, 'Juan', 'Mecánico', false),
    new Student(5, 'Dibu', 'Martínez', true),
    new Student(6, 'Pika', 'Chu', false),
  ];

  displayedColumns = ['id', 'firstName', 'lastName', 'isActive', 'edit', 'delete'];

  constructor(private readonly dialogService: MatDialog){}

  addStudent() {
    const dialog = this.dialogService.open(StudentDialogComponent);
    dialog.afterClosed().subscribe((value)=> {
      if (value) {
        const lastId = this.students[this.students.length - 1]?.id;
        this.students = [...this.students, new Student(lastId + 1, value.firstName, value.lastName, true)];
      }
    });
  }

  editStudent(student: Student) {
    const dialog = this.dialogService.open(StudentDialogComponent, { data: student });

    dialog.afterClosed().subscribe(
      (data) => {
      if (data) {
        this.students = this.students.map(
          (stu) => stu.id === student.id ? {...stu, ...data} : stu
        );
      }
    })
  }

  deleteStudent(student: Student) {
    this.students = this.students.filter(
      (stu) => stu.id !== student.id
      );
  }

}
