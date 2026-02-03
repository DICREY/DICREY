// Libraries
import { effect, Injectable, signal } from "@angular/core";

// Imports 
import { Project } from "../interfaces/projects.interface";

// Cargar servicio desde el localStorage
const loadLocalStorage = (): Project[] => {
    const data = localStorage.getItem('projects');
    return data ? JSON.parse(data) : [];
}

// Decor 
@Injectable({ providedIn: "root" })

// Class Service
export class ProjectsService {
    public projects = signal<Project[]>(loadLocalStorage());

    // Guardar servicio en el localStorage
    public saveLocalStorage = effect(() => {
        localStorage.setItem('projects', JSON.stringify(this.projects()))
    })
}