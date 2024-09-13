import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/template/header/header.component';  // Importe o HeaderComponent
import { FooterComponent } from './components/template/footer/footer.component';
import { NavigationComponent } from './components/template/navigation/navigation.component';
import { HomeComponent } from './views/home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common'; 
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HttpClientModule, MatIconModule, MatCardModule, MatDividerModule,MatButtonModule, RouterOutlet, HeaderComponent, HomeComponent, NavigationComponent, FooterComponent, MatToolbarModule, CommonModule],  // Adicione o HeaderComponent aqui
  templateUrl: 'app.component.html'
})
export class AppComponent {
}
