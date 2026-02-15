import { Component } from '@angular/core';

@Component({
  selector: 'sm-image',
  standalone: true,
  template: `
    <div class="sm-image">
      <img src="assets/MyPhotoElegant.jpeg" alt="Foto sobre mí" />
    </div>
  `,
  styleUrl: './image.component.css'
})
export class SobreMiImageComponent {}
