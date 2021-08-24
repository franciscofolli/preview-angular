import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { CoreInteceptor } from './core-interceptor';

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
export class CoreInterceptorModule {}
