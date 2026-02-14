import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  standalone: true,
  template: `
    <section class="page">
      <h1>Contacto</h1>
      <p>Página de ejemplo - información de contacto.</p>
    </section>
  `,
  styles: [
    `:host { display:block; padding:24px; color: var(--muted); } h1{color:var(--accent);} `
  ]
})
export class ContactoComponent {}
