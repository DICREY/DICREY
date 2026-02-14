// Libraries
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Imports 
import { HeaderComponent } from './components/header/header.component';
import { FloatBtnComponent } from './components/float-btn/float-btn.component';

// Decor
@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, HeaderComponent, FloatBtnComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

// Class Component
export class App {
  protected readonly title = signal('DICREY');
}
