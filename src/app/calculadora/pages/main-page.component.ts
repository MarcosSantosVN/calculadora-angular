import { Component } from '@angular/core';
import { Cuenta } from '../interfaces/cuenta.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {

  historial: Cuenta[] = [];

  addHisto(lastCalc: Cuenta) {
    this.historial.push(lastCalc);
    console.log(lastCalc.premisa, lastCalc.resultado);
  }

}
