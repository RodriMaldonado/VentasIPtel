import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs';
import { Observable } from "rxjs-compat/Observable"


@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(  private http : HttpClient  ) { }
 


    getData(): Observable<any>{
     return this.http.get('https://localhost:7291/api/getlocations')
     .pipe(
      map((response:[]) => response.map(localidad => localidad["name"]))
      ) 
      /* return this.http.get("https://consultas.iptel.com.ar/api_iptelplay/index.php"); */
  } 
}
