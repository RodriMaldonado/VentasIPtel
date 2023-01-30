import { Component, OnInit } from '@angular/core';
import {FormControl,Validators} from '@angular/forms'
import { Observable } from 'rxjs';
import { map, startWith,debounceTime,distinctUntilChanged,switchMap,filter } from 'rxjs/operators';
import { FormService } from 'src/app/servicios/form.service';


@Component({
  selector: 'app-formulario-carga-datos',
  templateUrl: './formulario-carga-datos.component.html',
  styleUrls: ['./formulario-carga-datos.component.css']
})
export class FormularioCargaDatosComponent implements OnInit {
  title = 'autocomplete';

  email = new FormControl('', [Validators.required, Validators.email]);
  myControl = new FormControl();
  Sucursal = [];
  filteredOptions: Observable<any>;
  /* localidades: string[] = ["Saldan","Venado tuerto","Cordoba","Velez sarsfield"]
 */
  



  constructor(private service: FormService) {
    this.filteredOptions = this.myControl.valueChanges.pipe(
     startWith(''),
     debounceTime(400),
     distinctUntilChanged(),
     switchMap(val => {
           return this._filter(val || '')
      }) 
   )

  }
 
 _filter(val: any): Observable<any> {

   return this.service.obtenerSucursalesSiga()
    .pipe(
      map(response => response.datosSucursales.Sucursal.filter((Sucursal:any) => { 
        return Sucursal.Nombre.toLowerCase().indexOf(val.toLowerCase()) === 0
      }))
    )
  }  

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debe ingresar un email';
    }

    return this.email.hasError('email') ? 'Email invalido' : '';
  }

  ngOnInit() {
      
  }


}

  


