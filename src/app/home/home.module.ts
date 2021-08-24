import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoMenuModule } from '@po-ui/ng-components';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PoMenuModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
