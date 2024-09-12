import { Component, OnInit } from '@angular/core';
import { MoviesComponent } from '../../../views/movies/movies.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-create',
  standalone: true,
  imports: [MoviesComponent],
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  createMovie() {
    console.log("salvar");
  }

  cancelar() {
    this.router.navigate(["./movies"]);
  }


}
