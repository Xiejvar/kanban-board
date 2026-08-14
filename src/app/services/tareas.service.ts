import { Injectable, signal } from '@angular/core';
import { Tarea } from '../models/tarea.model';

@Injectable({ providedIn: 'root' })
export class TareasService {
  private tareas = signal<Tarea[]>([
    { id: 1, titulo: 'Configurar proyecto', descripcion: 'Estructura inicial', prioridad: 'alta', estado: 'hecho' },
    { id: 2, titulo: 'Crear tablero', descripcion: 'Columnas y tarjetas', prioridad: 'media', estado: 'en-progreso' },
    { id: 3, titulo: 'Conectar backend', descripcion: 'API con json-server', prioridad: 'baja', estado: 'pendiente' }
  ]);

  // exponemos el signal en modo solo-lectura hacia fuera
  tareasLista = this.tareas.asReadonly();

  añadirTarea(tarea: Tarea) {
    this.tareas.update(lista => [...lista, tarea]);
  }

  cambiarEstado(id: number, nuevoEstado: Tarea['estado']) {
    this.tareas.update(lista =>
      lista.map(t => t.id === id ? { ...t, estado: nuevoEstado } : t)
    );
  }

  borrarTarea(id: number) {
    this.tareas.update(lista => lista.filter(t => t.id !== id));
  }
}