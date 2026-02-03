// Libraries
import { Component, input } from "@angular/core";

// Decor 
@Component({  selector: "app-project-card",
    templateUrl: "./project-card.component.html",
    styleUrls: ["./project-card.component.css"]
})

// Class Component
export class ProjectCardComponent {
    // Variables de entrada para el componente
    public name = input("");
    public description = input("");
    public link = input("");
}