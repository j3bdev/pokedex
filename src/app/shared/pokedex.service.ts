import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon.models';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  constructor(public http: HttpClient) {}

  public getPokemonList(): Observable<Array<Pokemon>> {
    return this.http.get<Array<Pokemon>>(
      'https://pokebuildapi.fr/api/v1/pokemon/limit/12'
    );
  }
}
