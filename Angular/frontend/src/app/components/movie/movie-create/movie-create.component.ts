import {Component, OnInit } from '@angular/core';
import {MoviesComponent } from '../../../views/movies/movies.component';
import {Router } from '@angular/router';
import {MovieService } from '../movie.service';
import {Movie } from '../movie.model';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule } from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {CommonModule } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-movie-create',
  standalone: true,
  imports: [MatSnackBarModule, CommonModule, FormsModule, MatIconModule, MatInputModule, MatFormFieldModule, MoviesComponent, MatCardModule, MatDividerModule, MatButtonModule],
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent implements OnInit {
  movie: Movie = {
    title: "",
    director: "",
    genres: "",
    year: ""
  };

  constructor(private router: Router, private movieService: MovieService, private sharedService: SharedService) { }

  ngOnInit(): void {

  }

  createMovie(): void {
    this.sharedService.showMessage('Filme Adicionado com sucesso! ');
    this.movieService.create(this.movie).subscribe(() => {
        this.router.navigate(["./movies"]);
      }
    );
  }

  cancelar() {
    this.router.navigate(["./movies"]);
  }


}
