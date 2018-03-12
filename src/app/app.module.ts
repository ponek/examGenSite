import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ExamComponent } from './components/exam/exam.component';
import { ExamService } from './services/exam.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    ExamComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ExamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
