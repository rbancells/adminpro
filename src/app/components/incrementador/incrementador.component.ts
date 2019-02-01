import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
    '.numero::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }',
    '.numero::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }'
  ]
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input() leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChange(newValue: number) {
    if (newValue > 100) {
      this.progreso = 100;
      this.txtProgress.nativeElement.value = '100';
    } else if (this.progreso < 0 || this.progreso == null) {
      this.progreso = 0;
      this.txtProgress.nativeElement.value = '0';
    }

    this.cambioValor.emit(this.progreso);
  }

  cambiarValor(valor: number) {
    if (this.progreso + valor > 100) {
      this.progreso = 100;
    } else if (this.progreso + valor < 0) {
      this.progreso = 0;
    } else {
      this.progreso += valor;
    }

    this.cambioValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();
  }

}
