import { Component, OnInit } from '@angular/core';
import {FormControl,Validators} from '@angular/forms'
import { Observable } from 'rxjs';
import { map, startWith,debounceTime,distinctUntilChanged,switchMap,filter } from 'rxjs/operators';
import { FormService } from 'src/app/servicios/formCargaService/form.service';


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
  filteredOptionsCalles: Observable<any>;

  calle1!:string;
  idSucursal!:number;
  listaCalles:[];
  /* localidades: string[] = ["Saldan","Venado tuerto","Cordoba","Velez sarsfield"]
 */
  


/* Asignamos un tiempo de espera para mostrar las sucursales, input vacio, etc */
  constructor(public service: FormService) {
    /* Control para sucursales */
    this.filteredOptions = this.myControl.valueChanges.pipe(
     startWith(''),
     debounceTime(400),
     distinctUntilChanged(),
     switchMap(val => {
           return this._filter(val || '')
      }) 
   )

   /* Control para calles */
   this.filteredOptionsCalles = this.myControl.valueChanges.pipe(
    startWith(''),
    debounceTime(400),
    distinctUntilChanged(),
    switchMap(val => {
          return this._filterCalles(val || '')
     }) 
  )



  }



 

  /* Hacemos el llamado al servicio, mapeamos y filtramos las sucursales */
 _filter(val: any): Observable<any> {

   return this.service.obtenerSucursalesSiga()
    .pipe(
      map(response => response.datosSucursales.Sucursal.filter((Sucursal:any) => { 
        return Sucursal.Nombre.toLowerCase().indexOf(val.toLowerCase()) === 0
      }))
    )
  }  

  _filterCalles(val: any):Observable<any> {
    return this.service.obtenerCallesSiga(this.idSucursal)
    .pipe(
      map(response => response.calles.Calle[1].filter((Calle:any) => { 
        return Calle.Nombre.toLowerCase().indexOf(val.toLowerCase()) === 0
      }))
    )

  }

/*   obtenerCalles(idSucursal:number){
    this.service.obtenerCallesSiga(idSucursal).subscribe(data=>{
      //obtenemos todos los datos del json que trae la api
      //console.log(data);
      //obtenesmos todos los datos de la entrada del json que tiene las sucursales
      console.log(data.calles);
      //obtenemos los valores de la entrada del json de datosSucursales del indice 1
      //console.log(data.calles[1].Id);
      //obtenemos los valores de la entrada del json de datosSucursales del indice 1 nombre del subindice
     this.calle1=data.calles.Calle[1].Nombre;
     //asigno a la variable listaCalles todas las calles obtenidas de la funcion menuService.obtenerCallesSiga()
     this.listaCalles=data.calles.Calle; 
    })
  } */


  /* Validaciones input email */
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debe ingresar un email';
    }

    return this.email.hasError('email') ? 'Email invalido' : '';
  }

  ngOnInit() {
      
  }


}

  


