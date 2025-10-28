import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetails } from './movie-details/movie-details';
import { MoviesRoutingModule } from './movies-routing-module';
import { Movies } from './movies';



@NgModule({
  declarations: [
    MovieDetails,
    Movies
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
