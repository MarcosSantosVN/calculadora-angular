import { NgModule } from '@angular/core';

import { MainPageComponent } from './pages/main-page.component';
import { CuentaComponent } from './components/cuenta/cuenta.component';
import { HistorialComponent } from './components/historial/historial.component';
import { CommonModule } from '@angular/common';


@NgModule({

  declarations: [
    CuentaComponent,
    HistorialComponent,
    MainPageComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CalculadoraModule { }
