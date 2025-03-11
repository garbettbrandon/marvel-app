import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarvelNavbarComponent } from "../../components/marvel-navbar/marvel-navbar.component";

@Component({
  selector: 'app-marvel-front-layout',
  imports: [RouterOutlet, MarvelNavbarComponent],
  templateUrl: './marvel-front-layout.component.html',
})
export class MarvelFrontLayoutComponent {}
