import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PoFieldModule } from '@po-ui/ng-components';

import { InputComponent } from './input/input.component';
import { RadioGroupComponent } from './radio-group/radio-group.component';
import { SelectComponent } from './select/select.component';
import { DateInputComponent } from './date-input/date-input.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';

@NgModule({
  declarations: [
    InputComponent,
    RadioGroupComponent,
    SelectComponent,
    DateInputComponent,
    MultiSelectComponent
  ],
  imports: [CommonModule, PoFieldModule, FormsModule],
  exports: [
    InputComponent,
    RadioGroupComponent,
    SelectComponent,
    DateInputComponent,
    MultiSelectComponent
  ]
})
export class SharedModule {}
