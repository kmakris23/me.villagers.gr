import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home.component').then(e => e.HomeComponent)
    },
    {
        path: 'about',
        loadComponent: () => import('./about/about.component').then(e => e.AboutComponent)
    },
    {
        path: 'articles',
        loadComponent: () => import('./articles/articles.component').then(e => e.ArticlesComponent)
    },
    {
        path: 'article',
        loadComponent: () => import('./article/article.component').then(e => e.ArticleComponent)
    },
    {
        path: 'projects',
        loadComponent: () => import('./projects/projects.component').then(e => e.ProjectsComponent)
    },
    {
        path: 'speaking',
        loadComponent: () => import('./speaking/speaking.component').then(e => e.SpeakingComponent)
    },
    {
        path: 'uses',
        loadComponent: () => import('./uses/uses.component').then(e => e.UsesComponent)
    }
];
