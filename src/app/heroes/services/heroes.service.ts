import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Hero, MarvelResponse } from '../interfaces/heroes.interface';
import { map, Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HeroService {
  private http = inject(HttpClient);

  constructor() {
    this.getHeroes();
  }

  getHeroes(): Observable<MarvelResponse> {
    return this.http
      .get<MarvelResponse>(`${environment.baseUrl}/public/characters`, {
        params: {
          ts: environment.ts,
          apikey: environment.apiKey,
          hash: environment.hash,
          limit: 50,
        },
      })
      .pipe(tap((resp) => console.log(resp)));
  }

  getHeroById(id: number): Observable<MarvelResponse> {
    return this.http
      .get<MarvelResponse>(`${environment.baseUrl}/public/characters/${id}`, {
        params: {
          ts: environment.ts,
          apikey: environment.apiKey,
          hash: environment.hash,
        },
      })
      .pipe(tap((resp) => console.log(resp)));
  }

  searchHero(query: string): Observable<Hero[]> {
    query = query.toLowerCase();

    return this.http
      .get<MarvelResponse>(`${environment.baseUrl}/public/characters`, {
        params: {
          name: query,
          ts: environment.ts,
          apikey: environment.apiKey,
          hash: environment.hash,
        },
      })
      .pipe(map(({ data }) => data.results));
  }
}
