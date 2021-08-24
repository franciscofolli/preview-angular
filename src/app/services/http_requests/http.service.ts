import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take, timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {}

  public get(endpoint: string, queryParams = {}): Observable<any> {
    const params = new HttpParams({
      fromObject: queryParams
    });
    return this.http.get(endpoint, { params }).pipe(take(1));
  }

  public post(
    endpoint: string,
    payload: object = {},
    queryParams = {}
  ): Observable<any> {
    const params = new HttpParams({
      fromObject: queryParams
    });
    return this.http
      .post(endpoint, payload, { params: params })
      .pipe(timeout(160000), take(1));
  }

  public put(endpoint: string, payload: object): Observable<any> {
    return this.http.put(endpoint, payload).pipe(take(1));
  }

  public getAsync(endpoint: string, queryParams = {}): Promise<any> {
    const params = new HttpParams({
      fromObject: queryParams
    });
    return this.http.get(endpoint, { params }).toPromise();
  }

  public delete(endpoint: string): Observable<any> {
    return this.http.delete(endpoint).pipe(take(1));
  }
}
