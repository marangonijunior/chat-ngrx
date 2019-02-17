import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ServiceJson {
    constructor(
      public http:Http
    ) {}

    getJson(url:string) {
      return this.http.get(url).map((res:Response) => res.json());
    }

    
}
