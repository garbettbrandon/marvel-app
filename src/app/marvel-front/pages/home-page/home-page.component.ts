import { Component, inject, signal } from '@angular/core';
import { HeroCardComponent } from '../../../heroes/components/hero-card/hero-card.component';
import { HeroService } from '../../../heroes/services/heroes.service';
import { rxResource } from '@angular/core/rxjs-interop';
import {
  Hero,
  MarvelResponse,
} from '../../../heroes/interfaces/heroes.interface';
import { of } from 'rxjs';

@Component({
  selector: 'app-home-page',
  imports: [HeroCardComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  heroService = inject(HeroService);
  query = signal('');

  heroesResource = rxResource({
    request: () => ({}),
    loader: ({ request }) => {
      return this.heroService.getHeroes();
    },
  });

  heroSearchResource = rxResource({
    request: () => ({ query: this.query() }),
    loader: ({ request }) => {
      if (!request.query) return of([]);
      return this.heroService.searchHero(request.query);
    },
  });

  // onSearch(query: string) {
  //   this.heroService.searchHero(query).subscribe((resp) => {
  //     this.heroService.getHeroes();
  //   });
  // }
}
