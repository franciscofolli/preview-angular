import { Component, Input, OnInit } from '@angular/core';
import { hasValidValue } from '../../../utils/util';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss']
})
export class DateInputComponent implements OnInit {
  @Input() label: string | any;
  @Input() errorIsEmpty: string | undefined;

  content: string = <any>new Date();
  hasError: boolean | undefined;

  ngOnInit(): void {
    this.initValues();
  }

  onChangeDate(event: any): void {
    if (hasValidValue(event)) this.hasError = false;
    else this.hasError = true;
  }

  private initValues() {
    this.hasError = true;
  }
}
