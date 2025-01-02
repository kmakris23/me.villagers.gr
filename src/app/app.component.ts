import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment.development';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'me.villagers.gr';
  expanded = true;
  theme: 'light' | 'dark' = 'dark'
  activeRoute = '';

  constructor(private router: Router) {
   
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log(event);
        this.activeRoute = event.url;
      }
      
    })
  }

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
