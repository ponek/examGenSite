import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {Exam} from '../components/exam/model/exam';
import { tap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class ExamService {

  constructor(private http: Http) { }

  private serviceUrl = 'http://localhost:9000/exam/generateNewExam';

  public getExam() : Observable<Exam> {
      return this.http.get(this.serviceUrl)
        .map((res:Response) => {
          console.log('resp in service start')
          console.log(res.json())
          console.log('resp in service end')
          res.json()
        }).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }  

  public getEx(): Observable<Exam> {
    return of(Exam);
  }


}
