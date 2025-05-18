import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
@Component({
  selector: 'app-iniciar-sesion',
  imports: [
    RouterOutlet
  ],
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css'
})
export class IniciarSesionComponent {
  constructor(private router: Router) {}
  redirigirConRecargaAngular(ruta: string) {
    this.router.navigate([ruta]).then(() => {
    });
  }
}
