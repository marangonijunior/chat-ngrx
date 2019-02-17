import { Http, RequestOptions, Headers, Response, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class RequestService {

    // This service not work, only show how I do
    // Need insert token yet.

    baseURL = "example.com";

    constructor(
      private authHttp: AuthHttp,
      private http: Http,
      private requestOptions: RequestOptions
    ) {
        const headers = new Headers({
          'Content-Type': 'application/json'
        });
        this.requestOptions = new RequestOptions({
          withCredentials: true,
          headers
        });
    }

    public post(reqURL, body) {
      return this.http.post(this.baseURL + reqURL, body)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw('Server error'));
    }

    public get(reqURL) {
      return this.http.get(this.baseURL + reqURL)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw('Server error'));
    }

}
