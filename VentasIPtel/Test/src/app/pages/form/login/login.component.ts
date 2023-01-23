import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms'
import { Observable } from 'rxjs';
import { map, startWith,debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'autocomplete';

  filLocalidades: Observable<string[]>;
  localidades: string[] = ["Saldan","Venado tuerto","Cordoba"]


control = new FormControl();


  constructor(  /* private service : FormService, private fb : FormBuilder  */  ) { 
    
  }

  ngOnInit() {
    
    this.filLocalidades = this.control.valueChanges.pipe(
      debounceTime(500),
      startWith(''),
      map(val => this._filter(val))
    );
      /* this.getNames() */  
  }

  private _filter(val: string): string[] {
    const formatVal = val.toLocaleLowerCase();

    return this.localidades.filter(localidad => localidad.toLocaleLowerCase().indexOf(formatVal) === 0);
  }
  
   /*  getNames() {
    this.service.getData().subscribe(response => {
      this.localidades = response;
    })
  }   */

}