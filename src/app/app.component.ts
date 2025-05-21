import { NavbarComponent } from "./Shared/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';
}
