import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() label: string | any;
  @Input() errorIsEmpty: string | any;
  @Input() mask: string | any;
  @Input() readonly: boolean | any;

  content: string | any;
  hasError: boolean | any;
  loadComponent: boolean | any;

  ngOnInit(): void {
    this.initValues();
  }

  changeEvent(event: any): void {
    if (this.content && this.content.length > 0) this.hasError = false;
    else this.hasError = true;
  }

  private initValues(): void {
    if (this.errorIsEmpty !== undefined && this.content !== undefined)
      this.hasError = true;
    else this.hasError = false;
  }
}
