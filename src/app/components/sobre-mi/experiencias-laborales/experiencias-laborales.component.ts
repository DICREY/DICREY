import { Component, signal } from '@angular/core';

@Component({
  selector: 'sm-experiencias-laborales',
  standalone: true,
  templateUrl: './experiencias-laborales.component.html',
  styleUrl: './experiencias-laborales.component.css',
})
export class ExperienciasLaboralesComponent {
  experiencias = signal([
    {
      nombre: 'Desarrollo y mantenimiento de aplicaciones web utilizando Wordpress (FundacionIAJM)',
      tiempo: 'Junio 2025 - Enero 2026',
      contacto: '+57 317 5177103'
    }
  ])
}
