import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'me.villagers.gr';
  expanded = true;
  theme: 'light' | 'dark' = 'dark'

  toggleTheme() {
    document.body.classList.remove(this.theme);
    if (this.theme === 'dark') {
      this.theme = 'light';
    } else {
      this.theme = 'dark';
    }
    document.body.classList.add(this.theme);
  }
}
