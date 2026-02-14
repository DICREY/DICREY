// Libraries
import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from "@ng-icons/core";
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
import { simpleLinux, simpleArchlinux } from '@ng-icons/simple-icons'

// Decor
@Component({
  selector: 'sm-habilidades',
  imports: [ NgIcon ],
  viewProviders: [
    provideIcons({ 
      matfReactColored,
      matfAngularColored,
      matfTypescriptDefColored,
      matfJavascriptColored,
      matfPythonColored,
      matfNodejsColored,
      matfGitColored,
      matfDockerColored,
      simpleLinux,
      simpleArchlinux,
    }) 
  ],
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.css'
})

// Class Component 
export class SobreMiHabilidadesComponent {
  skills = signal([
    { name: 'Angular', icon: 'matfAngularColored' },
    { name: 'React', icon: 'matfReactColored' },
    { name: 'Express.JS', icon: 'matfTypescriptDefColored' },
    { name: 'TypeScript', icon: 'matfTypescriptDefColored' },
    { name: 'JavaScript', icon: 'matfJavascriptColored' },
    { name: 'Python', icon: 'matfPythonColored' },
    { name: 'NodeJS', icon: 'matfNodejsColored' },
    { name: 'docker', icon: 'matfDockerColored' },
    { name: 'Git & Github', icon: 'matfGitColored' },
    { name: 'Linux', icon: 'simpleLinux' },
    { name: 'Arch Linux', icon: 'simpleArchlinux' },
  ])

}
