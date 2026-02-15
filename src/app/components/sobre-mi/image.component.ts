import { Component } from '@angular/core';

@Component({
  selector: 'sm-image',
  standalone: true,
  template: `
    <div class="sm-image">
      <img src="assets/MyPhotoElegant.jpeg" alt="Foto sobre mí" />
    </div>
  `,
  styles: [
    `:host{display:block} .sm-image{display:flex;align-items:center;justify-content:center} .sm-image img{width:180px;height:180px;object-fit:cover;border-radius:12px;border:3px solid rgba(255,255,255,0.04);box-shadow:0 8px 24px rgba(0,0,0,0.45)}`
  ]
})
export class SobreMiImageComponent {}
