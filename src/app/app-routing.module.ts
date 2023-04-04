import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexPageComponent } from './pages/pokedex-page/pokedex-page.component';
import { CreatePokemonPageComponent } from './pages/create-pokemon-page/create-pokemon-page.component';

const routes: Routes = [
  {
    path: '',
    component: PokedexPageComponent,
  },
  {
    path: 'create',
    pathMatch: 'full',
    component: CreatePokemonPageComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
