// Libraries
import { Component, signal } from "@angular/core";

// Imports 
import { CardAvatarComponent } from "../card-avatar/card-avatar.component";

// Decor 
@Component ({
    selector: 'app-card-presentation',
    templateUrl: './card-presentation.component.html',
    styleUrls: ['./card-presentation.component.css'],
    imports: [ CardAvatarComponent ]
})

// Class Component 
export class CardPresentationComponent { 
    name = signal('Cristian Arrieta');
}