import { Component, Output, EventEmitter, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Tarea } from '../../models/tarea.model';

@Component({
  selector: 'app-nueva-tarea',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './nueva-tarea.html',
  styleUrl: './nueva-tarea.scss'
})
export class NuevaTarea {
  @Output() crear = new EventEmitter<Tarea>();

  private fb = inject(FormBuilder);

  formulario = this.fb.group({
    titulo: ['', [Validators.required, Validators.minLength(3)]],
    descripcion: ['', Validators.required],
    prioridad: ['media' as 'baja' | 'media' | 'alta', Validators.required]
  });

  onSubmit() {
    if (this.formulario.invalid) {
      return;
    }

    const valores = this.formulario.value;

    const nuevaTarea: Tarea = {
      id: Date.now(), // truco simple para un id único sin backend real
      titulo: valores.titulo!,
      descripcion: valores.descripcion!,
      prioridad: valores.prioridad!,
      estado: 'pendiente'
    };

    this.crear.emit(nuevaTarea);
    this.formulario.reset({ titulo: '', descripcion: '', prioridad: 'media' });
  }
}