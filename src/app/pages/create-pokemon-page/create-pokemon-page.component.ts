import { Component, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Pokemon } from 'src/app/shared/pokemon.models';

@Component({
  selector: 'app-create-pokemon-page',
  templateUrl: './create-pokemon-page.component.html',
  styleUrls: ['./create-pokemon-page.component.css'],
})
export class CreatePokemonPageComponent {
  pokemon: Pokemon = new Pokemon();

  constructor(private router: Router) {}
  addPokemon(pokemon: Pokemon): void {
    this.pokemon = pokemon;
    console.log('pokemon Ajouté', this.pokemon);
    this.router.navigate(['/']);
  }
}
