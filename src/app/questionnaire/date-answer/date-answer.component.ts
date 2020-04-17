import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Question } from 'src/app/question.model';

@Component({
  selector: 'app-date-answer',
  templateUrl: './date-answer.component.html',
  styleUrls: ['./date-answer.component.scss']
})
export class DateAnswerComponent implements OnInit {

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
