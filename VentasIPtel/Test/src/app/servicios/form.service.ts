import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { tap , map } from 'rxjs/operators';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http:HttpClient) { }

  opts:any = [];

  obtenerSucursalesSiga():Observable<any>{
     //obtenemos las sucursales de SIGA
     return this.opts.length ?
     of (this.opts) :

  this.http.get("https://consultas.iptel.com.ar/api_iptelplay/obtenersucursales.php").pipe(tap(data => this.opts = data))  
  
}
}  
