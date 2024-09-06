import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/template/header/header.component';  // Importe o HeaderComponent
import { FooterComponent } from './components/template/footer/footer.component';
import { NavigationComponent } from './components/template/navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common'; 
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatIconModule, RouterOutlet, HeaderComponent, NavigationComponent, FooterComponent, MatToolbarModule, CommonModule],  // Adicione o HeaderComponent aqui
  templateUrl: 'app.component.html'
})
export class AppComponent {
}
