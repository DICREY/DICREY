// Libraries
import { Component, signal } from "@angular/core";
import { CardPresentationComponent } from "../../components/card-presentation/card-presentation.component";

// Decor
@Component({
  selector: 'app-home',
  imports: [ CardPresentationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

// Class Component
export class HomeComponent {
  phoneNumber = signal(null);
  
}
