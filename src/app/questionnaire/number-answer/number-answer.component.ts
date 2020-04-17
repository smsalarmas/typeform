import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Question } from 'src/app/question.model';

@Component({
  selector: 'app-number-answer',
  templateUrl: './number-answer.component.html',
  styleUrls: ['./number-answer.component.scss']
})
export class NumberAnswerComponent implements OnInit {

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
