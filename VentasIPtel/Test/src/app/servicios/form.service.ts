import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http:HttpClient) { }

  obtenerSucursalesSiga():Observable<any>{
     //obtenemos las sucursales de SIGA
     
  const url = "https://consultas.iptel.com.ar/api_iptelplay/obtenersucursales.php"; 
  return this.http.get(url);

  }
}
