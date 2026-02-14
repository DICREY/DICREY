import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    public pages = signal([
        {
            name: 'Sobre mí',
            link: '/sobre-mi'
        },
        {
            name: 'Proyectos',
            link: '/proyectos'
        },
    ])
}
