import { Component, Input, OnInit } from '@angular/core';
import { PoMultiselectOption } from '@po-ui/ng-components';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {
  @Input() label: string | undefined;
  @Input() errorIsEmpty: string | undefined;
  @Input() options: PoMultiselectOption | any;

  content: Array<PoMultiselectOption> | undefined;
  hasError: boolean | undefined;

  ngOnInit(): void {
    this.initValues();
  }

  changeEvent(): void {
    if (this.content && this.content.length > 0) this.hasError = false;
    else this.hasError = true;
  }

  private initValues() {
    this.hasError = true;
  }
}
