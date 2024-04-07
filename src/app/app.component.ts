import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { InterpolacionComponent } from './components/interpolacion/interpolacion.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, HeaderComponent,InterpolacionComponent,ListUsersComponent,RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularV17test01';
}
