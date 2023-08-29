import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css'],
})
export class TarjetaCreditoComponent implements OnInit {
  listTarjetas: any[] = [
    {
      titular: 'Juan Perez',
      numeroTarjeta: '27272727272727',
      fechaExpiracion: '11/23',
      cvv: '123',
    },
    {
      titular: 'Ana Maravilla',
      numeroTarjeta: '797979797979797',
      fechaExpiracion: '12/23',
      cvv: '456',
    },
  ];

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      titular: ['', Validators.required],
      numeroTarjeta: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      fechaExpiracion: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {}

  agregarTarjeta() {
    console.log(this.form);

    const tarjeta: any = {
      titular: this.form.get('titular')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      cvv: this.form.get('cvv')?.value,
    }

    this.listTarjetas.push(tarjeta);
    this.form.reset();
  }
}
