import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';

// Définition des routes de l'application
// Concept : ROUTING — associe chaque URL à un composant à afficher
export const routes: Routes = [
  // Redirection : "/" envoie vers la page d'accueil
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // "/home" affiche le composant Home
  { path: 'home', component: Home },
  // "/about" affiche le composant About
  { path: 'about', component: About }
];