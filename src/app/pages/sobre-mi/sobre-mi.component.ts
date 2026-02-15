// Libraries 
import { Component } from '@angular/core';

// Imports 
import { SobreMiImageComponent } from '../../components/sobre-mi/image.component/image.component';
import { SobreMiDescripcionComponent } from '../../components/sobre-mi/descripcion/descripcion.component';
import { SobreMiHistorialComponent } from '../../components/sobre-mi/historial.component/historial.component';
import { SobreMiHabilidadesComponent } from '../../components/sobre-mi/habilidades/habilidades.component';
import { SobreMiHabilidadesBlandasComponent } from 'src/app/components/sobre-mi/habilidades-blandas/habilidades-blandas.component';
import { ExperienciasLaboralesComponent } from 'src/app/components/sobre-mi/experiencias-laborales/experiencias-laborales.component';

// Decor
@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [
    SobreMiImageComponent,
    SobreMiDescripcionComponent,
    SobreMiHistorialComponent,
    ExperienciasLaboralesComponent,
    SobreMiHabilidadesComponent,
    SobreMiHabilidadesBlandasComponent
  ],
  templateUrl: './sobre-mi.component.html',
  styles: [
    `:host{display:block;padding:24px;color:var(--muted);max-width:1100px;margin:0 auto} .sobre-mi-container{display:flex;flex-direction:column;gap:20px} .top{display:flex;gap:20px;align-items:center} .bottom{display:grid;grid-template-columns:1fr 1fr;gap:16px} @media(max-width:720px){.top{flex-direction:column;align-items:flex-start}.bottom{grid-template-columns:1fr}} `
  ]
})

// Class Component
export class SobreMiComponent {}
