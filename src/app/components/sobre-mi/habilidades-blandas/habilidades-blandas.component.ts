// Libraries
import { Component, signal } from '@angular/core';

// Decor
@Component({
  selector: 'sm-habilidades-blandas',
  imports: [],
  templateUrl: './habilidades-blandas.component.html',
  styleUrl: './habilidades-blandas.component.css'
})

// Class Component 
export class SobreMiHabilidadesBlandasComponent {
  softSkills = signal([
    { name: 'Comunicación Efectiva' },
    { name: 'Trabajo en Equipo' },
    { name: 'Aprendizaje Continuo' },
    { name: 'Resolución de Problemas' },
    { name: 'Pensamiento Crítico' },
    { name: 'Adaptabilidad' },
    { name: 'Creatividad' },
    { name: 'Gestión del Tiempo' },
    { name: 'Empatía' },
    { name: 'Organización' },
    { name: 'Proactividad' },
    { name: 'Atención al Detalle' },
  ])

}
