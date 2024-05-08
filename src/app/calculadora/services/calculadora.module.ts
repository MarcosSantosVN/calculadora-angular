import { NgModule } from '@angular/core';
import { MainPageComponent } from '../pages/main-page.component';
import { CuentaComponent } from '../components/cuenta/cuenta.component';
import { HistorialComponent } from '../components/historial/historial.component';


@NgModule({

  declarations: [
    CuentaComponent,
    HistorialComponent,
    MainPageComponent
  ],
  exports: [
    CuentaComponent,
    HistorialComponent,
    MainPageComponent
  ]
})
export class CalculadoraModule { }
