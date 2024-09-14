import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MovieIndexComponent} from '../../components/movie/movie-index/movie-index.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [MovieIndexComponent, HttpClientModule, MatCardModule, MatDividerModule, MatButtonModule],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  navigateToMovieCreate(){
    this.router.navigate(['/movies/create']);
  }

  navigateToMovieFind(){
    this.router.navigate(['/movies/find'])
  }

}

