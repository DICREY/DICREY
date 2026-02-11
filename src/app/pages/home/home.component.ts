// Libraries
import { Component, signal } from "@angular/core";

// Imports 
import { CardPresentationComponent } from "../../components/card-presentation/card-presentation.component";
import { ProjectsComponent } from "../../components/projects/projects.component";
import { FloatBtnComponent } from "../../components/float-btn/float-btn.component";

// Decor
@Component({
  selector: 'app-home',
  imports: [ CardPresentationComponent, ProjectsComponent, FloatBtnComponent ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

// Class Component
export class HomeComponent {
  phoneNumber = signal(null);
  
}
