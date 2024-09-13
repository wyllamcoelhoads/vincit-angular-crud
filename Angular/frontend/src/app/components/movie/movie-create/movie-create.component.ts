import { Component, OnInit } from '@angular/core';
//import { MoviesComponent } from '../../../views/movies/movies.component';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-create',
  standalone: true,
  //imports: [],
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent implements OnInit {
  movie: Movie = {
    title: "Nome do filme",
    director: "Nome do diretor",
    genres: "Genero do filme",
    year: "Ano de lançamento"
  };

  constructor(private router: Router, private movieService: MovieService) { }

  ngOnInit(): void {

  }

  createMovie(): void {
    this.movieService.create(this.movie).subscribe(
      () => {
        this.router.navigate(["./movies"]);
      }
    );
  }

  cancelar() {
    this.router.navigate(["./movies"]);
  }


}
