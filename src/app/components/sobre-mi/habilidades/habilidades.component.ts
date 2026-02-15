// Libraries
import { Component, signal } from '@angular/core';
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
      matfDatabaseUncolored,
      simpleMongodb,
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
    { name: 'SQL', icon: 'matfDatabaseUncolored' },
    { name: 'NoSQL', icon: 'simpleMongodb' },
    { name: 'NodeJS', icon: 'matfNodejsColored' },
    { name: 'docker', icon: 'matfDockerColored' },
    { name: 'Git & Github', icon: 'matfGitColored' },
    { name: 'Linux', icon: 'simpleLinux' },
    { name: 'Arch Linux', icon: 'simpleArchlinux' },
  ])

}
