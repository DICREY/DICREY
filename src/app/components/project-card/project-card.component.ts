// Libraries 
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIcon, provideIcons } from "@ng-icons/core";
import { matfDatabaseUncolored } from '@ng-icons/material-file-icons/uncolored'
import { simpleMongodb, simpleLinux, simpleArchlinux } from '@ng-icons/simple-icons'
import { 
  matfReactColored,
  matfAngularColored,
  matfTypescriptDefColored,
  matfJavascriptColored,
  matfPythonColored,
  matfNodejsColored,
  matfGitColored,
  matfDockerColored
} from '@ng-icons/material-file-icons/colored'

// Imports 
import { Technology } from 'src/app/interfaces/projects.interface';

// interface 
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  github: string;
  link: string;
  technologies: Technology[];
}

// Decor 
@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [ CommonModule, NgIcon ],
  viewProviders: [
    provideIcons({ 
      matfReactColored,
      matfAngularColored,
      matfTypescriptDefColored,
      matfJavascriptColored,
      matfPythonColored,
      matfDatabaseUncolored,
      simpleMongodb,
      matfNodejsColored,
      matfGitColored,
      matfDockerColored,
      simpleLinux,
      simpleArchlinux,
    }) 
  ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})

// class Component
export class ProjectCardComponent {
  @Input() project!: Project;
}
