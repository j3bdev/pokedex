import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/shared/pokemon.models';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.css'],
})
export class PokedexListComponent implements OnInit {
  @Input() pokemons: Array<Pokemon> = [];

  @Output() pokemonClick: EventEmitter<Pokemon> = new EventEmitter();
  constructor() {}
  sendDataToParent(poke: Pokemon): void {
    this.pokemonClick.emit(poke);
    console.log('enfant', poke.name);
  }

  ngOnInit(): void {}
}
