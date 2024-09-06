import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'; // Se usar Angular Material no footer


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

}
