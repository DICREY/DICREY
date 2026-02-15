// Libraries
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports 
import { ProjectCardComponent, Project } from '../../components/project-card/project-card.component'

// Decor
@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css',
})

// Class Component
export class ProyectosComponent {
  projects = signal<Project[]>([
    {
      id: 1,
      title: 'E-Commerce',
      description: 'Plataforma de tienda en línea con carrito de compras, gestión de inventario y sistema de pagos integrado.',
      image: 'assets/project1.jpg',
      technologies: [
        { name: 'React', icon: 'matfReactColored' },
        { name: 'Express.js', icon: '🟢' },
        { name: 'Node.js', icon: 'matfNodejsColored' },
        { name: 'SQL', icon: 'matfDatabaseUncolored' }
      ]
    },
    {
      id: 2,
      title: 'PetsHeaven',
      description: 'Plataforma de gestión de una Clinica Veterinaria Citas, Usuarios, Mascotas, Historial Médico',
      image: 'assets/project2.jpg',
      technologies: [
        { name: 'React', icon: 'matfReactColored' },
        { name: 'Express.js', icon: '📊' },
        { name: 'Node.js', icon: 'matfNodejsColored' },
        { name: 'SQL', icon: 'matfDatabaseUncolored' }
      ]
    },
  ]);
}
