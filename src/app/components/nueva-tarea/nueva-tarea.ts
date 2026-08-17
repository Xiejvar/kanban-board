import { Component, Output, EventEmitter, inject, Input, OnChanges } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Tarea } from '../../models/tarea.model';

@Component({
  selector: 'app-nueva-tarea',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './nueva-tarea.html',
  styleUrl: './nueva-tarea.scss'
})
export class NuevaTarea implements OnChanges {
  @Input() tareaEditando: Tarea | null = null;
  @Output() crear = new EventEmitter<Tarea>();
  @Output() actualizar = new EventEmitter<Tarea>();
  @Output() cancelarEdicion = new EventEmitter<void>();

  private fb = inject(FormBuilder);

  formulario = this.fb.group({
    titulo: ['', [Validators.required, Validators.minLength(3)]],
    descripcion: ['', Validators.required],
    prioridad: ['media' as 'baja' | 'media' | 'alta', Validators.required]
  });

  ngOnChanges() {
    if (this.tareaEditando) {
      this.formulario.setValue({
        titulo: this.tareaEditando.titulo,
        descripcion: this.tareaEditando.descripcion,
        prioridad: this.tareaEditando.prioridad
      });
    } else {
      this.formulario.reset({ titulo: '', descripcion: '', prioridad: 'media' });
    }
  }

  onSubmit() {
    if (this.formulario.invalid) return;

    const valores = this.formulario.value;

    if (this.tareaEditando) {
      this.actualizar.emit({
        ...this.tareaEditando,
        titulo: valores.titulo!,
        descripcion: valores.descripcion!,
        prioridad: valores.prioridad!
      });
    } else {
      this.crear.emit({
        id: Date.now(),
        titulo: valores.titulo!,
        descripcion: valores.descripcion!,
        prioridad: valores.prioridad!,
        estado: 'pendiente'
      });
      this.formulario.reset({ titulo: '', descripcion: '', prioridad: 'media' });
    }
  }

  onCancelar() {
    this.cancelarEdicion.emit();
  }
}