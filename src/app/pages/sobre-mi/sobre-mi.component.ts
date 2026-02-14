import { Component } from '@angular/core';
import { SobreMiImageComponent } from '../../components/sobre-mi/image.component';
import { SobreMiDescripcionComponent } from '../../components/sobre-mi/descripcion/descripcion.component';
import { SobreMiHistorialComponent } from '../../components/sobre-mi/historial.component/historial.component';
import { SobreMiHabilidadesComponent } from '../../components/sobre-mi/habilidades/habilidades.component';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [
    SobreMiImageComponent,
    SobreMiDescripcionComponent,
    SobreMiHistorialComponent,
    SobreMiHabilidadesComponent
  ],
  template: `
    <section class="sobre-mi-container">
      <div class="top">
        <sm-image></sm-image>
        <sm-descripcion></sm-descripcion>
      </div>

      <div class="bottom">
        <sm-historial></sm-historial>
        <sm-habilidades></sm-habilidades>
      </div>
    </section>
  `,
  styles: [
    `:host{display:block;padding:24px;color:var(--muted);max-width:1100px;margin:0 auto} .sobre-mi-container{display:flex;flex-direction:column;gap:20px} .top{display:flex;gap:20px;align-items:center} .bottom{display:grid;grid-template-columns:1fr 1fr;gap:16px} @media(max-width:720px){.top{flex-direction:column;align-items:flex-start}.bottom{grid-template-columns:1fr}} `
  ]
})
export class SobreMiComponent {}
