import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-senecyt',
  imports: [RouterOutlet],
  templateUrl: './senecyt.component.html',
  styleUrl: './senecyt.component.css'
})
export class SenecytComponent {
  email: string = "redes@senescyt.gob.ec";
}
