import { Component, Input, OnInit } from '@angular/core';

import { PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss']
})
export class RadioGroupComponent implements OnInit {
  @Input() label: string | undefined;
  @Input() option: PoRadioGroupOption | any;
  @Input() errorIsEmpty: string | undefined;

  public hasError: boolean | undefined;
  public content: string | undefined;

  ngOnInit(): void {
    this.initValues();
  }

  onChangeRadio(event: any): void {
    this.hasError = false;
  }

  private initValues() {
    this.hasError = true;
  }
}
