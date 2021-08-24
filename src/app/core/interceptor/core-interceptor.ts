import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { awaitFast } from '../../../utils/util';
import { environment } from '../../../environments/environment';

const BASE_URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class CoreInteceptor implements HttpInterceptor {
  intercept(
    original_request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let requestResult = this.appendDomainToUrl(original_request);
    // requestResult = this.appendBranchToQueryParam(requestResult);
    return next.handle(requestResult);
  }

  private appendDomainToUrl(request: HttpRequest<any>): HttpRequest<any> {
    const domain = BASE_URL;
    const urlWithDomain = `${domain}${request.url}`;
    return request.clone({
      url: urlWithDomain
    });
  }

  // private appendBranchToQueryParam(
  //   request: HttpRequest<any>
  // ): HttpRequest<any> {
  //   let branch: string;
  //   let codTec: string;

  //   if (
  //     request.url.indexOf('ASAPI009') > -1 &&
  //     !(request.url.indexOf('filial') > -1)
  //   ) {
  //     while (branch === undefined) {
  //       codTec = sessionStorage.getItem('id');
  //       branch = sessionStorage.getItem('branch');
  //       awaitFast(500);
  //     }

  //     let queryBranch =
  //       request.url.indexOf('?') > -1
  //         ? `&filial=${branch}`
  //         : `?filial=${branch}`;

  //     queryBranch = `${queryBranch}&codtec=${codTec}`;

  //     return request.clone({
  //       url: `${request.url}${queryBranch}`
  //     });
  //   }

  //   return request.clone({
  //     url: request.url
  //   });
  // }
}
