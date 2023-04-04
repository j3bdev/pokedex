import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/shared/pokemon.models';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
})
export class PokemonDetailComponent {
  @Input() selectedPokemon: Pokemon = new Pokemon();
}
