import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoButtonModule } from '@po-ui/ng-components';

import {
  PoPageLoginModule,
  PoModalPasswordRecoveryModule
} from '@po-ui/ng-templates';

import { LoginComponent } from './login.component';
import {
  PoInfoModule,
  PoContainerModule,
  PoLoadingModule
} from '@po-ui/ng-components';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    PoPageLoginModule,
    PoModalPasswordRecoveryModule,
    PoInfoModule,
    PoButtonModule ,
    PoContainerModule,
    PoLoadingModule
  ]
})
export class LoginModule {}