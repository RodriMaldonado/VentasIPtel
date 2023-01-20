import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/servicios/formulario/form.service';
import {FormBuilder} from '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'autocomplete';

localidades = ["sam","varum"]

  constructor( private service : FormService, private fb : FormBuilder  ) { }

  ngOnInit() {
      this.getNames() ; 
  }

    getNames() {
    this.service.getData().subscribe(response => {
      this.localidades = response;
    })
  }  

}
