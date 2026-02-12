import { Component } from '@angular/core';
import { Hero } from "../../shared/hero/hero";
import { Services } from "../../shared/services/services";

@Component({
  selector: 'app-home',
  imports: [Hero, Services],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
