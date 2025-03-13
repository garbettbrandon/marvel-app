import { Component, inject } from '@angular/core';
import { HeroCardComponent } from '../../../heroes/components/hero-card/hero-card.component';
import { HeroService } from '../../../heroes/services/heroes.service';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home-page',
  imports: [HeroCardComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  heroService = inject(HeroService);

  heroesResource = rxResource({
    request: () => ({}),
    loader: ({ request }) => {
      return this.heroService.getHeroes();
    },
  });
}
