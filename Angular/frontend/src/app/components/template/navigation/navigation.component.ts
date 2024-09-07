import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common'; 
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from '../../../views/home/home.component';
import { RouterModule } from '@angular/router';




@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MatListModule, MatSidenavModule, HomeComponent, CommonModule, MatIconModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

}
