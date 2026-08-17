import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDropList, CdkDrag, CdkDragDrop } from '@angular/cdk/drag-drop';
import { Tarea } from '../../models/tarea.model';
import { TareaCard } from '../tarea-card/tarea-card';

@Component({
  selector: 'app-columna',
  standalone: true,
  imports: [CommonModule, TareaCard, CdkDropList, CdkDrag],
  templateUrl: './columna.html',
  styleUrl: './columna.scss'
})
export class Columna {
  @Input() titulo!: string;
  @Input() estado!: Tarea['estado'];
  @Input() tareas: Tarea[] = [];
  @Output() borrarTarea = new EventEmitter<number>();
  @Output() cambiarEstadoTarea = new EventEmitter<{ id: number; estado: Tarea['estado'] }>();
  @Output() editarTarea = new EventEmitter<Tarea>();

  onDrop(evento: CdkDragDrop<Tarea[]>) {
    const tareaMovida = evento.item.data as Tarea;
    this.cambiarEstadoTarea.emit({ id: tareaMovida.id, estado: this.estado });
  }
}