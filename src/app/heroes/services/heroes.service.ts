import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Hero, MarvelResponse } from '../interfaces/heroes.interface';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { Comic } from '../interfaces/comics.interface';

@Injectable({ providedIn: 'root' })
export class HeroService {
  private http = inject(HttpClient);
  private favorites = signal<Hero[]>([]);

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
      .pipe(
        map(({ data }) => data.results),
        catchError((err) => {
          console.log('Error:', err);
          return throwError(err);
        })
      )
      .pipe(tap((resp) => console.log(resp)));
  }

  addFavorite(hero: Hero): void {
    this.favorites.update((current) => [...current, hero]);
  }

  getFavorites(): Hero[] {
    return this.favorites();
  }

  // * Obtener los 20 primeros Cómics por la ID del héroe por fecha de salida
  public getComicsByHeroId(id: number): Observable<Comic[]> {
    return this.http
      .get<{ data: { results: Comic[] } }>(
        `${environment.baseUrl}/public/characters/${id}/comics`,
        {
          params: {
            ts: environment.ts,
            apikey: environment.apiKey,
            hash: environment.hash,
          },
        }
      )
      .pipe(
        map((response) => {
          const comics = response.data.results.sort(
            (a, b) =>
              new Date(
                a.dates.find((d) => d.type === 'onsaleDate')?.date || 0
              ).getTime() -
              new Date(
                b.dates.find((d) => d.type === 'onsaleDate')?.date || 0
              ).getTime()
          );
          // this._comicsSubject.next(comics);
          return comics;
        }),
        catchError((error) => {
          console.error('Error getting the hero comics', error);
          // this._comicsSubject.next([]);
          return of([]);
        })
      );
  }
}
