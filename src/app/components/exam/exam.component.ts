import { Component, OnInit } from '@angular/core';
import {ExamService} from '../../services/exam.service';
import {Exam} from './model/exam';
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  exam: Exam;
  private model = new Exam([]);

  constructor(private examService: ExamService) { }

  ngOnInit() {
    this.loadExam();
  }

  loadExam() {
    this.examService.getExam()
                      .subscribe(
                          exam => this.exam = exam, //Bind to view
                           err => {
                               // Log errors if any
                               console.log(err);
                           });
 }

}
