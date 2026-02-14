import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  template: `
    <section class="page">
      <h1>Proyectos</h1>
      <p>Página de ejemplo - lista de proyectos.</p>
    </section>
  `,
  styles: [
    `:host { display:block; padding:24px; color: var(--muted); } h1{color:var(--accent);} `
  ]
})
export class ProyectosComponent {}
