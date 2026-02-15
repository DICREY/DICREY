import { Component, signal } from '@angular/core';

@Component({
  selector: 'sm-historial',
  standalone: true,
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.css',
})
export class SobreMiHistorialComponent {
  historial = signal([
    {
      year: '2023 - 2026',
      name: 'Tecnólogo en Análisis y Desarrollo de Software (SENA)'
    },
    {
      year: '2024',
      name: 'Introducción a Ciberseguridad: Prevención de Ataques Informáticos (Platzi)'
    },
    {
      year: '2024',
      name: 'Curso Práctico de JavaScrip (Platzi)'
    },
  ])
}
