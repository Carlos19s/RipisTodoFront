import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  imports: [
    RouterOutlet
  ],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  constructor(private router: Router) {}
  redirigirConRecargaAngular(ruta: string) {
    this.router.navigate([ruta]).then(() => {
    });
  }
}
