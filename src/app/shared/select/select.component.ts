import { Component, Input, OnInit } from '@angular/core';
import { PoSelectOption} from '@po-ui/ng-components';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() label: any;
  @Input() errorIsEmpty: string | any;
  @Input() items: PoSelectOption | any;
  @Input() readonly: boolean | any;

  hasError: boolean | any;
  content: string | any;

  ngOnInit(): void {
    this.initValues();
  }

  onChangeSelect(): void {
    this.hasError = false;
  }

  private initValues() {
    this.hasError = true;
  }
}
