import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/app/question.model';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.scss']
})
export class PhoneNumberComponent implements OnInit {

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
