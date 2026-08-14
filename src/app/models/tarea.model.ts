export interface Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  prioridad: 'baja' | 'media' | 'alta';
  estado: 'pendiente' | 'en-progreso' | 'hecho';
  fechaLimite?: string;
}