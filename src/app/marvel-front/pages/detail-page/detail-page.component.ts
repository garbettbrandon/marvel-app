import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../../../heroes/services/heroes.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { ComicsComponent } from "./comics/comics.component";

@Component({
  selector: 'app-detail-page',
  imports: [ComicsComponent],
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css'],
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
