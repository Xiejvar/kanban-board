import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tablero } from './components/tablero/tablero';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Tablero],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('kanban-board');
}
