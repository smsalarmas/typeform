import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/app/question.model';

@Component({
  selector: 'app-email-answer',
  templateUrl: './email-answer.component.html',
  styleUrls: ['./email-answer.component.scss']
})
export class EmailAnswerComponent implements OnInit {

  @Input()
  question: Question;

  @Output()
  scrollNext = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  /**
   * On Enter key press
   * @param event
   */
  onPressEnter(event) {
    if(event.keyCode == 13) {
      this.gotoNext();
    }
  }

  /**
   * Go to next
   */
  gotoNext() {
    this.scrollNext.emit({
      question: this.question,
      destination: ''
    });
  }


}
