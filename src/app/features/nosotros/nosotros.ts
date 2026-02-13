import { Component } from '@angular/core';
import { Team } from "../../shared/team/team";
import { Portafolio } from "../../shared/portafolio/portafolio";
import { Testimonios } from '../../shared/testimonios/testimonios';
import { Blogs } from "../../shared/blogs/blogs";
import { Features } from "../../shared/features/features";

@Component({
  selector: 'app-nosotros',
  imports: [Team, Portafolio, Testimonios, Blogs, Features],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.css',
})
export class Nosotros {

}
