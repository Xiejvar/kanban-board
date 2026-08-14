import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarea } from '../../models/tarea.model';

@Component({
  selector: 'app-tarea-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarea-card.html',
  styleUrl: './tarea-card.scss'
})
export class TareaCard {
  @Input() tarea!: Tarea;
  @Output() borrar = new EventEmitter<number>();
  @Output() cambiarEstado = new EventEmitter<{ id: number; estado: Tarea['estado'] }>();

  onBorrar() {
    this.borrar.emit(this.tarea.id);
  }

  siguienteEstado(): Tarea['estado'] {
    if (this.tarea.estado === 'pendiente') return 'en-progreso';
    if (this.tarea.estado === 'en-progreso') return 'hecho';
    return 'pendiente';
  }

  onMover() {
    this.cambiarEstado.emit({ id: this.tarea.id, estado: this.siguienteEstado() });
  }
}