import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { PoBreadcrumbModule, PoButtonModule, PoContainerModule, PoDividerModule, PoFieldModule, PoInfoModule, PoInputComponent, PoLoadingModule, PoModalModule, PoPageModule, PoWidgetModule } from '@po-ui/ng-components/lib/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({

  declarations: [SignupComponent],
  imports: [
    CommonModule,
    PoInfoModule,
    PoButtonModule,
    PoContainerModule,
    PoDividerModule,
    PoBreadcrumbModule,
    PoFieldModule,
    PoWidgetModule,
    PoPageModule,
    PoModalModule,
    PoLoadingModule,
    SharedModule,
    FormsModule,
    PoInputComponent,
    ReactiveFormsModule
  ]
})
export class SignupModule { }
