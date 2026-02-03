// Libraries 
import { Component, inject, input, signal } from "@angular/core";

// Imports 
import { ProjectCardComponent } from "./project-card/project-card.component";
import { ProjectsService } from "../../services/projects.service";

// Decor 
@Component ({
    selector: "app-projects",
    templateUrl: "./projects.component.html",
    styleUrls: ["./projects.component.css"],
    imports: [ ProjectCardComponent ]
})

// Class Component
export class ProjectsComponent {
    // Variables 
    public projects = inject(ProjectsService);

}