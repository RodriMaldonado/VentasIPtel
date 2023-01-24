import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/servicios/form.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  sucursal1 : string;

  constructor(public formService:FormService) { }

  ngOnInit(): void {
  }

  obtenerSucursales(){
     this.formService.obtenerSucursalesSiga().subscribe(data=>{      
    //obtenemos todos los datos del json que trae la api 
     //console.log(data); 
      //obtenesmos todos los datos de la entrada del json que tiene las sucursales
       console.log(data.datosSucursales.Sucursal); 
       //obtenemos los valores de la entrada del json de datosSucursales del indice 1   
        // console.log(data.datosSucursales.Sucursal[1]); 
         //obtenemos los valores de la entrada del json de datosSucursales del indice 1 nombre del subindice
         this.sucursal1=data.datosSucursales.Sucursal[1].Nombre    })  }

}
