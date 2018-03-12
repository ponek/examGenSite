import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Exam} from '../components/exam/model/exam';

@Injectable()
export class ExamService {

  constructor(private http: Http) { }

  private albumsUrl = 'http://localhost:9000/exam/generateNewExam';

  public getExam() : Observable<Exam> {
  // ...using get request
      return this.http.get(this.albumsUrl)
      // ...and calling .json() on the response to return data
        .map((res:Response) => {
          console.log(res.json())
          res.json()
        }).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }  

}
