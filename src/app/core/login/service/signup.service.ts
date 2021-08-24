import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http_requests/http.service';
import { SignUpRequest } from '../models/login-model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpService) {}

  public registerNewUser(payload: SignUpRequest ): Observable<any> {
    return this.http.post(`auth/register`, payload);
  }

}