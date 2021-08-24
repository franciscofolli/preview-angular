import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { CoreInteceptor } from './interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  providers: [
    CoreInteceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CoreInteceptor,
      multi: true
    }
  ]
})
export class InterceptorModule { }
