import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroService } from '../../../heroes/services/heroes.service';

@Component({
  selector: 'marvel-navbar',
  imports: [RouterLink],
  templateUrl: './marvel-navbar.component.html',
  styleUrls: ['./marvel-navbar.component.css'],
})
export class MarvelNavbarComponent {
  heroService = inject(HeroService);

  get favorites() {
    return this.heroService.getFavorites();
  }
}
