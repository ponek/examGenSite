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

  exam: Exam = {
    id: 'estd',
    questions: []
  }
  
  private model = new Exam([]);

  constructor(private examService: ExamService) { }

  ngOnInit() {
    this.loadExam();
  }

  loadExam() {
    console.log('calling');
    this.examService.getExam()
                      .subscribe(
                          (exam) => { 
                            //console.log('gotback: ' + JSON.stringify(exam))
                            this.exam = exam
                          }, //Bind to view
                           err => {
                               // Log errors if any
                               console.log(err);
                           });
 }

}
