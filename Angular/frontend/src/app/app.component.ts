import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{title}} está rodando com sucesso!</h1>

    <h3> Isso é um teste. </h3>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'FrontEnd';
}
