import { Component, computed, inject } from '@angular/core';
import { Columna } from '../columna/columna';
import { TareasService } from '../../services/tareas.service';
import { NuevaTarea } from '../nueva-tarea/nueva-tarea';
import { Tarea } from '../../models/tarea.model';

@Component({
  selector: 'app-tablero',
  standalone: true,
  imports: [Columna, NuevaTarea],
  templateUrl: './tablero.html',
  styleUrl: './tablero.scss'
})
export class Tablero {
  private tareasService = inject(TareasService);

  tareaEnEdicion: Tarea | null = null;

  tareasPendientes = computed(() =>
    this.tareasService.tareasLista().filter(t => t.estado === 'pendiente')
  );
  tareasEnProgreso = computed(() =>
    this.tareasService.tareasLista().filter(t => t.estado === 'en-progreso')
  );
  tareasHechas = computed(() =>
    this.tareasService.tareasLista().filter(t => t.estado === 'hecho')
  );

  onBorrarTarea(id: number) {
    this.tareasService.borrarTarea(id);
  }

  onCrearTarea(tarea: Tarea) {
    this.tareasService.añadirTarea(tarea);
  }

  onCambiarEstadoTarea(evento: { id: number; estado: Tarea['estado'] }) {
    this.tareasService.cambiarEstado(evento.id, evento.estado);
  }

  onEditarTarea(tarea: Tarea) {
    this.tareaEnEdicion = tarea;
  }

  onActualizarTarea(tarea: Tarea) {
    this.tareasService.actualizarTarea(tarea);
    this.tareaEnEdicion = null;
  }

  onCancelarEdicion() {
    this.tareaEnEdicion = null;
  }
}