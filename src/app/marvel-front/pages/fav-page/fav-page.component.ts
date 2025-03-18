import { Component, inject } from '@angular/core';
import { HeroCardComponent } from '../../../heroes/components/hero-card/hero-card.component';
import { HeroService } from '../../../heroes/services/heroes.service';

@Component({
  selector: 'app-fav-page',
  imports: [HeroCardComponent],
  templateUrl: './fav-page.component.html',
  styleUrls: ['./fav-page.component.css'],
})
export class FavPageComponent {
  heroService = inject(HeroService);

  get favorites() {
    return this.heroService.getFavorites();
  }
}
