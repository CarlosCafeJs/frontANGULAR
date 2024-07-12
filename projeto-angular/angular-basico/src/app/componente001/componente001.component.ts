import { Component } from '@angular/core';

@Component({
  selector: 'app-componente001',
  standalone: true,
  imports: [],
  templateUrl: './componente001.component.html',
  styleUrl: './componente001.component.css'
})
export class Componente001Component {
  nome:string = 'Carlos';
  idade:number = 26;

}
