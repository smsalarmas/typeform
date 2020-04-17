import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { QuestionnaireService } from './questionnaire.service';
import { Observable } from 'rxjs';
import { Question } from '../question.model';

import { trigger, state, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],

  animations: [
    trigger('move', [
      transition('void =>*',[
        style({transform:'translateX(100%)'}),
        animate(2000)
      ])


    ])
  ]
})
export class QuestionnaireComponent implements OnInit {
  questions$: Observable<Question>;
  questionsActual: Question;
  AllDataquestions: any;
  mostrar = 0;
  /**
   * Question Service
   * @param {QuestionnaireService} questionnaireService
   * @param {Element} el
   */
  constructor(private questionnaireService: QuestionnaireService, private el: ElementRef) {
    this.questions$ = this.questionnaireService.getQuestions();
    this.questions$.subscribe((Data: any ) => {
      console.log('constructor');
      this.AllDataquestions = Data;
      this.questionsActual = Data[this.mostrar];
    } )

  }

  /**
   * On Init function
   */
  ngOnInit() {

    this.el.nativeElement.addEventListener('scroll', ($event) => {
      this.onWindowScroll();
    })
  }

  /**
   * On Window Scroll Event, element in view port should be focused
   */
  onWindowScroll() {
    let questions = this.el.nativeElement.querySelectorAll('.page_wrapper');
    //we'll do some stuff here when the window is scrolled
    questions.forEach((question) => {
      var etop = question.getBoundingClientRect().top;
      var diff = etop - window.pageYOffset;
      if (diff<300) {
        this.reinitState(question, questions);
      }
    });
  }

  /**
   * Re-initiate focus on scroll
   * @param question
   * @param elements
   */
  reinitState(question, questions) {
    questions.forEach(elem => {
      elem.classList.remove('focus');
    })
    question.classList.add('focus');
  }

  /**
   * Go to next question
   * @param event
   */
  gotoNext(event) {
    this.mostrar = this.mostrar + 1;
    this.questionsActual = this.AllDataquestions[this.mostrar];


    /*let node = event.destination ? document.getElementById(event.destination) : document.getElementById(event.question.identifier);
    console.log(node);
    this.el.nativeElement.scrollTo({
      left: 0,
      top: event.destination ? node.offsetTop : node.offsetTop + 500
    });

    if(event.destination) {
      node.querySelector('input').focus();
      node.querySelector('input').disabled = false;
    } else {
      node.nextElementSibling.querySelector('input').focus();
      node.nextElementSibling.querySelector('input').disabled = false;
    }*/
  }
}
