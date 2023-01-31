import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  errorLogin!:string;

  constructor(public formBuilder:FormBuilder, public router: Router) {
    this.form=this.formBuilder.group({
      email:["", [Validators.required]],
     password: ["", [Validators.required]]
   })

   }

   get email()
   {
    return this.form.get("email");
   }

   get password()
   {
    return this.form.get("password")
   }

  ngOnInit(): void {
  }

  login()  
  {
    if(this.form.valid)
    {
      const user = { email:this.form.get('email')?.value,
       password:this.form.get('password')?.value};
    }

  }
}