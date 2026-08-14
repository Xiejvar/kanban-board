# Kanban Board

Aplicación de gestión de tareas estilo Trello, construida con Angular 22 (standalone components, Signals, nueva sintaxis de control de flujo `@if`/`@for`).

🔗 **[Ver demo en vivo](https://xiejvar.github.io/kanban-board/)**

## Características

- CRUD completo de tareas (crear, mover entre estados, borrar)
- Formulario reactivo con validaciones
- Estado gestionado con Angular Signals
- Arquitectura de componentes con comunicación `@Input()`/`@Output()`
- Pipeline de CI/CD con GitHub Actions: build, tests y deploy automático a GitHub Pages

## Tecnologías

- Angular 22 (standalone, Signals, Vitest)
- TypeScript
- SCSS
- GitHub Actions

## Cómo correrlo en local

\`\`\`bash
git clone https://github.com/Xiejvar/kanban-board.git
cd kanban-board
npm install
ng serve
\`\`\`

Abrir `http://localhost:4200`

## Tests

\`\`\`bash
npm test
\`\`\`