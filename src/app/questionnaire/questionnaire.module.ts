import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { QuestionnaireRoutingModule } from './questionnaire-routing.module';
import { TextAnswerComponent } from './text-answer/text-answer.component';
import { ContinueButtonComponent } from './continue-button/continue-button.component';
import { QuestionnaireComponent } from './questionnaire.component';
import { SingleOptionComponent } from './single-option/single-option.component';
import { MultiOptionComponent } from './multi-option/multi-option.component';
import { NumberAnswerComponent } from './number-answer/number-answer.component';
import { PhoneNumberComponent } from './phone-number/phone-number.component';

@NgModule({
  declarations: [QuestionnaireComponent, TextAnswerComponent, ContinueButtonComponent, SingleOptionComponent, MultiOptionComponent, NumberAnswerComponent, PhoneNumberComponent],
  imports: [
    CommonModule,
    QuestionnaireRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class QuestionnaireModule { }
