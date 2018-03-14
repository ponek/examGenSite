import { Component, OnInit } from '@angular/core';
import {ExamService} from '../../services/exam.service';
import {Exam,Question,Option} from './model/exam';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  exam : Exam;

  constructor(private examService: ExamService) { }

  ngOnInit() {
    this.getExam();
  }

  getExam(): void {
    this.examService.getExam()
      .subscribe(exam => this.exam = exam);
  }

  getResult(): void {
    
  }

}
