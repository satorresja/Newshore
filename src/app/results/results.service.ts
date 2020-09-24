import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models/response';
import { map } from 'rxjs/operators';
import { Input } from '../models/input';


@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  url: string = 'http://localhost:8080/api/flights/';

  constructor(private http: HttpClient) { }

  public getResults(input: string): Observable<Response[]> {

    return this.http.get(this.url.concat(input)).pipe(map(response => response as Response[]));
  }
}
