import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {

  constructor(
    private readonly route: ActivatedRoute, 
    private readonly studentsService: StudentsService
    ) {
    const params = this.route.snapshot.params;
    console.log(this.studentsService.getStudentById(params['id']));
  }

  ngOnInit(): void {
  }

}
