import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarea } from '../../models/tarea.model';
import { TareaCard } from '../tarea-card/tarea-card';

@Component({
  selector: 'app-columna',
  standalone: true,
  imports: [CommonModule, TareaCard],
  templateUrl: './columna.html',
  styleUrl: './columna.scss'
})
export class Columna {
  @Input() titulo!: string;
  @Input() tareas: Tarea[] = [];
  @Output() borrarTarea = new EventEmitter<number>();
  @Output() cambiarEstadoTarea = new EventEmitter<{ id: number; estado: Tarea['estado'] }>();
}