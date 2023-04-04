import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/shared/pokedex.service';
import { Pokemon } from 'src/app/shared/pokemon.models';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.css'],
})
export class PokedexPageComponent implements OnInit {
  pokemonList: Array<Pokemon> = [];
  selectedPokemon: Pokemon = new Pokemon();

  constructor(public PokedexService: PokedexService) {}

  ngOnInit(): void {
    this.PokedexService.getPokemonList().subscribe((response) => {
      this.pokemonList = response;
    });
  }

  onDataChange(event: Pokemon): void {
    this.selectedPokemon = event;
    console.log('Parent', event.name);
  }
  // afficheMoit(): void {
  //   console.log(this.selectedPokemon.name);
  // }
}
