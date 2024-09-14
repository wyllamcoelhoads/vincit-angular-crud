import { Component , OnInit} from '@angular/core';
import {MoviesComponent } from '../../../views/movies/movies.component';
import {Router } from '@angular/router';
import {MovieService } from '../movie.service';
import {Movie} from '../movie.model';
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
  selector: 'app-movie-find',
  standalone: true,
  imports: [MoviesComponent,MatCardModule,MatDividerModule,MatFormFieldModule,MatIconModule,MatButtonModule,FormsModule,MatInputModule,CommonModule,MatSnackBarModule],
  templateUrl: './movie-find.component.html',
  styleUrl: './movie-find.component.css'
})

export class MovieFindComponent{

  
}
