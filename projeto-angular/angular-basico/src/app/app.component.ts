import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router';
import { Componente001Component } from "./componente001/componente001.component"
import { Componente002Component } from "./componente002/componente002.component";

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, Componente001Component, Componente002Component]
})
export class AppComponent {
  title = 'angular-basico';
}
