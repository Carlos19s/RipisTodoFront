import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  mapaUrl: SafeResourceUrl;
  enlaceMaps: string = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7400376591195!2d-78.11126139999999!3d0.35891749999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e2a3cad3692611d%3A0x422d36312eaf6a7c!2sFacultad%20de%20Ingenier%C3%ADa%20en%20Ciencias%20Aplicadas%20-%20FICA!5e0!3m2!1ses-419!2sec!4v1747368283084!5m2!1ses-419!2sec';

  images: string[] = [
    'LogoRipis.png'
  ];

  constructor(
    private sanitizer: DomSanitizer,
    private router: Router
  ) {
    const url = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7400376591195!2d-78.11126139999999!3d0.35891749999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e2a3cad3692611d%3A0x422d36312eaf6a7c!2sFacultad%20de%20Ingenier%C3%ADa%20en%20Ciencias%20Aplicadas%20-%20FICA!5e0!3m2!1ses-419!2sec!4v1747368283084!5m2!1ses-419!2sec';
    this.mapaUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  redirigirConRecargaAngular(ruta: string) {
    this.router.navigate([ruta]).then(() => {
    });
  }
}
