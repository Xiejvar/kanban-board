import { Component, signal } from '@angular/core';
import { Tablero } from './components/tablero/tablero';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Tablero],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  modoOscuro = signal(false);

  toggleModoOscuro() {
    this.modoOscuro.update(v => !v);
    document.body.classList.toggle('dark-mode', this.modoOscuro());
  }
}