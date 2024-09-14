import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie.model';
import {CommonModule } from '@angular/common';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-movie-index',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './movie-index.component.html',
  styleUrl: './movie-index.component.css'
})

export class MovieIndexComponent implements OnInit {

  movies: Movie[] = [];
  displayedColumns: string[] = ['id', 'title', 'director', 'genres', 'year'];

  constructor(private movieService: MovieService) { }
  
  ngOnInit(): void {
    this.movieService.index().subscribe(movies => {
      this.movies = movies
      console.log(movies)
    })
  }
}
