import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { HttpService } from 'src/app/services/http_requests/http.service';
import { LoginRequest, LoginResponse } from '../models/login-model';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private http: HttpService) {}

  public executeLogin(payload: LoginRequest ): Observable<LoginResponse> {
    return this.http.post(`auth/authenticate`, payload);
  }

  public getAccess(id: string): Observable<any> {
    const params = new HttpParams().set('id', id);
    return this.http.get(`/ASAPI016/byUser?${params.toString()}`);
  }
}
