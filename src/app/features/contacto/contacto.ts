import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Fuentes } from "../../shared/fuentes/fuentes";
import { DataContacto } from "../../shared/data-contacto/data-contacto";
import { Hero2 } from "../../shared/hero2/hero2";

@Component({
  selector: 'app-contacto',
  imports: [CommonModule, FormsModule, Fuentes, DataContacto, Hero2],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  enviarMensaje() {
    alert('Gracias por escribirnos. Te responderemos en menos de 24 horas.');
  }
}
