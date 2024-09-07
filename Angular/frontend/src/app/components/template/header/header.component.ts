import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'; // Importe o MatToolbarModule
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
    
  }

}

