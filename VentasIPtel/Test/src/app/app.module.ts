import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormularioCargaDatosComponent } from './pages/formularioCarga/formulario-carga-datos/formulario-carga-datos.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/formularioLogin/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    FormularioCargaDatosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
   MatAutocompleteModule,
   MatFormFieldModule,
   MatInputModule,
   MatSelectModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
