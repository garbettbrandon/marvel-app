import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../../../heroes/services/heroes.service';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-detail-page',
  imports: [],
  templateUrl: './detail-page.component.html',
})
export class DetailPageComponent {
  activatedRoute = inject(ActivatedRoute);
  heroService = inject(HeroService);

  heroId = this.activatedRoute.snapshot.params['id'];

  heroResource = rxResource({
    request: () => ({ id: this.heroId }),
    loader: ({ request }) => this.heroService.getHeroById(request.id),
  });
}
