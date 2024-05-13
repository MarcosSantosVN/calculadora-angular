import { Component, Input } from '@angular/core';
import { Cuenta } from '../../interfaces/cuenta.interface';

@Component({
  selector: 'app-calc-historial',
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.css'
})
export class HistorialComponent {

  @Input()
  public historial: Cuenta[] = [];

  onDelete(): void {
    this.historial.splice(0);
  }

}
