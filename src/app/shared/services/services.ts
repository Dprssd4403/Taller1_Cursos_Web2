import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  subtitulo: string = "Encuentra tu centro de formación en el corazón de Ecuador";
  servicioSeleccionado: string = "Ninguno";

  servicios = [
    {
      id: 1,
      nombre: "Quito - Sede La Mariscal",
      descripcion: "Ubicada en el centro financiero y cultural. Cuenta con fibra óptica de alta velocidad y laboratorios Mac.",
      imagen: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
      mapa: "https://www.google.com/maps/search/La+Mariscal+Quito+Ecuador",
      activo: true
    },
    {
      id: 2,
      nombre: "Guayaquil - Sede Puerto Santa Ana",
      descripcion: "Moderna infraestructura frente al Río Guayas, diseñada para el networking y el desarrollo de startups.",
      imagen: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      mapa: "https://www.google.com/maps/search/Puerto+Santa+Ana+Guayaquil+Ecuador",
      activo: true
    },
    {
      id: 3,
      nombre: "Cuenca - Sede Calle Larga",
      descripcion: "Un espacio creativo en el centro histórico, fusionando arquitectura colonial con tecnología moderna.",
      imagen: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000&auto=format&fit=crop",
      mapa: "https://www.google.com/maps/search/Calle+Larga+Cuenca+Ecuador",
      activo: false 
    },
  ];

  serviciosFiltrados = [...this.servicios];

  seleccionar(sucursal: any) {
    this.servicioSeleccionado = sucursal.nombre;
    
    if (sucursal.activo && sucursal.mapa) {
      window.open(sucursal.mapa, '_blank');
    }
  }

  busqueda(event: Event) {
    const input = event.target as HTMLInputElement;
    const valor = input.value.toLowerCase();

    this.subtitulo = valor === '' 
      ? "Encuentra tu centro de formación en el corazón de Ecuador" 
      : `Resultados encontrados para: "${valor}"`;

    this.serviciosFiltrados = this.servicios.filter(s =>
      s.nombre.toLowerCase().includes(valor) || 
      s.descripcion.toLowerCase().includes(valor)
    );
  }
}