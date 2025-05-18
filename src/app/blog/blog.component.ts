import {RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  nuevoComentario: string = '';
  comentarios: { texto: string, fecha: string }[] = [];

  get comentariosRecientes() {
    return this.comentarios.slice().reverse();
  }

  get historiasDestacadas() {
    return this.comentarios.slice(-2);
  }

  agregarComentario() {
    const textoLimpio = this.nuevoComentario.trim();
    if (textoLimpio) {
      this.comentarios.push({
        texto: textoLimpio,
        fecha: new Date().toLocaleString()
      });
      this.nuevoComentario = ''; // limpiar el textarea
    }
  }
}
