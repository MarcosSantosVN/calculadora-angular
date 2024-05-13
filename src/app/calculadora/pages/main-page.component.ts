import { Component } from '@angular/core';
import { Cuenta } from '../interfaces/cuenta.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {

  historial: Cuenta[] = [{
    premisa: '5+5',
    resultado: '10'
  },
  {
    premisa: '2+2',
    resultado: 'Error'
  }];

  addHisto(lastCalc: Cuenta) {
    this.historial.push(lastCalc);
    console.log(lastCalc.premisa, lastCalc.resultado);
  }

}
