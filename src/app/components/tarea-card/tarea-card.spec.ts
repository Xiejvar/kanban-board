import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TareaCard } from './tarea-card';

describe('TareaCard', () => {
  let component: TareaCard;
  let fixture: ComponentFixture<TareaCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareaCard],
    }).compileComponents();

    fixture = TestBed.createComponent(TareaCard);
    component = fixture.componentInstance;

    // Le damos una tarea de prueba, como haría el padre (Columna) en la app real
    component.tarea = {
      id: 1,
      titulo: 'Tarea de prueba',
      descripcion: 'Descripción de prueba',
      prioridad: 'media',
      estado: 'pendiente'
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});