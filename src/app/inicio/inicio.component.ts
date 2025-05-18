import { Component,ElementRef, ViewChild, OnInit, OnDestroy  } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-inicio',
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
    @ViewChild('mapaCircular') mapaCircularRef!: ElementRef;
  private autoplayInterval: any;

  images: string[] = [
    'Carrusel1.webp',
    'Carrusel2.webp',
    'Carrusel3.webp',
    'Carrusel4.webp'
  ];
  currentIndex: number = 0;
  isFading: boolean = false; // Control de animación
  isDragging: boolean = false; // Para saber si se está arrastrando
  startX: number = 0; // Posición inicial del ratón
  // Método para ir a la imagen anterior

  ngOnInit(): void {
    // Start the autoplay when component initializes
    this.startAutoplay();
  }
  
  ngOnDestroy(): void {
    // Clean up the interval when component is destroyed
    this.stopAutoplay();
  }
  
  startAutoplay(): void {
    this.autoplayInterval = setInterval(() => {
      this.nextImage();
    }, 5000); // 5000 ms = 5 seconds
  }
  
  stopAutoplay(): void {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  } 

  prevImage(): void {
    this.fadeOut(() => {
      this.currentIndex = this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
      this.fadeIn();
    });
  }

  // Método para ir a la siguiente imagen
  nextImage(): void {
    this.fadeOut(() => {
      this.currentIndex = this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex + 1;
      this.fadeIn();
    });
  }

  // Función para iniciar el desvanecimiento
  fadeOut(callback: Function): void {
    this.isFading = true; // Activar la animación de desvanecimiento
    setTimeout(() => {
      callback(); // Cambiar la imagen después del desvanecimiento
    }, 100); // Esperar el tiempo de desvanecimiento
  }

  // Función para finalizar el desvanecimiento
  fadeIn(): void {
    setTimeout(() => {
      this.isFading = false; // Desactivar la animación de desvanecimiento
    }, 100); // Tiempo para que la imagen termine de aparecer
  }


  // Iniciar el arrastre (mousedown)
  startDrag(event: MouseEvent): void {
    this.isDragging = true;
    this.startX = event.clientX;
  }

  // Mientras arrastras (mousemove)
  onDrag(event: MouseEvent): void {
    if (!this.isDragging) return;
    const moveX = event.clientX - this.startX;

    // Si se arrastra más de 100px, cambiamos la imagen
    if (moveX > 100) {
      this.prevImage();
      this.isDragging = false; // Termina el arrastre
    } else if (moveX < -100) {
      this.nextImage();
      this.isDragging = false; // Termina el arrastre

    }
  }

  // Termina el arrastre (mouseup o mouseleave)
  endDrag(event: MouseEvent): void {
    this.isDragging = false;
  }

scrollToMapa(event: MouseEvent): void {
    event.preventDefault();
    this.mapaCircularRef.nativeElement
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  
}
