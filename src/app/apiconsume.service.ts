import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiconsumeService {

  constructor(private http: HttpClient ) { }
  APIURL:string="http://localhost:8081/weatherforecast";
  GetWetherForecost():Observable<any>
 {
   //debugger;
   return this.http.get<any>("http://localhost:8081/weatherforecast");
 }
}
