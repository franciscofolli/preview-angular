import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from '../services/http_requests/http.service';
import { LoginModule } from './login/login.module';
import { CoreInterceptorModule } from './interceptor/core-interceptor.module';


@NgModule({
  imports: [
    CommonModule,
    LoginModule,
    CoreInterceptorModule
  ],
  declarations: [],
  providers: [HttpService]
})
export class CoreModule {}
