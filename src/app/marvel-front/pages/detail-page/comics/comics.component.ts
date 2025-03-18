import { Component, input } from '@angular/core';
import { HeroService } from '../../../../heroes/services/heroes.service';
import { Comic } from '../../../../heroes/interfaces/comics.interface';
import { finalize } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'hero-comics',
  imports: [DatePipe],
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css'],
})
export class ComicsComponent {
  heroId = input.required<number>();
  public comics: Comic[] = [];
  public isLoading: boolean = true;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService
      .getComicsByHeroId(this.heroId())
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((comics) => (this.comics = comics));
  }
}
