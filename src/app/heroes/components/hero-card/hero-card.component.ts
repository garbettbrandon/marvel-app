import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'hero-card',
  imports: [RouterLink],
  templateUrl: './hero-card.component.html',
})
export class HeroCardComponent {}
