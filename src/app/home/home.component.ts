import { Component } from '@angular/core';
import { environment } from '../../environments/environment';


interface Work {
  company: string;
  position: string;
  fromDate: string;
  toDate: string | 'present';
  time?: 'Full-time' | 'Part-time';
}

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  x = environment.social.x;
  instagram = environment.social.instagram;
  github = environment.social.github;
  linkedIn = environment.social.linkedin;
  description!: string;

  work: Work[] = [
    {
      company: 'Scalarflow',
      position: 'Full-stack Engineer',
      fromDate: 'Sep 2019',
      toDate: 'Present',
      time: 'Full-time'
    },
    {
      company: 'Arkius',
      position: 'Full-stack Engineer',
      fromDate: 'Oct 2020',
      toDate: 'Present',
      time: 'Part-time'
    },
    {
      company: 'Menayas Worldwide LLC',
      position: 'Frontend Developer',
      fromDate: 'Sep 2019',
      toDate: 'Present',
      time: 'Part-time'
    },
    {
      company: 'Wizcom',
      position: 'Full-stack Developer',
      fromDate: 'Jul 2017',
      toDate: 'Nov 2019'
    }
  ]
}
