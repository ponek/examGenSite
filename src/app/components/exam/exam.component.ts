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

  onSelect(question: Question, option: Option) {
    if (question.type === 1) {
      question.options.forEach((x) => { if (x.id !== option.id) x.selected = false; });
    }
  }

  isAnswered(question: Question) {
    return question.options.find(x => x.selected) ? 'Answered' : 'Not Answered';
  };

  isCorrect(question: Question) {
    return question.options.every(x => x.selected === x.isAnswer) ? 'correct' : 'wrong';
  };

  onSubmit() {
    let answers = [];
    /*this.exam.questions.forEach(x => answers.push({ 'id': this.quiz.id, 'questionId': x.id, 'answered': x.answered }));

    // Post your data to the server here. answers contains the questionId and the users' answer.
    console.log(this.quiz.questions);
    this.mode = 'result';*/
  }
}
