import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ExamComponent } from './components/exam/exam.component';
import { ExamService } from './services/exam.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'
import { MessagesComponent } from './components/messages/messages.component';
import { MessageService } from './services/message.service';


@NgModule({
  declarations: [
    AppComponent,
    ExamComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    ExamService,
    MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
