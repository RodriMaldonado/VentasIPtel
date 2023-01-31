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

  optsCalles:any = [];

  obtenerSucursalesSiga():Observable<any>{
     //obtenemos las sucursales de SIGA
     return this.opts.length ?
     of (this.opts) :

  this.http.get("https://consultas.iptel.com.ar/api_iptelplay/obtenersucursales.php").pipe(tap(data => this.opts = data))  
  
}

obtenerCallesSiga(idSucursal:number):Observable<any>{

  return this.optsCalles.length ?
     of (this.optsCalles) :

  this.http.get("https://consultas.iptel.com.ar/api_iptelplay/obtenercalles.php?idSucursal="+idSucursal).pipe(tap(data => this.opts = data))  
}
}  
