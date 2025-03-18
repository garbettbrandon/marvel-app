import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Hero } from '../../interfaces/heroes.interface';
import { HeroService } from '../../services/heroes.service';

@Component({
  selector: 'hero-card',
  imports: [RouterLink],
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css'],
})
export class HeroCardComponent {
  hero = input.required<Hero>();
  constructor(private heroService: HeroService) {}

  addFavorite(hero: Hero): void {
    this.heroService.addFavorite(hero);
  }
}
