import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }

  getStudentById(id: string | number) {
    return new Student(Number(id), 'Ariel', 'Sirenita', true);
  }
}
