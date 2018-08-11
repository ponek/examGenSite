import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { tap, catchError, map } from 'rxjs/operators';
import { Exam,Question,Option } from '../components/exam/model/exam';
import { MessageService } from './message.service';

import {ExamMock } from '../components/exam/model/mock-exam';

@Injectable()
export class ExamService {

  private serviceUrl = 'http://localhost:9000/exam/generateNewExam';

  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  getExam(): Observable<Exam> {
    this.messageService.add('ExamService: fetched exam');

    //For testing without the go server
    //return of (ExamMock);
    
    var empty : Exam;
    return this.http.get<Exam>(this.serviceUrl)
      .pipe(
        //tap(exam => this.log('fetched exam in tap')),
        map((response) => {
          
          response.questions.forEach(quest => {
            quest.options.forEach(opt => {
              opt.selected = false;
            })
          });

          this.log('fetched exam in map');

          return response;
        }),
        catchError(this.handleError('getExam',empty))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
  private log(message: string) {
    this.messageService.add('ExamService: ' + message);
  }
}
