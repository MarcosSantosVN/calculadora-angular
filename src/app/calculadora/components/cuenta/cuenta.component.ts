import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-calc-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrl: './cuenta.component.css'
})
export class CuentaComponent {

  @Output()
  public onNewResult: EventEmitter<String> = new EventEmitter();

  public cuenta: string = '';
  public flag: boolean = false;

  escribir(value: string, simbol:boolean): void {
    if (!simbol && this.flag) {
      this.cuenta = value;
    } else {
      this.cuenta += value;
    }
    this.flag = false;
  }

  limpiar(): void {
    this.cuenta = '';
  }

  borrar(): void {
    if (this.cuenta.length == 1 ||  this.flag) {
      this.cuenta = '';
      this.flag = false;
    } else {
      this.cuenta = this.cuenta.slice(0, -1);
    }
  }

  calcular(): void {
    try {
      this.cuenta = eval(this.cuenta);

    } catch {
      this.cuenta = "Error";
    }
    this.flag = true;

    this.onNewResult.emit(this.cuenta);

  }

}
