import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-perfil',
  imports: [RouterOutlet],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  editProfile() {
    alert('Redirect to edit profile page!');
    // Aquí podrías agregar la lógica para editar el perfil o navegar a otra vista en tu aplicación
  }
}
