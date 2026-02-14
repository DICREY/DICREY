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
      year: '2024 - 2026',
      name: 'Analisis y Desarrollo de Software (SENA)'
    },
    {
      year: '2025',
      name: 'Analisis y Desarrollo de Software (Platzi)'
    },
  ])
}
