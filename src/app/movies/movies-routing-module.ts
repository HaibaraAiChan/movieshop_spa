import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Movies } from './movies';
import { MovieDetails } from './movie-details/movie-details';
import { CastDetails } from './cast-details/cast-details';

const routes : Routes= [
  // Define child routes for MoviesModule here
  {
    path: '',
    component: Movies,  // http://localhost:4200/movies
    children: [
      // Add child routes here as needed
      {path:':id', component: MovieDetails},  // http://localhost:4200/movies/1
      {path:'cast/:id', component: CastDetails}  // http://localhost:4200/movies/cast/1
    ]
    
  },
//   {path:':id', component: MovieDetails},  // http://localhost:4200/movies/1
//   {path:'cast/:id', component: CastDetails}  // http://localhost:4200/movies/cast/1
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
