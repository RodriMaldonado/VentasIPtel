import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCargaDatosComponent } from './formulario-carga-datos.component';

describe('FormularioCargaDatosComponent', () => {
  let component: FormularioCargaDatosComponent;
  let fixture: ComponentFixture<FormularioCargaDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCargaDatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioCargaDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
